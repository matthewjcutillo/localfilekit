// Static site generator: node build.mjs  ->  writes ./public (deploy that folder as-is).
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { tools, categories } from './src/tools.mjs';

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(ROOT, 'public');
const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, 'site.config.json'), 'utf8'));
const SITE = cfg.url.replace(/\/$/, '');
const NAME = cfg.name;
const YEAR = new Date().getFullYear();
const TODAY = new Date().toISOString().slice(0, 10);
const bySlug = Object.fromEntries(tools.map((t) => [t.slug, t]));

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const ld = (obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`;

const LOGO = `<svg viewBox="0 0 32 32" aria-hidden="true"><rect width="32" height="32" rx="8" fill="#1f6feb"/><path d="M9 7h9l5 5v13H9z" fill="#fff"/><path d="M18 7v5h5" fill="#cfe0ff"/><path d="M12 19l4 4 4-4M16 23v-8" stroke="#1f6feb" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

// Accepts "pub-123...", "ca-pub-123..." or just the digits
if (cfg.adsenseClient) cfg.adsenseClient = 'ca-pub-' + String(cfg.adsenseClient).replace(/^(ca-)?pub-/, '').trim();
const adsOn = Boolean(cfg.adsenseClient);
function adSlot(key) {
  if (!adsOn) return '';
  const slot = cfg.adSlots?.[key];
  if (!slot) return ''; // Auto ads still run when only the client id is set
  return `<div class="ad"><ins class="adsbygoogle" style="display:block" data-ad-client="${esc(cfg.adsenseClient)}" data-ad-slot="${esc(slot)}" data-ad-format="auto" data-full-width-responsive="true"></ins><script>(adsbygoogle=window.adsbygoogle||[]).push({});</script></div>`;
}

function layout({ title, desc, pathname, body, schema = [], noindex = false }) {
  const url = SITE + pathname;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${url}">
${noindex ? '<meta name="robots" content="noindex">' : ''}
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(NAME)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}/og.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#1f6feb">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/favicon.png" sizes="192x192">
<link rel="apple-touch-icon" href="/favicon.png">
<link rel="stylesheet" href="/assets/style.css">
${cfg.googleSiteVerification ? `<meta name="google-site-verification" content="${esc(cfg.googleSiteVerification)}">` : ''}
${adsOn ? `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${esc(cfg.adsenseClient)}" crossorigin="anonymous"></script>` : ''}
${schema.map(ld).join('\n')}
</head>
<body>
<header class="site"><div class="wrap">
<a class="logo" href="/">${LOGO}<span>${esc(NAME)}</span></a>
<nav class="top" aria-label="Tool categories"><a href="/#image">Image</a><a href="/#av">Audio &amp; Video</a><a href="/#pdf">PDF</a></nav>
</div></header>
<main><div class="wrap">
${body}
</div></main>
<footer class="site"><div class="wrap">
<nav aria-label="Site"><a href="/about/">About</a><a href="/privacy/">Privacy Policy</a><a href="/terms/">Terms</a><a href="/contact/">Contact</a></nav>
<div>© ${YEAR} ${esc(NAME)}. Free file tools that run in your browser. Files are never uploaded.</div>
</div></footer>
<script type="module" src="/assets/js/main.js"></script>
</body>
</html>
`;
}

const tile = (t) => `<a class="tile" href="/${t.slug}/"><b>${esc(t.name)}</b><span>${esc(t.blurb)}</span></a>`;
const faqHtml = (faq) => faq.map(([q, a]) => `<details><summary>${esc(q)}</summary><p>${esc(a)}</p></details>`).join('\n');
const faqSchema = (faq) => ({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) });
const crumbs = (items) => ({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items.map(([name, p], i) => ({ '@type': 'ListItem', position: i + 1, name, item: SITE + p })) });

function toolPage(t) {
  const cat = categories.find((c) => c.id === t.cat);
  const related = t.related.map((s) => bySlug[s]).filter(Boolean);
  const more = tools.filter((x) => x.cat === t.cat && x.slug !== t.slug && !t.related.includes(x.slug)).slice(0, 6);
  const data = [`data-family="${t.family}"`, t.mode && `data-mode="${t.mode}"`, t.to && `data-to="${t.to}"`, t.accept && `data-accept="${esc(t.accept)}"`, t.target && `data-target="${t.target}"`, t.maxw && `data-maxw="${t.maxw}"`, t.w && `data-w="${t.w}"`, t.h && `data-h="${t.h}"`].filter(Boolean).join(' ');
  const body = `
<p class="crumbs"><a href="/">Home</a> › <a href="/#${cat.id}">${esc(cat.name)}</a> › ${esc(t.name)}</p>
<h1>${esc(t.h1)}</h1>
<p class="lead">${esc(t.lead)}</p>
<div class="badge">🔒 Private: files stay on your device</div>
<section class="tool" id="tool" ${data}><noscript>This tool needs JavaScript turned on.</noscript></section>
${adSlot('top')}
<div class="prose">
<h2>How to ${esc(t.h1.charAt(0).toLowerCase() + t.h1.slice(1))}</h2>
<ol class="steps">${t.steps.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>
<p>${esc(t.intro)}</p>
<h2>Free, private and no sign-up</h2>
<p>${esc(NAME)} runs entirely in your web browser. Your files are processed on your own device and are never sent to a server, so they stay private and there are no upload waits, no account and no watermark.</p>
<h2>Questions</h2>
${faqHtml(t.faq)}
</div>
${adSlot('bottom')}
<h2>Related tools</h2>
<div class="grid">${[...related, ...more].slice(0, 6).map(tile).join('')}</div>
`;
  const schema = [
    { '@context': 'https://schema.org', '@type': 'WebApplication', name: `${t.name} – ${NAME}`, url: `${SITE}/${t.slug}/`, description: t.desc, applicationCategory: t.cat === 'image' ? 'MultimediaApplication' : t.cat === 'av' ? 'MultimediaApplication' : 'UtilitiesApplication', operatingSystem: 'Any (web browser)', browserRequirements: 'Requires JavaScript', isAccessibleForFree: true, offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' } },
    faqSchema(t.faq),
    crumbs([['Home', '/'], [cat.name, `/#${cat.id}`], [t.name, `/${t.slug}/`]]),
  ];
  return layout({ title: t.title, desc: t.desc, pathname: `/${t.slug}/`, body, schema });
}

