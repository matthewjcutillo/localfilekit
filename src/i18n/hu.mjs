// Hungarian (hu) version of every page. Written by hand for natural, everyday Hungarian.
const local = 'A fájljaid sosem hagyják el a készülékedet. Minden a böngésződben fut, így nincs feltöltés, nincs várakozás sorban, és semmit sem tárolunk szerveren.';

// Article before a format name, by how it is read aloud ("az MP3", "az SVG", but "a PNG", "a MOV").
const vowelRead = /^(SVG|AVIF|AVI|OGG|AAC|MKV|MP3|MP4|M4A|FLV)$/;
const az = (F) => (vowelRead.test(F) ? 'az' : 'a');
const Az = (F) => (vowelRead.test(F) ? 'Az' : 'A');

export const ui = {
  lang: 'hu', locale: 'hu_HU', prefix: '/hu',
  langName: 'Magyar',
  home: 'Főoldal',
  nav: { image: 'Kép', av: 'Hang és videó', pdf: 'PDF', size: 'Pontos méretek' },
  cats: {
    image: 'Képeszközök',
    size: 'Tömörítés vagy átméretezés pontos méretre',
    av: 'Hang- és videóeszközök',
    pdf: 'PDF-eszközök',
  },
  badge: '🔒 Privát: a fájljaid nem hagyják el a készülékedet',
  howTo: 'Így használd',
  freeH: 'Ingyenes, privát, regisztráció nélkül',
  freeP: (name) => `Ez az eszköz teljes egészében a böngésződben fut. A fájljaidat a saját készüléked dolgozza fel, és soha nem kerülnek szerverre, így privátak maradnak: nem kell a feltöltésre várni, nem kell fiók, és nincs vízjel.`,
  questions: 'Gyakori kérdések',
  related: 'Kapcsolódó eszközök',
  noscript: 'Ehhez az eszközhöz engedélyezni kell a JavaScriptet.',
  footer: 'Ingyenes fájleszközök, amelyek a böngésződben futnak. A fájlok sosem töltődnek fel.',
  footNav: { about: 'Rólunk', privacy: 'Adatvédelem', terms: 'Felhasználási feltételek', contact: 'Kapcsolat' },
  homeTitle: (name) => `${name} – Ingyenes fájlkonvertáló és -tömörítő, feltöltés nélkül`,
  homeDesc: 'Ingyenes online eszközök JPEG-tömörítéshez, képek átalakításához, MP4 → MP3 konvertáláshoz, videótömörítéshez, valamint PDF-ek egyesítéséhez és szétválasztásához. Privát: a fájljaid nem hagyják el a készülékedet.',
  homeH1: 'Ingyenes fájleszközök, amelyek a böngésződben futnak',
  homeLead: 'Tömöríts és alakíts át képeket, nyerd ki a hangot a videókból, egyesíts vagy válassz szét PDF-eket. Feltöltés, regisztráció és vízjel nélkül.',
  promiseB: 'A fájljaid sosem hagyják el a készülékedet.',
  promiseP: 'Minden eszköz itt, a böngésződben működik. Semmi sem töltődik fel, így a fotóid, videóid és dokumentumaid privátak maradnak, a nagy fájlok pedig másodpercek alatt elkészülnek.',
  searchPh: (n) => `Keress ${n} eszköz között: próbáld ezt: „mp4 mp3” vagy „100 kb”`,
  searchNone: 'Erre még nincs eszköz. Próbálj egy másik szót, például „tömörítés” vagy „pdf”.',
  whyH: (name) => `Miért pont ${name}?`,
  why: [
    ['Privát:', 'a fájlok a saját készülékeden dolgozódnak fel, és sosem töltődnek fel.'],
    ['Gyors:', 'nem kell a fel- és letöltésre várni, még nagy adag fotónál sem.'],
    ['Ingyenes:', 'nem kell fiók, nincs vízjel, és nincs korlátozva, milyen gyakran használod.'],
    ['Bárhol működik:', 'telefonon, tableten vagy számítógépen, bármilyen modern böngészőben.'],
  ],
  homeFaq: (name) => [
    ['Tényleg ingyenesek ezek az eszközök?', `Igen. Itt minden eszköz ingyenes: nem kell regisztrálni, nincs vízjel és nincs napi korlát. Az oldalt hirdetések tartják fenn.`],
    ['Feltöltődnek a fájljaim?', 'Nem. Minden eszköz a böngésződben, a saját készülékeden fut. A fájljaid sosem kerülnek szerverre.'],
    ['Működnek az eszközök telefonon?', 'Igen. Működnek modern böngészőkben iPhone-on, Androidon, Windowson, Macen és Chromebookon.'],
    ['Letölthetek itt YouTube-videókat?', 'Nem. Ezek az eszközök a készülékeden már meglévő fájlokkal dolgoznak.'],
  ],
  // Words shown by the tools themselves (buttons, labels, messages)
  strings: {
    'Download': 'Letöltés',
    'Download all (ZIP)': 'Összes letöltése (ZIP)',
    'Choose images or drop them here': 'Válassz képeket, vagy húzd ide őket',
    'JPG, PNG, WebP and more. Batch is fine. Nothing is uploaded.': 'JPG, PNG, WebP és más formátumok. Egyszerre többet is választhatsz. Semmi sem töltődik fel.',
    'Or paste an image with Ctrl+V.': 'Vagy illessz be egy képet a Ctrl+V billentyűkkel.',
    'Quality ': 'Minőség ',
    'Same as original': 'Mint az eredeti',
    'Original': 'Eredeti',
    'Any': 'Bármekkora',
    'Target size (KB)': 'Célméret (KB)',
    'Output format': 'Kimeneti formátum',
    'Max width (px)': 'Max. szélesség (px)',
    'Convert to': 'Célformátum',
    'Pixels': 'Pixel',
    'Percent': 'Százalék',
    'Auto': 'Auto',
    'Width': 'Szélesség',
    'Height': 'Magasság',
    'Resize by': 'Átméretezés módja',
    'Format': 'Formátum',
    'Working…': 'Feldolgozás…',
    'Failed': 'Hiba',
    'already small': 'már eleve kicsi',
    'This browser cannot open this image type': 'Ez a böngésző nem tudja megnyitni ezt a képtípust',
    'Could not encode image': 'Nem sikerült elmenteni a képet',
    'Choose files or drop them here': 'Válassz fájlokat, vagy húzd ide őket',
    'MP4, MOV, WebM, M4A, WAV and more. Nothing is uploaded.': 'MP4, MOV, WebM, M4A, WAV és más formátumok. Semmi sem töltődik fel.',
    'MP3 quality': 'MP3-minőség',
    'Output': 'Kimenet',
    'Reading…': 'Beolvasás…',
    'Done.': 'Kész.',
    'Loading converter (first time only)…': 'A konvertáló betöltése (csak első alkalommal)…',
    'Converting…': 'Átalakítás…',
    'No audio track found': 'Nem található hangsáv',
    'Choose a video or drop it here': 'Válassz egy videót, vagy húzd ide',
    'MP4, MOV, WebM, MKV, AVI and more. Works best under 500 MB. Nothing is uploaded.': 'MP4, MOV, WebM, MKV, AVI és más formátumok. 500 MB alatt működik a legjobban. Semmi sem töltődik fel.',
    'Light (best quality)': 'Enyhe (legjobb minőség)',
    'Medium': 'Közepes',
    'Strong (smallest)': 'Erős (legkisebb fájl)',
    'Keep size': 'Eredeti méret',
    'Compression': 'Tömörítés',
    'Max resolution': 'Max. felbontás',
    'Start (sec)': 'Kezdés (mp)',
    'Length (sec)': 'Hossz (mp)',
    'Frame rate': 'Képkockasebesség',
    'Size': 'Méret',
    'Loading converter (first time can take a moment)…': 'A konvertáló betöltése (első alkalommal eltarthat egy kicsit)…',
    'That file could not be converted. Try a smaller or different file.': 'Ezt a fájlt nem sikerült átalakítani. Próbálj egy kisebb vagy másik fájlt.',
    'This PDF is password-protected': 'Ez a PDF jelszóval védett',
    'Could not read this PDF': 'Nem sikerült beolvasni ezt a PDF-et',
    'Enter the pages you want': 'Add meg a kívánt oldalakat',
    'Move up': 'Feljebb',
    'Move down': 'Lejjebb',
    'Remove': 'Eltávolítás',
    'Merge PDFs': 'PDF-ek egyesítése',
    'Add at least two PDFs.': 'Adj hozzá legalább két PDF-et.',
    'Extract pages into one PDF': 'Oldalak kinyerése egy PDF-be',
    'Every page as its own PDF': 'Minden oldal külön PDF-ben',
    'Pages': 'Oldalak',
    'Split PDF': 'PDF szétválasztása',
    'Mode': 'Mód',
    'Same as image': 'Mint a kép',
    'US Letter': 'Letter (USA)',
    'No margin': 'Nincs margó',
    'Small margin': 'Kis margó',
    'Big margin': 'Nagy margó',
    'Create PDF': 'PDF létrehozása',
    'Page size': 'Oldalméret',
    'Margin': 'Margó',
    'Could not create the PDF': 'Nem sikerült létrehozni a PDF-et',
    'All pages': 'Összes oldal',
    'Rotate': 'Forgatás',
    'Pages (optional)': 'Oldalak (nem kötelező)',
    'Normal (72 dpi)': 'Normál (72 dpi)',
    'High (144 dpi)': 'Magas (144 dpi)',
    'Very high (216 dpi)': 'Nagyon magas (216 dpi)',
    'Image format': 'Képformátum',
    'Quality': 'Minőség',
    'Choose a PDF or drop it here': 'Válassz egy PDF-et, vagy húzd ide',
    'Choose PDFs or drop them here': 'Válassz PDF-eket, vagy húzd ide őket',
    'Your files stay on your device. Nothing is uploaded.': 'A fájljaid a készülékeden maradnak. Semmi sem töltődik fel.',
    'This tool needs a modern browser (Chrome, Edge, Firefox or Safari).': 'Ehhez az eszközhöz modern böngésző kell (Chrome, Edge, Firefox vagy Safari).',
  },
  patterns: [
    ['^Converting… (\\d+)%$', 'Átalakítás… $1%'],
    ['^(\\d+) files? done\\.$', '$1 fájl kész.'],
    ['^Pages must be between 1 and (\\d+)$', 'Az oldalszám 1 és $1 között lehet'],
    ['^Merged (\\d+) files into merged\\.pdf \\((\\d+) pages\\)\\.$', '$1 fájl egyesítve: merged.pdf ($2 oldal).'],
    ['^Saved (\\d+) pages?\\.$', '$1 oldal mentve.'],
    ['^Split into (\\d+) files \\(ZIP\\)\\.$', 'Szétválasztva $1 fájlra (ZIP).'],
    ['^Created images\\.pdf with (\\d+) pages?\\.$', 'Elkészült az images.pdf ($1 oldal).'],
    ['^Download (\\d+) images \\(ZIP\\)$', '$1 kép letöltése (ZIP)'],
    ['^(\\d+) pages$', '$1 oldal'],
  ],
};

