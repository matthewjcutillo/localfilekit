# LocalFileKit (working name)

Free file tools that run 100% in the browser: image compress/convert/resize, MP4/video to MP3,
video convert/compress/GIF, PDF merge/split/rotate, JPG to PDF, PDF to JPG. No server, no uploads.

## Build
    node build.mjs        # writes ./public (static site, deploy as-is)

## Settings: site.config.json
- name, url: site name and final domain (rebuild after changing; canonical URLs and sitemap use it)
- contactEmail: shown on /contact/ (set before applying to AdSense)
- adsenseClient: e.g. ca-pub-123... Adds the AdSense script and ads.txt. Auto ads work with only this.
- adSlots.top / adSlots.bottom: optional manual ad unit IDs
- googleSiteVerification: Search Console meta tag value

## Deploy (Vercel)
vercel.json points at ./public, no build step needed. After going live: add the domain,
submit /sitemap.xml in Google Search Console, then apply to AdSense and turn on Google's
consent message (Privacy & messaging) for EU/UK visitors.

## Files
- src/tools.mjs: page content (titles, descriptions, steps, FAQ) for every tool
- src/assets/js: tool code (image.js, audio.js, video.js, pdf.js)
- vendor/: pdf-lib, pdf.js, ffmpeg.wasm, lamejs, JSZip (see vendor/VERSIONS.txt)