function homePage() {
  const homeFaq = [
    ['Are these tools really free?', `Yes. Every tool on ${NAME} is free with no sign-up, no watermark and no daily limit. The site is supported by ads.`],
    ['Are my files uploaded?', 'No. Every tool runs inside your browser on your own device. Your files are never sent to a server.'],
    ['Do the tools work on phones?', 'Yes. They work in modern browsers on iPhone, Android, Windows, Mac and Chromebook.'],
    ['Can I download YouTube videos here?', 'No. These tools work with files you already have on your device.'],
  ];
  const body = `
<h1>Free file tools that run in your browser</h1>
<p class="lead">Compress and convert images, pull audio from video, and merge or split PDFs. No upload, no sign-up, no watermark.</p>
<div class="badge">🔒 Your files never leave your device</div>
${categories.map((c) => `<h2 id="${c.id}">${esc(c.name)}</h2>\n<div class="grid">${tools.filter((t) => t.cat === c.id).map(tile).join('')}</div>`).join('\n')}
${adSlot('top')}
<div class="prose">
<h2>Why use ${esc(NAME)}?</h2>
<ul>
<li><b>Private:</b> files are processed on your device and never uploaded.</li>
<li><b>Fast:</b> no upload or download wait, even for big batches of photos.</li>
<li><b>Free:</b> no account, no watermark and no limits on how often you use it.</li>
<li><b>Works anywhere:</b> phone, tablet or computer, in any modern browser.</li>
</ul>
<h2>Questions</h2>
${faqHtml(homeFaq)}
</div>
`;
  const schema = [
    { '@context': 'https://schema.org', '@type': 'WebSite', name: NAME, url: SITE + '/', description: cfg.tagline },
    { '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: tools.map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: t.name, url: `${SITE}/${t.slug}/` })) },
    faqSchema(homeFaq),
  ];
  return layout({ title: `${NAME} – Free File Converter & Compressor, No Upload`, desc: 'Free online tools to compress JPEG, convert images, convert MP4 to MP3, compress video and merge or split PDF. Private: files never leave your device.', pathname: '/', body, schema });
}

const contactLine = cfg.contactEmail
  ? `<p>Email: <a href="mailto:${esc(cfg.contactEmail)}">${esc(cfg.contactEmail)}</a></p>`
  : '<p>Contact email coming soon.</p>';

const pages = {
  about: ['About', `About ${NAME}`, `${NAME} offers free, private file tools that run in your browser.`, `
<h1>About ${esc(NAME)}</h1>
<p>${esc(NAME)} is a set of free tools for everyday file jobs: making photos smaller, converting image formats, pulling the audio out of a video, and merging or splitting PDFs.</p>
<p>Every tool runs inside your web browser using modern web technology. Your files are processed on your own device and are never uploaded, which keeps them private and makes the tools fast.</p>
<p>The site is free to use and is supported by advertising. If something does not work the way you expect, or you would like a new tool, please <a href="/contact/">get in touch</a>.</p>
<h2>Open-source credits</h2>
<p>Built with <a href="https://pdf-lib.js.org" rel="nofollow">pdf-lib</a> (MIT), <a href="https://mozilla.github.io/pdf.js/" rel="nofollow">PDF.js</a> (Apache 2.0), <a href="https://ffmpegwasm.netlify.app" rel="nofollow">ffmpeg.wasm</a> (MIT / GPL), <a href="https://github.com/breezystack/lamejs" rel="nofollow">lamejs</a> (LGPL) and <a href="https://stuk.github.io/jszip/" rel="nofollow">JSZip</a> (MIT). Thanks to their authors.</p>`],
  privacy: ['Privacy Policy', `Privacy Policy – ${NAME}`, `How ${NAME} handles your data, cookies and advertising.`, `
<h1>Privacy Policy</h1>
<p>Last updated: ${TODAY}</p>
<h2>Your files</h2>
<p>All tools on ${esc(NAME)} process files locally in your browser. Files you choose are not uploaded to our servers or to anyone else, and we cannot see them. When you close the page, they are gone from the page’s memory.</p>
<h2>Information collected automatically</h2>
<p>Like most websites, our hosting provider may log basic technical information such as IP address, browser type and pages visited, for security and to keep the site running. We do not use this to identify you.</p>
<h2>Advertising and cookies</h2>
<p>We use Google AdSense to show ads. Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this website or other websites. Google’s use of advertising cookies enables it and its partners to serve ads to you based on your visits to this and/or other sites on the Internet.</p>
<p>You may opt out of personalized advertising by visiting <a href="https://adssettings.google.com" rel="nofollow">Google Ads Settings</a>, or opt out of some third-party vendors’ use of cookies for personalized advertising at <a href="https://www.aboutads.info/choices/" rel="nofollow">www.aboutads.info</a>. Learn more about <a href="https://policies.google.com/technologies/partner-sites" rel="nofollow">how Google uses information from sites that use its services</a>.</p>
<p>Visitors in the European Economic Area, the UK and Switzerland are asked for consent before personalized ads are shown.</p>
<h2>Children</h2>
<p>This site is not directed at children under 13, and we do not knowingly collect information from them.</p>
<h2>Changes</h2>
<p>We may update this policy. The date at the top shows when it last changed.</p>
<h2>Contact</h2>
<p>Questions about this policy can be sent through our <a href="/contact/">contact page</a>.</p>`],
  terms: ['Terms of Use', `Terms of Use – ${NAME}`, `Terms for using ${NAME}.`, `
<h1>Terms of Use</h1>
<p>Last updated: ${TODAY}</p>
<p>By using ${esc(NAME)} you agree to these terms.</p>
<h2>Use of the tools</h2>
<p>The tools are free for personal and commercial use. You are responsible for the files you process and must have the right to use and convert them. Do not use the tools for anything unlawful or to infringe anyone’s copyright.</p>
<h2>No warranty</h2>
<p>The tools are provided “as is”, without warranty of any kind. Always keep a copy of your original files. We are not liable for any loss or damage arising from use of the site.</p>
<h2>Third-party content</h2>
<p>The site shows ads from third parties and may link to other websites. We are not responsible for their content or practices.</p>
<h2>Changes</h2>
<p>We may update these terms at any time. Continued use of the site means you accept the current terms.</p>
<h2>Contact</h2>
<p>See our <a href="/contact/">contact page</a>.</p>`],
  contact: ['Contact', `Contact – ${NAME}`, `Get in touch with ${NAME}.`, `
<h1>Contact</h1>
<p>Questions, bug reports and tool ideas are welcome.</p>
${contactLine}
<p>Please do not send files you have processed. Our tools never upload them, so we cannot see or recover them.</p>`],
};

function write(rel, content) {
  const p = path.join(OUT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content);
}
function copy(from, to) {
  const src = path.join(ROOT, from);
  const dst = path.join(OUT, to);
  fs.mkdirSync(path.dirname(dst), { recursive: true });
  fs.cpSync(src, dst, { recursive: true });
}

// ---- build ----
fs.rmSync(OUT, { recursive: true, force: true, maxRetries: 10, retryDelay: 500 });
copy('src/assets', 'assets');
copy('vendor', 'vendor');
copy('src/static', '.');
write('index.html', homePage());
for (const t of tools) write(`${t.slug}/index.html`, toolPage(t));
for (const [slug, [name, title, desc, body]] of Object.entries(pages)) {
  write(`${slug}/index.html`, layout({ title, desc, pathname: `/${slug}/`, body: `<p class="crumbs"><a href="/">Home</a> › ${esc(name)}</p><div class="prose">${body}</div>` }));
}
write('404.html', layout({ title: `Page not found – ${NAME}`, desc: 'Page not found.', pathname: '/404/', noindex: true, body: `<h1>Page not found</h1><p class="lead">That page doesn’t exist. Pick a tool below.</p><div class="grid">${tools.slice(0, 12).map(tile).join('')}</div>` }));

const urls = ['/', ...tools.map((t) => `/${t.slug}/`), ...Object.keys(pages).map((p) => `/${p}/`)];
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `<url><loc>${SITE}${u}</loc><lastmod>${TODAY}</lastmod></url>`).join('\n')}\n</urlset>\n`);
write('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
if (adsOn) write('ads.txt', `google.com, ${cfg.adsenseClient.replace(/^ca-/, '')}, DIRECT, f08c47fec0942fa0\n`);
write('favicon.svg', LOGO.replace('<svg ', '<svg xmlns="http://www.w3.org/2000/svg" '));
console.log(`Built ${urls.length} pages into public/ for ${SITE}`);