const slugify = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// ---------- Generated families ----------
const imgIntro = {
  'png-to-jpg': 'Fotóknál a JPG-fájlok jóval kisebbek, mint a PNG-k, így könnyebb őket e-mailben elküldeni vagy feltölteni. Az átlátszó részek fehérrel telnek ki, mert a JPG nem ismeri az átlátszóságot.',
  'jpg-to-png': 'A PNG veszteségmentes, ezért jó választás, ha tovább szeretnéd szerkeszteni a képet anélkül, hogy újabb tömörítés rontana rajta. Számíts rá, hogy a PNG nagyobb lesz, mint a JPG.',
  'webp-to-jpg': 'Egyes alkalmazások, képszerkesztők és feltöltési űrlapok még mindig nem fogadják el a WebP-t. JPG-be alakítva a kép mindenhol megnyílik.',
  'webp-to-png': 'Ha a WebP-t PNG-vé alakítod, megmarad az átlátszóság, és olyan fájlt kapsz, amelyet bármelyik képszerkesztő megnyit.',
  'jpg-to-webp': 'Azonos látható minőség mellett a WebP általában 25–35%-kal kisebb a JPG-nél, így a weboldalak gyorsabban betöltődnek, és ez a keresőben elért helyezésen is javíthat.',
  'png-to-webp': 'A WebP a PNG-hez hasonlóan megőrzi az átlátszóságot, de gyakran a többszörösével kisebb, ezért ideális logókhoz, ikonokhoz és képernyőképekhez weboldalakon.',
  'bmp-to-png': 'A BMP-fájlok tömörítetlenek és nagyon nagyok. A PNG minden pixelt megőriz, mégis általában csak töredékük méretű.',
  'bmp-to-jpg': 'A régi szkennerekből és a Windows Paintből származó BMP-fájlok óriásiak. JPG-ként már elég kicsik ahhoz, hogy e-mailben elküldd vagy feltöltsd őket.',
  'gif-to-png': 'Az eszköz a GIF első képkockáját PNG-állóképként menti el, a GIF 256 színe helyett teljes színskálával.',
  'gif-to-jpg': 'Az eszköz a GIF első képkockáját JPG-állóképként menti el – ez jól jön bélyegképekhez és előnézetekhez.',
  'svg-to-png': 'Az SVG-logók és -ikonok nem mindenhol nyílnak meg. A PNG működik dokumentumokban, diákon és közösségi bejegyzésekben, és megtartja az átlátszóságot.',
  'svg-to-jpg': 'Alakíts egy SVG-logót vagy -rajzot olyan JPG-vé, amelyet bármelyik alkalmazás megnyit. Az átlátszó részek fehérek lesznek.',
  'avif-to-jpg': 'Az AVIF új, nagyon kis méretű képformátum, amelyet sok alkalmazás és régebbi készülék még nem tud megnyitni. A JPG mindenhol működik.',
  'avif-to-png': 'Az AVIF-képek gyakran nem nyílnak meg képszerkesztőkben vagy régebbi programokban. A PNG-t mindenhol elfogadják, és megtartja az átlátszóságot.',
};
function img(t, [, from, to, F, T]) {
  return {
    slug: `${from}-bol-${to}`,
    name: `${F} → ${T}`, blurb: `${F}-képek átalakítása ${T}-formátumba`,
    title: `${F} → ${T} konvertáló – ingyenes, gyors, feltöltés nélkül`,
    desc: `Alakíts át ${F}-képeket ${T}-formátumba ingyen, a böngésződben. Egyszerre többet is, teljes minőségben, feltöltés és regisztráció nélkül.`,
    h1: `${F} konvertálása ${T}-formátumba`,
    lead: `${F}-képeidből másodpercek alatt ${T}-fájlok lesznek, egyenként vagy egyszerre többből is.`,
    intro: imgIntro[t.slug],
    steps: [`Válaszd ki ${az(F)} ${F}-fájlokat, vagy húzd őket a mezőbe.`, `Ellenőrizd, hogy a „${T}” formátum van-e kiválasztva${to === 'png' ? '' : ', és állítsd be a minőséget'}.`, `Töltsd le egyenként a ${T}-fájlokat, vagy mindet egyben ZIP-ben.`],
    faq: [
      [`Romlik a minőség ${az(F)} ${F} → ${T} átalakítás során?`, to === 'png' ? `Nem. A PNG veszteségmentes, így ${az(F)} ${F}-kép minden pixele megmarad.` : `${Az(T)} ${T} tömörített formátum. 85–95%-os minőségnél alig látható a különbség.`],
      [`Átalakíthatok egyszerre sok ${F}-fájlt?`, 'Igen. Válassz ki vagy húzz be annyit, amennyit csak szeretnél, és töltsd le őket egyben, ZIP-fájlként.'],
      ['Feltöltődnek a képeim?', local],
    ],
  };
}

const audioIntro = {
  'mov-to-mp3': 'A MOV az a videóformátum, amelyben az iPhone-ok és a Macek felvételt készítenek. Mentsd el MP3-ként egy iPhone-os videó, egy próba vagy egy interjú hangját.',
  'webm-to-mp3': 'WebM-fájlokat képernyőrögzítők, böngészők és egyes letöltőeszközök készítenek. Mentsd el a hangsávot MP3-ként a telefonodra vagy a podcastalkalmazásodba.',
  'mkv-to-mp3': 'Az MKV egy konténerformátum, amelyet sok kamera és felvevőalkalmazás használ. Nyerd ki MP3-ként a saját MKV-fájlod hangsávját.',
  'avi-to-mp3': 'Az AVI egy régebbi, windowsos videóformátum. Mentsd el MP3-ként régi otthoni videók vagy felvételek hangját.',
  'ogg-to-mp3': 'Az OGG Vorbis nyílt hangformátum, amelyet sok autórádió és Apple-készülék nem játszik le. Az MP3 viszont mindenen megszólal.',
  'flac-to-mp3': 'A FLAC veszteségmentes és nagy: dalonként körülbelül 30 MB. Egy 320 kbps minőségű MP3 szinte ugyanúgy szól negyedakkora méretben, így több dal fér el a telefonon vagy a pendrive-on.',
  'aac-to-mp3': 'Az AAC-t az iTunes, a YouTube és sok telefon használja. Néhány régebbi lejátszó és alkalmazás csak MP3-at fogad el.',
  'mp4-to-wav': 'Szükséged van egy videó hangjára szerkesztéshez? A WAV tömörítetlen, ezért ez a legbiztosabb formátum, ha Audacitybe, GarageBandbe vagy egy DAW-programba akarod áttenni.',
  'mp3-to-wav': 'Egyes szerkesztők, samplerek és telefonrendszerek csak WAV-ot fogadnak el. Ha az MP3-at WAV-vá alakítod, a fájl kompatibilis lesz, de azokat a részleteket, amelyeket az MP3 eltávolított, nem hozza vissza.',
  'm4a-to-wav': 'Az M4A az iPhone-on rögzített hangjegyzetek és az iTunes-letöltések formátuma. A WAV bármelyik hangszerkesztőben megnyílik.',
};
function audio(t, [, from, F, to]) {
  const T = to.toUpperCase();
  return {
    slug: `${from}-bol-${to}`,
    name: `${F} → ${T}`, blurb: /mp4|mov|webm|mkv|avi/.test(from) ? `Hang kinyerése ${F}-fájlokból` : `${F}-hang átalakítása ${T}-formátumba`,
    title: `${F} → ${T} konvertáló – ingyenes, privát, feltöltés nélkül`,
    desc: `Alakíts át ${F}-fájlokat ${T}-formátumba ingyen, a böngésződben. ${to === 'mp3' ? '128 és 320 kbps között választhatsz.' : 'Tömörítetlen WAV szerkesztéshez.'} Feltöltés, regisztráció és vízjel nélkül.`,
    h1: `${F} konvertálása ${T}-formátumba`,
    lead: `${F}-fájlokból néhány másodperc alatt ${T}-hangfájl lesz, közvetlenül a saját készülékeden.`,
    intro: audioIntro[t.slug],
    steps: [`Válaszd ki ${az(F)} ${F}-fájlokat, vagy húzd őket a mezőbe.`, to === 'mp3' ? 'Válaszd ki az MP3 minőségét. A legtöbb célra a 192 kbps megfelel, zenéhez a 320 kbps.' : 'Hagyd kiválasztva a WAV-ot.', 'Várd meg, amíg a hang átalakul.', `Töltsd le ${az(T)} ${T}-fájlt.`],
    faq: [
      [to === 'mp3' ? 'Milyen MP3-minőséget válasszak?' : 'Miért érdemes a WAV-ot választani?', to === 'mp3' ? '128 kbps beszédhez elég, 192 kbps a legtöbb zenéhez, 320 kbps pedig a legjobb minőséghez.' : 'A WAV tömörítetlen, ezért ez a legbiztosabb formátum a szerkesztéshez Audacityben, GarageBandben vagy bármelyik DAW-programban. Egy perc nagyjából 10 MB.'],
      [`Átalakíthatok egyszerre több ${F}-fájlt?`, 'Igen. Adj hozzá annyit, amennyit szeretnél, és egymás után alakulnak át.'],
      ['Feltöltődnek a fájljaim?', local],
    ],
  };
}

const videoIntro = {
  'webm-to-mp4': 'A WebM-formátumú képernyőfelvételek és böngészős letöltések sok telefonon, tévén és PowerPointban nem játszhatók le.',
  'mkv-to-mp4': 'Az MKV-fájlok gyakran nem játszhatók le iPhone-on, okostévén vagy videószerkesztőkben.',
  'avi-to-mp4': 'Az AVI régi, terjedelmes formátum, amelyet a telefonok és a weboldalak nem igazán támogatnak.',
  'flv-to-mp4': 'Az FLV egy régi Flash-videóformátum, amelyet a modern készülékek nem tudnak lejátszani.',
  'mp4-to-webm': 'Weboldalt készítesz?',
  'mp4-to-mov': 'Macen szerkesztesz videót?',
};
function video(t, [, from, F, to]) {
  const T = to.toUpperCase();
  const tail = to === 'mp4' ? 'A H.264-es MP4 szinte minden telefonon, számítógépen, tévén és weboldalon lejátszható.' : to === 'webm' ? 'A WebM nyílt, a webre készült formátum, és minden modern böngésző lejátssza.' : 'A MOV az Apple videóformátuma, és gond nélkül megnyílik QuickTime-ban, iMovie-ban és Final Cutban.';
  return {
    slug: `${from}-bol-${to}`,
    name: `${F} → ${T}`, blurb: `${F}-videók átalakítása ${T}-formátumba`,
    title: `${F} → ${T} konvertáló – ingyenes, feltöltés és vízjel nélkül`,
    desc: `Alakíts át ${F}-videókat ${T}-formátumba ingyen, a böngésződben. Feltöltés, vízjel és regisztráció nélkül. Működik Windowson, Macen és Chromebookon.`,
    h1: `${F} konvertálása ${T}-formátumba`,
    lead: `${F}-videóidból olyan ${T}-fájlok lesznek, amelyek ott is lejátszhatók, ahol szükséged van rájuk.`,
    intro: `${videoIntro[t.slug]} ${tail}`,
    steps: [`Válaszd ki ${az(F)} ${F}-videót, vagy húzd a mezőbe.`, `Hagyd kiválasztva ezt: „${to === 'mp4' ? 'MP4 (H.264)' : to === 'webm' ? 'WebM (VP8)' : 'MOV'}”.`, 'Amíg tart az átalakítás, hagyd nyitva a lapot.', `Töltsd le ${az(T)} ${T}-fájlt.`],
    faq: [
      [`Romlik a minőség ${az(F)} ${F} → ${T} átalakítás során?`, 'A videót magas minőségi beállítással kódoljuk újra, így a különbség alig látható.'],
      ['Mennyi ideig tart?', 'Egy átlagos laptopon nagyjából annyi ideig, amilyen hosszú maga a videó. A rövid klipek gyorsan elkészülnek, a hosszú videók számítógépen gyorsabbak, mint telefonon.'],
      ['Feltöltődnek a videóim?', local],
    ],
  };
}

const sizeWhy = {
  'compress-image-to-20kb': 'Egyes hivatali és vizsgajelentkezési űrlapok csak 20 KB alatti fotókat és aláírásokat fogadnak el.',
  'compress-image-to-50kb': 'Az állásportálok, a vizsgajelentkezési űrlapok és az igazolványigénylések gyakran 50 KB alatti képet kérnek.',
  'compress-image-to-100kb': 'Sok online űrlapon, profiloldalon és levelezőrendszerben a feltölthető képek felső határa 100 KB.',
  'compress-image-to-200kb': 'A jelentkezési űrlapok és a weboldalak gyakran legfeljebb 200 KB méretű fotót engednek.',
  'compress-image-to-500kb': 'Fórumokon, iskolai portálokon és hirdetési oldalakon gyakori, hogy egy kép legfeljebb 500 KB lehet.',
  'compress-image-to-1mb': 'Sok weboldalon és e-mail-szolgáltatásnál képenként nagyjából 1 MB a mellékletek felső határa.',
  'compress-jpeg-to-100kb': 'A telefonnal készült JPEG-ek általában 2–5 MB méretűek, pedig sok űrlapon a felső határ 100 KB.',
  'compress-jpeg-to-200kb': 'A telefonnal készült JPEG-ek általában 2–5 MB méretűek, pedig sok űrlapon a felső határ 200 KB.',
};
function size(t, [, kb, jpeg]) {
  const L = kb >= 1000 ? `${kb / 1000} MB` : `${kb} KB`;
  const what = jpeg ? 'JPEG' : 'Kép';
  return {
    slug: `${jpeg ? 'jpeg' : 'kep'}-tomorites-${kb >= 1000 ? kb / 1000 + 'mb' : kb + 'kb'}`,
    name: `${what} tömörítése ${L} alá`, blurb: `Vidd ${L} alá bármelyik ${jpeg ? 'JPG-fotódat' : 'képedet'}`,
    title: `${what} tömörítése ${L} alá online – ingyenes, pontos méret, feltöltés nélkül`,
    desc: `Tömöríts ${jpeg ? 'egy JPG-fotót' : 'egy képet'} egyetlen lépésben ${L} vagy annál kisebb méretre. Az eszköz megkeresi a legjobb minőséget, amely még ${L} alatt marad. Ingyenes, privát, feltöltés és regisztráció nélkül.`,
    h1: `${what} tömörítése ${L} alá`,
    lead: `Húzz be egy fotót, és kapsz róla egy ${L} alatti másolatot, a lehető legjobb minőségben.`,
    intro: `${sizeWhy[t.slug]} Ahelyett, hogy találgatnod kellene a minőségi beállítást, az eszköz kipróbál helyetted többféle beállítást, és azt a legélesebb változatot tartja meg, amely ${L} alatt marad. Ha a fotó nagyon nagy, kicsit le is kicsinyíti, amíg bele nem fér.`,
    steps: [`Válaszd ki a ${jpeg ? 'JPG-' : ''}fotóidat, vagy húzd őket a mezőbe.`, `A célméret maradhat ${kb} KB, vagy írj be másikat.`, `Töltsd le egyenként a ${L} alatti fotókat, vagy mindet egyben ZIP-ben.`],
    faq: [
      [`Pontosan ${L} lesz a fotó?`, `${L} lesz, vagy kicsivel kevesebb. Az eszköz a legmagasabb olyan minőséget választja, amely még belefér a korlátba.`],
      ['Miért lett kisebb a képem pixelben?', `Egyes fotók pusztán a minőség csökkentésével nem férnek be ${L} alá. Ilyenkor az eszköz lépésről lépésre csökkenti a szélességet és a magasságot, amíg a fájl bele nem fér.`],
      ['Megcsinálhatom egyszerre sok fotóval?', 'Igen. Minden hozzáadott fotót ugyanarra a méretre igazít az eszköz, és egyben, ZIP-fájlként is letöltheted őket.'],
      ['Feltöltődnek a fotóim?', local],
    ],
  };
}

// [slug, "for <site>" form, why, tip]
const sites = {
  'resize-image-for-instagram': ['kep-atmeretezes-instagramhoz', 'Instagramhoz', 'Az Instagram 1080 px szélességben jeleníti meg a bejegyzéseket. A négyzetes bejegyzések 1080 × 1080, az álló formátumúak 1080 × 1350 pixelesek.', 'Ha csak a szélességet állítod be, a fotó megtartja az arányait, így semmi sem torzul.'],
  'resize-image-for-youtube-thumbnail': ['kep-atmeretezes-youtube-belyegkephez', 'YouTube-bélyegképhez', 'A YouTube 1280 × 720 pixeles (16:9 arányú), 2 MB alatti bélyegképeket javasol.', 'Indulj egy széles, 16:9 arányú képből, hogy ne torzuljon.'],
  'resize-image-for-facebook-cover': ['kep-atmeretezes-facebook-boritokephez', 'Facebook-borítóképhez', 'A Facebook-borítóképek számítógépen 851 × 315 pixeles méretben jelennek meg.', 'Válassz egy széles képet, vagy töröld a magasságot, hogy megmaradjon az aránya.'],
  'resize-image-for-twitter-header': ['kep-atmeretezes-x-twitter-fejleckephez', 'X-fejlécképhez (Twitter)', 'Az X (Twitter) fejlécképei 1500 × 500 pixelesek.', 'Használj széles, 3:1 arányú képet, vagy töröld a magasságot, hogy megmaradjon az aránya.'],
};
function site(t, [, , w, h]) {
  const [slug, forX, why, tip] = sites[t.slug];
  const dims = `${w}${h ? ' × ' + h : ' px széles'}`;
  return {
    slug,
    name: `Átméretezés ${forX}`, blurb: dims,
    title: `Kép átméretezése ${forX} – ${w}${h ? '×' + h : ' px'}, ingyen, feltöltés nélkül`,
    desc: `Méretezd át a fotóidat a megfelelő méretre ${forX} (${dims}). Ingyenes, gyors, a böngésződben fut, feltöltés nélkül.`,
    h1: `Kép átméretezése ${forX}`,
    lead: `A szélesség${h ? ' és a magasság' : ''} már be van állítva ${forX}. Csak add hozzá a fotódat.`,
    intro: `${why} ${tip}`,
    steps: ['Válaszd ki a képet, vagy húzd a mezőbe.', `Hagyd meg az előre beállított méretet (${dims}), vagy írj be másikat.`, 'Töltsd le az átméretezett képet, és töltsd fel.'],
    faq: [
      [`Milyen méret a legjobb ${forX}?`, why],
      ['Torzulni fog a fotóm?', h ? `Csak akkor, ha a kép aránya nem egyezik ezzel: ${w} × ${h}. ${tip}` : 'Nem. Csak a szélesség van megadva, a magasság az eredeti arányt követi.'],
      ['Feltöltődnek a képeim?', local],
    ],
  };
}

// ---------- Hand-written pages ----------
const hand = {
  'compress-jpeg': {
    slug: 'jpeg-tomorites', name: 'JPEG-tömörítés', blurb: 'Kisebb JPG-fotók látható minőségromlás nélkül',
    title: 'JPEG tömörítése online – JPG-méret csökkentése ingyen, feltöltés nélkül',
    desc: 'Tömöríts JPEG- és JPG-fotókat ingyen. Akár 80%-kal kisebb fájlméret, látható minőségromlás nélkül. Egyszerre több fájl is, feltöltés és regisztráció nélkül.',
    h1: 'JPEG-képek tömörítése',
    lead: 'Tedd kisebbé a JPG-fotóidat e-mailhez, weboldalakhoz és űrlapokhoz úgy, hogy élesek maradjanak.',
    intro: 'A telefonos fotók gyakran 3–8 MB méretűek. Ennek nagy része olyan részlet, amelyet a szem nem lát. Ha a minőséget 70–80% körülire állítod, a fájl általában a felére vagy még kisebbre csökken, és ha megadsz egy maximális szélességet (például 1920 px), tovább csökken.',
    steps: ['Válaszd ki a JPG-fotóidat, vagy húzd őket a mezőbe.', 'Válassz minőséget. A 75% jó egyensúly a méret és az élesség között.', 'Ha szeretnéd, adj meg maximális szélességet, hogy a nagy fotók még kisebbek legyenek.', 'Töltsd le a fotókat egyenként, vagy mindet egyben ZIP-ben.'],
    faq: [
      ['Mennyivel lesz kisebb a JPEG-em?', 'Általában 40–80%-kal, a fotótól és a választott minőségtől függően. Ha egy fotó már eleve jól tömörített, az eredeti marad meg, így sosem lesz nagyobb.'],
      ['Milyen minőséget válasszak?', 'A 75% a legtöbb fotóhoz megfelel. Nyomtatáshoz vagy részletgazdag képekhez használj 85–90%-ot, és 60%-ot, ha a méret a legfontosabb, például e-mail-mellékleteknél.'],
      ['Van korlát a fájlméretre vagy a darabszámra?', 'Nincs fix korlát. A nagyon nagy adagok a készüléked memóriájától függnek.'],
      ['Feltöltődnek valahová a fotóim?', local],
    ],
  },
  'compress-image': {
    slug: 'kep-tomorites', name: 'Képtömörítő', blurb: 'JPG, PNG és WebP tömörítése',
    title: 'Képtömörítő – JPG, PNG és WebP tömörítése ingyen, online',
    desc: 'Ingyenes képtömörítő JPG-, PNG- és WebP-képekhez. Csökkentsd a képek méretét weboldalakhoz, e-mailhez és feltöltéshez. A böngésződben fut, feltöltés nélkül.',
    h1: 'Képtömörítő',
    lead: 'Csökkentsd JPG-, PNG- és WebP-képek fájlméretét egy helyen.',
    intro: 'A JPG és a WebP jól tömöríthető a minőség csökkentésével. A PNG veszteségmentes, ezért a legnagyobb megtakarítást az hozza, ha helyette WebP- vagy JPG-formátumban mented el. A WebP-t minden modern böngésző támogatja, és weboldalakhoz általában ez a legkisebb választás.',
    steps: ['Válaszd ki a képeket, vagy húzd őket a mezőbe.', 'Válassz minőséget és kimeneti formátumot. PNG esetén a WebP vagy a JPG hozza a legnagyobb megtakarítást.', 'Adj meg maximális szélességet, ha a képek nagyobbak a szükségesnél.', 'Töltsd le a képeket egyenként, vagy mindet egyben ZIP-ben.'],
    faq: [
      ['Miért alig lett kisebb a PNG-m?', 'A PNG minden pixelt megőriz, ezért ha újra PNG-ként mented, alig nyersz vele. Válaszd a WebP-t vagy a JPG-t kimeneti formátumnak, és sokkal kisebb lesz.'],
      ['Eltűnik az átlátszóság tömörítéskor?', 'A WebP és a PNG megtartja az átlátszóságot. A JPG nem ismeri, ezért az átlátszó részek fehérek lesznek.'],
      ['Melyik formátum a legkisebb?', 'Azonos látható minőség mellett a WebP általában 25–35%-kal kisebb a JPG-nél.'],
      ['Biztonságos ez a képtömörítő?', local],
    ],
  },
  'resize-image': {
    slug: 'kep-atmeretezes', name: 'Kép átméretezése', blurb: 'Szélesség és magasság módosítása pixelben vagy %-ban',
    title: 'Kép átméretezése online – méret módosítása pixelben vagy százalékban, ingyen',
    desc: 'Méretezz át képeket ingyen, pixelben vagy százalékban. Az oldalarány megmarad, és egyszerre több JPG-, PNG- és WebP-képet is átméretezhetsz. Feltöltés és regisztráció nélkül.',
    h1: 'Képek átméretezése',
    lead: 'Módosítsd a kép méreteit pixelben vagy százalékban, egyetlen fotónál vagy egy egész mappányinál.',
    intro: 'Ha csak a szélességet vagy csak a magasságot adod meg, a másik oldal automatikusan kiszámolódik, így semmi sem torzul. Ha mindkettőt megadod, pontos méretet állíthatsz be.',
    steps: ['Válaszd ki a képeket, vagy húzd őket a mezőbe.', 'Válaszd a pixelt vagy a százalékot, és add meg a kívánt méretet.', 'Tartsd meg az eredeti formátumot, vagy válts JPG-re, PNG-re vagy WebP-re.', 'Töltsd le az átméretezett képeket.'],
    faq: [
      ['Hogyan tarthatom meg az oldalarányt?', 'Csak a szélességet vagy csak a magasságot töltsd ki. A másik oldal automatikusan kiszámolódik.'],
      ['Nagyobbíthatok is egy képet?', 'Igen, de a nagyítás nem ad hozzá részleteket, így a nagyon nagy nagyítás elmosódottnak fog tűnni.'],
      ['Mekkora méretet használjak Instagramhoz vagy weboldalhoz?', 'Az Instagram-bejegyzések 1080 px szélességben mutatnak a legjobban. A legtöbb weboldalhoz 1600–1920 px szélesség bőven elég.'],
      ['Feltöltődnek a képeim?', local],
    ],
  },
  'image-converter': {
    slug: 'kepkonvertalo', name: 'Képkonvertáló', blurb: 'Átalakítás JPG, PNG és WebP között',
    title: 'Képkonvertáló – JPG, PNG és WebP átalakítása ingyen, online',
    desc: 'Ingyenes képkonvertáló. Alakíts át képeket JPG, PNG és WebP között a böngésződben, egyszerre többet is, feltöltés és regisztráció nélkül.',
    h1: 'Képkonvertáló',
    lead: 'Alakíts át képeket JPG, PNG és WebP között, egyenként vagy egyszerre többet.',
    intro: 'Fotókhoz használd a JPG-t, éles szélű vagy átlátszó grafikákhoz és képernyőképekhez a PNG-t, a WebP-t pedig akkor, ha a lehető legkisebb fájlt szeretnéd a webre.',
    steps: ['Válaszd ki a képeket, vagy húzd őket a mezőbe.', 'Válaszd ki a célformátumot.', 'Állítsd be a minőséget JPG vagy WebP esetén.', 'Töltsd le a fájlokat egyenként, vagy mindet egyben ZIP-ben.'],
    faq: [
      ['Milyen formátumokból alakíthatok át?', 'JPG, PNG, WebP, GIF (első képkocka), BMP, AVIF és SVG, ha a böngésződ meg tudja nyitni őket.'],
      ['Átalakíthatok HEIC-formátumú iPhone-fotókat?', 'Csak olyan böngészőben, amely meg tudja nyitni a HEIC-et, például a Safariban Macen és iPhone-on. Más böngészőkben állítsd az iPhone kameráját „Legkompatibilisebb” formátumra, hogy JPG-ket mentsen.'],
      ['Feltöltődnek a képeim?', local],
    ],
  },
  'mp4-to-mp3': {
    slug: 'mp4-bol-mp3', name: 'MP4 → MP3', blurb: 'Hang kinyerése MP4-videókból',
    title: 'MP4 → MP3 konvertáló – hang kinyerése ingyen, feltöltés nélkül',
    desc: 'Alakíts át MP4-et MP3-má ingyen. Nyerd ki a hangot a saját MP4-videóidból, akár 320 kbps minőségben. A böngésződben fut, feltöltés és regisztráció nélkül.',
    h1: 'MP4 konvertálása MP3-ba',
    lead: 'Mentsd el a saját MP4-videóid hangját MP3-ként, és játszd le bárhol.',
    intro: 'Jól jön, ha egy felvett próbából, előadásból, hangjegyzetből vagy interjúból hangfájlt szeretnél a telefonodra vagy a podcastalkalmazásodba. Csak olyan videókkal használd, amelyek a tieid, vagy amelyek felhasználására jogod van.',
    steps: ['Válaszd ki az MP4-fájlokat, vagy húzd őket a mezőbe.', 'Válaszd ki az MP3 minőségét. A legtöbb célra a 192 kbps kiváló, zenéhez a 320 kbps.', 'Várj néhány másodpercet, amíg a hang átalakul.', 'Töltsd le az MP3-at.'],
    faq: [
      ['Milyen MP3-minőséget válasszak?', '128 kbps beszédhez elég, 192 kbps a legtöbb zenéhez, 320 kbps pedig a legjobb minőséghez.'],
      ['Kaphatok inkább WAV-fájlt?', 'Igen. Válaszd a WAV-ot kimenetnek, ha tömörítetlen hangot szeretnél, ami szerkesztéshez hasznos.'],
      ['Átalakíthatok itt YouTube-videókat?', 'Nem. Ez az eszköz a készülékeden már meglévő videófájlokkal működik. A YouTube-ról való letöltés ellentétes a YouTube feltételeivel.'],
      ['Feltöltődnek a videóim?', local],
    ],
  },
  'video-to-mp3': {
    slug: 'hang-kinyerese-videobol', name: 'Hang kinyerése videóból', blurb: 'MOV, WebM, MKV, AVI → MP3',
    title: 'Hang kinyerése videóból – ingyenes videó → MP3 konvertáló',
    desc: 'Nyerd ki a hangot bármilyen videóból: MOV, MP4, WebM, MKV és AVI → MP3 vagy WAV. Ingyenes, privát és gyors. Feltöltés és regisztráció nélkül.',
    h1: 'Hang kinyerése videóból',
    lead: 'Alakítsd egy MOV-, WebM-, MKV- vagy AVI-videó hangsávját MP3- vagy WAV-fájllá.',
    intro: 'A legtöbb videó azonnal átalakul. A ritkább formátumokat egy beépített konvertáló kezeli, amely az első használatkor töltődik be, utána pedig a böngésződ gyorsítótárában marad.',
    steps: ['Válaszd ki a videófájlokat, vagy húzd őket a mezőbe.', 'Válaszd az MP3-at vagy a WAV-ot, és az MP3 minőségét.', 'Várd meg, amíg a hang kinyerése befejeződik.', 'Töltsd le a hangfájlt.'],
    faq: [
      ['Milyen videóformátumok működnek?', 'A legtöbb esetben MP4, MOV, M4V, WebM, MKV, AVI, FLV, WMV és 3GP.'],
      ['Miért tartott tovább az első átalakítás?', 'Egyes formátumokhoz a teljes, körülbelül 30 MB-os konvertáló kell, amely egyszer töltődik le, utána a böngésződ gyorsítótárában marad.'],
      ['Feltöltődnek a videóim?', local],
    ],
  },
  'wav-to-mp3': {
    slug: 'wav-bol-mp3', name: 'WAV → MP3', blurb: 'WAV-felvételekből kis méretű MP3',
    title: 'WAV → MP3 konvertáló – ingyenes, gyors, feltöltés nélkül',
    desc: 'Alakíts át WAV-ot MP3-má ingyen, a böngésződben. A nagy WAV-felvételek akár 10-szer kisebbek lesznek, 128–320 kbps minőségben. Feltöltés és regisztráció nélkül.',
    h1: 'WAV konvertálása MP3-ba',
    lead: 'Tedd a nagy WAV-felvételeket elég kicsivé ahhoz, hogy e-mailben elküldhesd, megoszthasd vagy tárolhasd őket.',
    intro: 'Egy 5 perces sztereó WAV nagyjából 50 MB. 192 kbps minőségű MP3-ként körülbelül 7 MB, és a legtöbb hallgató számára ugyanúgy szól.',
    steps: ['Válaszd ki a WAV-fájlokat, vagy húzd őket a mezőbe.', 'Válaszd ki az MP3 minőségét.', 'Töltsd le az MP3-fájlokat.'],
    faq: [
      ['Romlik a minőség WAV → MP3 átalakításkor?', 'Az MP3 tömörített formátum, de 256–320 kbps mellett alig hallható a különbség.'],
      ['Más hangfájlokat is átalakíthatok?', 'Igen. FLAC-, OGG-, AAC- és M4A-fájlok is működnek, a böngésződtől függően.'],
      ['Feltöltődnek a fájljaim?', local],
    ],
  },
  'm4a-to-mp3': {
    slug: 'm4a-bol-mp3', name: 'M4A → MP3', blurb: 'iPhone-os hangjegyzetek és M4A-fájlok átalakítása',
    title: 'M4A → MP3 konvertáló – hangjegyzetek átalakítása ingyen',
    desc: 'Alakíts át M4A-t MP3-má ingyen, az iPhone-os hangjegyzeteket és a DRM nélküli iTunes-hangfájlokat is. A böngésződben fut, feltöltés nélkül.',
    h1: 'M4A konvertálása MP3-ba',
    lead: 'Alakítsd az M4A-fájlokat, például az iPhone-os hangjegyzeteket, bármilyen készüléken lejátszható MP3-má.',
    intro: 'Az M4A az Apple alapértelmezett hangformátuma. Néhány autó, régebbi lejátszó és weboldal csak MP3-at fogad el, ezért átalakítás után a fájl mindenhol lejátszható.',
    steps: ['Válaszd ki az M4A-fájlokat, vagy húzd őket a mezőbe.', 'Válaszd ki az MP3 minőségét.', 'Töltsd le az MP3-fájlokat.'],
    faq: [
      ['Hogyan tudom áttenni a hangjegyzeteket az iPhone-omról?', 'A Diktafon appban koppints egy felvételre, majd a Megosztás gombra, és mentsd el a Fájlok appba. Ezután nyisd meg ezt az oldalt a telefonodon, és válaszd ki a fájlt.'],
      ['Átalakíthatók a megvásárolt iTunes-dalok?', 'Csak a másolásvédelem (DRM) nélküli dalok.'],
      ['Feltöltődnek a fájljaim?', local],
    ],
  },
  'video-converter': {
    slug: 'videokonvertalo', name: 'Videókonvertáló', blurb: 'Átalakítás MP4-, WebM- vagy MOV-formátumba',
    title: 'Videókonvertáló – videók átalakítása MP4-, WebM- vagy MOV-formátumba ingyen',
    desc: 'Ingyenes online videókonvertáló. Alakíts át MOV-, MKV-, AVI-, WebM- és más videókat MP4-, WebM- vagy MOV-formátumba a böngésződben. Feltöltés és vízjel nélkül.',
    h1: 'Videókonvertáló',
    lead: 'Alakíts át videókat MP4-, WebM- vagy MOV-formátumba, telepítés nélkül.',
    intro: 'A H.264-es MP4 szinte minden telefonon, számítógépen, tévén és közösségi oldalon lejátszható, ezért ez a legbiztosabb választás. Az átalakítás a saját készülékeden történik, így a sebesség a gépedtől és a videó hosszától függ.',
    steps: ['Válassz ki egy videót, vagy húzd a mezőbe.', 'Válaszd ki a célformátumot.', 'Amíg tart az átalakítás, hagyd nyitva a lapot; a folyamatjelző mutatja, hol tart.', 'Töltsd le az átalakított videót.'],
    faq: [
      ['Lesz rajta vízjel?', 'Nem. A videód változtatás nélkül alakul át, vízjel és időkorlát nélkül.'],
      ['Miért lassabb, mint egy asztali program?', 'Az adatvédelem érdekében a konvertáló a böngésződben fut. A rövid klipek gyorsan elkészülnek, a hosszú vagy 4K-s videók tovább tartanak.'],
      ['Mekkora lehet a fájl?', 'Nagyjából 500 MB alatti videókkal működik a legjobban. A nagyobb fájlok a készüléked memóriájától függnek.'],
      ['Feltöltődnek a videóim?', local],
    ],
  },
  'mov-to-mp4': {
    slug: 'mov-bol-mp4', name: 'MOV → MP4', blurb: 'iPhone- és Mac-videók átalakítása',
    title: 'MOV → MP4 konvertáló – ingyenes, feltöltés és vízjel nélkül',
    desc: 'Alakíts át MOV-ot MP4-gyé ingyen. Így az iPhone-on és Macen készült videók Windowson, Androidon és a közösségi médiában is lejátszhatók. Feltöltés és vízjel nélkül.',
    h1: 'MOV konvertálása MP4-be',
    lead: 'Tedd lejátszhatóvá az iPhone-on és Macen készült MOV-videókat Windowson, Androidon és minden közösségi oldalon.',
    intro: 'Az iPhone-ok MOV-fájljai gyakran olyan kodekeket használnak, amelyeket a Windows és egyes weboldalak nem tudnak megnyitni. A H.264-es MP4 a legszélesebb körben támogatott videóformátum.',
    steps: ['Válaszd ki a MOV-videót, vagy húzd a mezőbe.', 'Hagyd kiválasztva ezt: „MP4 (H.264)”.', 'Amíg tart az átalakítás, hagyd nyitva a lapot.', 'Töltsd le az MP4-et.'],
    faq: [
      ['Romlik a minőség MOV → MP4 átalakításkor?', 'A videót magas minőségi beállítással kódoljuk újra, így a különbség alig látható.'],
      ['Megcsinálhatom ezt az iPhone-omon?', 'Igen, működik a Safariban iPhone-on és iPaden, bár a hosszú videók számítógépen gyorsabban elkészülnek.'],
      ['Feltöltődnek a videóim?', local],
    ],
  },
  'compress-video': {
    slug: 'video-tomorites', name: 'Videó tömörítése', blurb: 'Kisebb videók a könnyebb megosztáshoz',
    title: 'Videó tömörítése online – MP4-fájlméret csökkentése ingyen',
    desc: 'Tömöríts videókat ingyen, a böngésződben. Csökkentsd MP4-, MOV- és WebM-videók méretét e-mailhez, WhatsApphoz és Discordhoz. Feltöltés és vízjel nélkül.',
    h1: 'Videó tömörítése',
    lead: 'Zsugorítsd össze a videóidat, hogy beférjenek az e-mail, a WhatsApp, a Discord és más feltöltések méretkorlátjába.',
    intro: 'Ha a felbontást 720p-re csökkented, és közepes tömörítést használsz, egy telefonos videó általában 3–10-szer kisebb lesz, és a telefon kijelzőjén továbbra is jól mutat.',
    steps: ['Válassz ki egy videót, vagy húzd a mezőbe.', 'Válaszd ki, mennyire erős legyen a tömörítés.', 'Válassz maximális felbontást. A legtöbb megosztáshoz a 720p megfelel.', 'Töltsd le a kisebb MP4-et.'],
    faq: [
      ['Mennyivel lesz kisebb a videóm?', 'Ez az eredetitől függ. Az 1080p-s vagy 4K-s telefonos videók 720p-n, közepes tömörítéssel gyakran 70–90%-kal kisebbek lesznek.'],
      ['Milyen beállítást használjak Discordhoz vagy e-mailhez?', 'Válaszd az „Erős” tömörítést és a 480p vagy 720p felbontást, így a legtöbb rövid klip 25 MB alatt marad.'],
      ['Feltöltődnek a videóim?', local],
    ],
  },
  'video-to-gif': {
    slug: 'gif-keszites-videobol', name: 'Videó → GIF', blurb: 'GIF készítése videóklipből',
    title: 'GIF-készítő videóból – MP4 átalakítása GIF-fé ingyen',
    desc: 'Készíts GIF-et MP4-, MOV- és WebM-videókból ingyen. Megadhatod a kezdőpontot, a hosszt, a méretet és a képkockasebességet. Feltöltés és vízjel nélkül.',
    h1: 'GIF-készítő videóból',
    lead: 'Egy videó rövid pillanatából készíts animált GIF-et.',
    intro: 'A GIF-ek gyorsan nagyra nőnek, ezért legyenek rövidek: 3–6 másodperc, 480 px szélesség és 10 fps jó méret csevegésekhez és weboldalakhoz.',
    steps: ['Válassz ki egy videót, vagy húzd a mezőbe.', 'Add meg, hol kezdődjön a GIF, és meddig tartson.', 'Válaszd ki a képkockasebességet és a szélességet.', 'Töltsd le a GIF-et.'],
    faq: [
      ['Milyen hosszú lehet a GIF?', 'Legfeljebb 60 másodperces, de a rövidebb GIF-ek sokkal kisebbek és gyorsabban betöltődnek.'],
      ['Miért nagyobb a GIF-em, mint a videó?', 'A GIF régi formátum, gyenge tömörítéssel. Csökkentsd a szélességet, a képkockasebességet vagy a hosszt, hogy kisebb legyen.'],
      ['Feltöltődnek a videóim?', local],
    ],
  },
  'mp4-to-gif': {
    slug: 'mp4-bol-gif', name: 'MP4 → GIF', blurb: 'GIF készítése MP4-klipből',
    title: 'MP4 → GIF konvertáló – GIF készítése videóból ingyen, feltöltés nélkül',
    desc: 'Alakíts egy MP4-klipet animált GIF-fé ingyen. Megadhatod a kezdési időt, a hosszt, a méretet és a képkockasebességet. Privát, feltöltés és vízjel nélkül.',
    h1: 'MP4 konvertálása GIF-fé',
    lead: 'Vágj ki néhány másodpercet egy MP4-ből, és mentsd el ismétlődő GIF-ként.',
    intro: 'A GIF-ek automatikusan lejátszódnak csevegésekben, e-mailekben és dokumentumokban, ahol a videó nem. Legyenek rövidek, 2–6 másodpercesek, és nagyjából 480 px szélesek, hogy elég kicsik maradjanak a megosztáshoz.',
    steps: ['Válaszd ki az MP4-et, vagy húzd a mezőbe.', 'Add meg a kezdési időt és a hosszt másodpercben.', 'Válassz szélességet és képkockasebességet. A 480 px és a 12 fps jó kiindulópont.', 'Töltsd le a GIF-et.'],
    faq: [
      ['Miért ilyen nagy a GIF-em?', 'A GIF régi formátum, gyenge tömörítéssel. Rövidebb klippel, kisebb szélességgel vagy alacsonyabb képkockasebességgel sokkal kisebb lesz.'],
      ['Milyen hosszú lehet a GIF?', 'Legfeljebb 60 másodperces, de 6 másodperc alatt a fájl észszerű méretű marad.'],
      ['Feltöltődnek a videóim?', local],
    ],
  },
  'merge-pdf': {
    slug: 'pdf-egyesites', name: 'PDF-ek egyesítése', blurb: 'Több PDF összefűzése egy fájlba',
    title: 'PDF-ek egyesítése – PDF-fájlok összefűzése ingyen, online, feltöltés nélkül',
    desc: 'Egyesíts PDF-fájlokat egyetlen dokumentummá ingyen. A sorrendet te állítod be. A böngésződben fut, privát, feltöltés és regisztráció nélkül.',
    h1: 'PDF-fájlok egyesítése',
    lead: 'Fűzz össze több PDF-et egyetlen dokumentummá, a választott sorrendben.',
    intro: 'Hasznos pályázatok, számlák, szerződések és szkennelt oldalak összeállításához. Mivel semmi sem töltődik fel, bizalmas dokumentumokhoz is biztonságos.',
    steps: ['Válaszd ki a PDF-fájlokat, vagy húzd őket a mezőbe.', 'A nyilakkal állítsd őket a megfelelő sorrendbe.', 'Kattints a „PDF-ek egyesítése” gombra.', 'Az egyesített PDF automatikusan letöltődik.'],
    faq: [
      ['Hány PDF-et egyesíthetek?', 'Nincs fix korlát. A nagyon nagy fájlok a készüléked memóriájától függnek.'],
      ['Egyesíthetek jelszóval védett PDF-eket?', 'Nem. Előbb távolítsd el a jelszót abban az alkalmazásban, amellyel megnyitod.'],
      ['Feltöltődnek a PDF-jeim?', local],
    ],
  },
  'split-pdf': {
    slug: 'pdf-szetvalasztas', name: 'PDF szétválasztása', blurb: 'Oldalak kinyerése vagy minden oldal külön fájlba',
    title: 'PDF szétválasztása – oldalak kinyerése PDF-ből ingyen, feltöltés nélkül',
    desc: 'Válassz szét egy PDF-et ingyen. Nyerd ki a szükséges oldalakat, vagy ments el minden oldalt külön PDF-ként. Privát, a böngésződben fut, feltöltés nélkül.',
    h1: 'PDF szétválasztása',
    lead: 'Vedd ki csak a szükséges oldalakat, vagy bontsd a PDF-et különálló oldalakra.',
    intro: 'Írj be oldalakat és tartományokat, például „1-3, 7, 10-”, és csak ezekből az oldalakból készül új PDF. Az oldalak kihagyásával könnyen törölheted is őket.',
    steps: ['Válassz ki egy PDF-et, vagy húzd a mezőbe.', 'Válaszd az „Oldalak kinyerése” lehetőséget, és írd be az oldalakat, vagy válaszd a „Minden oldal” lehetőséget.', 'Kattints a „PDF szétválasztása” gombra.', 'Töltsd le az új PDF-et vagy az oldalakat tartalmazó ZIP-et.'],
    faq: [
      ['Hogyan törölhetek oldalakat egy PDF-ből?', 'Nyerd ki az összes oldalt azok kivételével, amelyeket törölni szeretnél. Ha például egy 10 oldalas fájlból a 4. oldalt akarod eltávolítani, írd be: „1-3, 5-10”.'],
      ['Mit jelent a „10-”?', 'A 10. oldaltól az utolsóig.'],
      ['Feltöltődnek a PDF-jeim?', local],
    ],
  },
  'jpg-to-pdf': {
    slug: 'jpg-bol-pdf', name: 'JPG → PDF', blurb: 'Fotókból és szkennelt képekből PDF',
    title: 'JPG → PDF konvertáló – képek PDF-be ingyen, feltöltés nélkül',
    desc: 'Alakíts át JPG-, PNG- és más képeket PDF-fé ingyen. Fűzz össze fotókat egyetlen PDF-be, A4-es vagy Letter méretben. Privát, feltöltés nélkül.',
    h1: 'JPG konvertálása PDF-be',
    lead: 'Fűzz össze fotókat, szkennelt oldalakat és képernyőképeket egyetlen PDF-be.',
    intro: 'Kiválóan alkalmas lefényképezett nyugták, igazolványok vagy aláírt űrlapok elküldésére egyetlen rendezett dokumentumként. Jól nyomtatható oldalakhoz válaszd az A4-et vagy az amerikai Letter méretet, vagy hagyd, hogy minden oldal akkora legyen, mint a rajta lévő kép.',
    steps: ['Válaszd ki a képeket, vagy húzd őket a mezőbe.', 'A nyilakkal állítsd be az oldalak sorrendjét.', 'Válassz oldalméretet és margót.', 'Kattints a „PDF létrehozása” gombra a letöltéshez.'],
    faq: [
      ['Milyen képtípusok működnek?', 'JPG, PNG, WebP, GIF és BMP. Minden képből egy oldal lesz.'],
      ['Jól nyomtatható lesz a PDF?', 'A tiszta nyomtatáshoz válaszd az A4-et vagy a Letter méretet kis margóval.'],
      ['Feltöltődnek a képeim?', local],
    ],
  },
  'png-to-pdf': {
    slug: 'png-bol-pdf', name: 'PNG → PDF', blurb: 'Képernyőképekből PDF',
    title: 'PNG → PDF konvertáló – képernyőképek és képek PDF-be ingyen',
    desc: 'Alakíts át PNG-képeket és képernyőképeket PDF-fé ingyen. Fűzz össze többet egyetlen PDF-be, A4-es vagy Letter méretben. Privát, feltöltés nélkül.',
    h1: 'PNG konvertálása PDF-be',
    lead: 'Fűzz össze képernyőképeket és PNG-képeket egyetlen PDF-be.',
    intro: 'Hasznos, ha képernyőképek sorozatát, egy csevegés előzményeit vagy dizájnterveket szeretnél egyetlen, bárhol megnyitható dokumentumként elküldeni.',
    steps: ['Válaszd ki a PNG-fájlokat, vagy húzd őket a mezőbe.', 'A nyilakkal állítsd be az oldalak sorrendjét.', 'Válassz oldalméretet és margót.', 'Kattints a „PDF létrehozása” gombra a letöltéshez.'],
    faq: [
      ['Megmarad a PNG minősége a PDF-ben?', 'Igen. A PNG-képek újratömörítés nélkül kerülnek a PDF-be.'],
      ['Keverhetem a PNG-t és a JPG-t?', 'Igen. PNG, JPG, WebP, GIF és BMP bármilyen keveréke működik.'],
      ['Feltöltődnek a képeim?', local],
    ],
  },
  'pdf-to-jpg': {
    slug: 'pdf-bol-jpg', name: 'PDF → JPG', blurb: 'PDF-oldalak mentése képként',
    title: 'PDF → JPG konvertáló – PDF-oldalak átalakítása képpé ingyen',
    desc: 'Alakíts át PDF-et JPG-vé vagy PNG-vé ingyen. Ments el minden oldalt jó minőségű képként. A böngésződben fut, feltöltés nélkül.',
    h1: 'PDF konvertálása JPG-be',
    lead: 'Mentsd el a PDF minden oldalát JPG- vagy PNG-képként.',
    intro: 'Jól jön, ha egy szórólapot vagy étlapot szeretnél közzétenni a közösségi médiában, egy oldalt betennél egy diavetítésbe, vagy elküldenéd valakinek, aki nem tud PDF-et megnyitni.',
    steps: ['Válassz ki egy PDF-et, vagy húzd a mezőbe.', 'Válaszd a JPG-t vagy a PNG-t, és a minőséget.', 'Töltsd le a képet, vagy az összes oldalt ZIP-ben.'],
    faq: [
      ['Milyen minőséget válasszak?', 'A Magas (144 dpi) képernyőre és közösségi médiába megfelelő. A Nagyon magas (216 dpi) jobb nyomtatáshoz vagy nagyításhoz.'],
      ['Átalakíthatok csak egy oldalt?', 'Alakítsd át a PDF-et, és tartsd meg a szükséges képet. Vagy előbb a PDF szétválasztása eszközzel vedd ki azt az oldalt.'],
      ['Feltöltődnek a PDF-jeim?', local],
    ],
  },
  'pdf-to-png': {
    slug: 'pdf-bol-png', name: 'PDF → PNG', blurb: 'PDF-oldalak mentése éles PNG-ként',
    title: 'PDF → PNG konvertáló – PDF-oldalakból PNG-képek ingyen',
    desc: 'Alakíts át PDF-oldalakat PNG-képekké ingyen. Éles szöveg, átlátszó háttér nélkül, veszteségmentesen. A böngésződben fut, feltöltés nélkül.',
    h1: 'PDF konvertálása PNG-be',
    lead: 'Mentsd el a PDF minden oldalát éles PNG-képként.',
    intro: 'A PNG élesen tartja a szöveget és a vonalas ábrákat, elmosódott szélek nélkül, ezért diákhoz, grafikonokhoz, diagramokhoz és dokumentumokhoz jobb választás a JPG-nél.',
    steps: ['Válassz ki egy PDF-et, vagy húzd a mezőbe.', 'Hagyd kiválasztva a PNG-t, és válaszd ki a minőséget.', 'Töltsd le a képet, vagy az összes oldalt ZIP-ben.'],
    faq: [
      ['PNG vagy JPG a PDF-oldalakhoz?', 'PNG szöveghez, grafikonokhoz és diagramokhoz. JPG a sok fotót tartalmazó oldalakhoz, ahol fontosabb a kisebb fájlméret.'],
      ['Átalakíthatok csak egy oldalt?', 'Alakítsd át a PDF-et, és tartsd meg a szükséges oldalt, vagy előbb használd a PDF szétválasztása eszközt.'],
      ['Feltöltődnek a PDF-jeim?', local],
    ],
  },
  'rotate-pdf': {
    slug: 'pdf-forgatas', name: 'PDF forgatása', blurb: 'Oldalra fordult vagy fejjel lefelé álló oldalak javítása',
    title: 'PDF forgatása – PDF-oldalak elforgatása és mentése ingyen, feltöltés nélkül',
    desc: 'Forgasd el a PDF oldalait ingyen, és mentsd el az eredményt. Az összes oldalt vagy csak néhányat. Privát, a böngésződben fut, feltöltés nélkül.',
    h1: 'PDF-oldalak forgatása',
    lead: 'Javítsd ki az oldalra fordult vagy fejjel lefelé álló szkennelt oldalakat, és mentsd el a PDF-et helyes állásban.',
    intro: 'Forgasd el az összes oldalt, vagy írj be oldalszámokat, például „2, 5-6”, hogy csak azokat forgasd el.',
    steps: ['Válaszd ki a forgatás irányát és szükség esetén az oldalakat.', 'Válaszd ki a PDF-et, vagy húzd a mezőbe.', 'Töltsd le az elforgatott PDF-et.'],
    faq: [
      ['Véglegesen mentődik a forgatás?', 'Igen. A letöltött PDF minden PDF-olvasóban az új állásban nyílik meg.'],
      ['Elforgathatok csak egy oldalt?', 'Igen. Írd be az oldalszámát az Oldalak mezőbe, mielőtt kiválasztod a fájlt.'],
      ['Feltöltődnek a PDF-jeim?', local],
    ],
  },
  'compress-photo-for-email': {
    slug: 'foto-tomorites-emailhez', name: 'Fotók tömörítése e-mailhez', blurb: 'Csatolható méretű fotók',
    title: 'Fotók tömörítése e-mailhez – képek kicsinyítése csatoláshoz, ingyen',
    desc: 'Tedd a telefonos fotókat elég kicsivé ahhoz, hogy e-mailben elküldhesd őket. A képeket nagyjából 1600 px szélesre és eredeti méretük töredékére csökkenti, így több fér el egy levélben. Ingyenes, feltöltés nélkül.',
    h1: 'Fotók tömörítése e-mailhez',
    lead: 'Kicsinyíts le egy adag telefonos fotót, hogy csatolhasd és elküldhesd őket anélkül, hogy a méretkorlátba ütköznél.',
    intro: 'A Gmail és az Outlook levelenként nagyjából 20–25 MB mellékletet enged, ami csak egy maroknyi telefonos fotó. Ha minden képet 1600 px szélesre méretezel, továbbra is élesnek látszik bármilyen kijelzőn, és fájlonként általában 300–600 KB lesz, így sokkal több fér el egy e-mailben.',
    steps: ['Válaszd ki a fotóidat, vagy húzd őket a mezőbe.', 'Hagyd a maximális szélességet 1600 px-en, a minőséget pedig 75%-on.', 'Töltsd le őket egyben ZIP-ben vagy egyenként, és csatold őket az e-mailhez.'],
    faq: [
      ['Hány fotót küldhetek el tömörítés után?', 'Ha egy-egy fotó nagyjából 400 KB, akkor körülbelül 40–50 fér bele egy 20 MB-os levélbe.'],
      ['Jól fognak még kinézni a fotók?', 'Igen. Az 1600 px-es szélesség kitölti egy laptop képernyőjét, a 75%-os minőség pedig alig különböztethető meg az eredetitől.'],
      ['Beállíthatok inkább pontos méretet?', 'Igen. Írj be egy számot a Célméret (KB) mezőbe, például 500-at, és minden fotó az alatt marad.'],
      ['Feltöltődnek a fotóim?', local],
    ],
  },
};

const gens = { img, audio, video, size, site };

// Returns the Hungarian page for an English tool entry
export function translateTool(t) {
  const out = t.gen ? gens[t.gen[0]](t, t.gen) : hand[t.slug];
  if (!out) throw new Error('Missing Hungarian text for ' + t.slug);
  for (const k of ['slug', 'name', 'blurb', 'title', 'desc', 'h1', 'lead', 'intro', 'steps', 'faq']) {
    if (!out[k] || (typeof out[k] === 'string' && out[k].includes('undefined'))) throw new Error(`Hungarian ${k} missing for ${t.slug}`);
  }
  out.slug = slugify(out.slug);
  return out;
}
