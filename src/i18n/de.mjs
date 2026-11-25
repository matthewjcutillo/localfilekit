// German (de) version of every page. Written by hand for natural, everyday German.
const local = 'Deine Dateien verlassen nie dein Gerät. Alles läuft direkt in deinem Browser: kein Upload, keine Warteschlange und nichts wird auf einem Server gespeichert.';

export const ui = {
  lang: 'de', locale: 'de_DE', prefix: '/de',
  langName: 'Deutsch',
  home: 'Startseite',
  nav: { image: 'Bild', av: 'Audio & Video', pdf: 'PDF', size: 'Exakte Größen' },
  cats: {
    image: 'Bild-Tools',
    size: 'Auf eine exakte Größe komprimieren oder skalieren',
    av: 'Audio- & Video-Tools',
    pdf: 'PDF-Tools',
  },
  badge: '🔒 Privat: Deine Dateien verlassen nie dein Gerät',
  howTo: 'So geht’s',
  freeH: 'Kostenlos, privat und ohne Anmeldung',
  freeP: (name) => `${name} läuft komplett in deinem Browser. Deine Dateien werden auf deinem eigenen Gerät verarbeitet und nie an einen Server geschickt. Sie bleiben also privat: kein Warten auf den Upload, kein Konto und kein Wasserzeichen.`,
  questions: 'Häufige Fragen',
  related: 'Ähnliche Tools',
  noscript: 'Für dieses Tool muss JavaScript aktiviert sein.',
  footer: 'Kostenlose Tools, die in deinem Browser laufen. Deine Dateien werden nie hochgeladen.',
  footNav: { about: 'Über uns', privacy: 'Datenschutz', terms: 'Nutzungsbedingungen', contact: 'Kontakt' },
  homeTitle: (name) => `${name} – Dateien kostenlos umwandeln und komprimieren, ohne Upload`,
  homeDesc: 'Kostenlose Tools, um JPEGs zu komprimieren, Bilder umzuwandeln, MP4 in MP3 umzuwandeln, Videos zu komprimieren und PDFs zusammenzufügen oder aufzuteilen. Privat: Deine Dateien verlassen nie dein Gerät.',
  homeH1: 'Kostenlose Datei-Tools, die in deinem Browser laufen',
  homeLead: 'Komprimiere und wandle Bilder um, hol den Ton aus Videos und füge PDFs zusammen oder teile sie auf. Kein Upload, keine Anmeldung, kein Wasserzeichen.',
  promiseB: 'Deine Dateien verlassen nie dein Gerät.',
  promiseP: 'Jedes Tool läuft direkt hier in deinem Browser. Es wird nichts hochgeladen: Deine Fotos, Videos und Dokumente bleiben privat, und auch große Dateien sind in Sekunden fertig.',
  searchPh: (n) => `Durchsuche ${n} Tools – probier „mp4 in mp3“ oder „100 kb“`,
  searchNone: 'Dafür gibt es noch kein Tool. Probier ein anderes Wort, zum Beispiel „komprimieren“ oder „pdf“.',
  whyH: (name) => `Warum ${name}?`,
  why: [
    ['Privat:', 'Dateien werden auf deinem Gerät verarbeitet und nie hochgeladen.'],
    ['Schnell:', 'kein Warten auf Upload oder Download, auch bei vielen Fotos.'],
    ['Kostenlos:', 'kein Konto, kein Wasserzeichen, keine Nutzungsgrenze.'],
    ['Funktioniert überall:', 'auf Handy, Tablet und Computer, in jedem modernen Browser.'],
  ],
  homeFaq: (name) => [
    ['Sind diese Tools wirklich kostenlos?', `Ja. Alle Tools von ${name} sind kostenlos, ohne Anmeldung, ohne Wasserzeichen und ohne Tageslimit. Die Seite finanziert sich über Werbung.`],
    ['Werden meine Dateien hochgeladen?', 'Nein. Jedes Tool läuft direkt in deinem Browser, auf deinem eigenen Gerät. Deine Dateien werden nie an einen Server geschickt.'],
    ['Funktionieren die Tools auch auf dem Handy?', 'Ja. Sie laufen in modernen Browsern auf iPhone, Android, Windows, Mac und Chromebook.'],
    ['Kann ich hier YouTube-Videos herunterladen?', 'Nein. Diese Tools arbeiten mit Dateien, die schon auf deinem Gerät sind.'],
  ],
  // Words shown by the tools themselves (buttons, labels, messages)
  strings: {
    'Download': 'Herunterladen',
    'Download all (ZIP)': 'Alle herunterladen (ZIP)',
    'Choose images or drop them here': 'Bilder auswählen oder hier ablegen',
    'JPG, PNG, WebP and more. Batch is fine. Nothing is uploaded.': 'JPG, PNG, WebP und mehr. Auch mehrere auf einmal. Es wird nichts hochgeladen.',
    'Or paste an image with Ctrl+V.': 'Oder füge ein Bild mit Strg+V ein.',
    'Quality ': 'Qualität ',
    'Same as original': 'Wie das Original',
    'Original': 'Original',
    'Any': 'Beliebig',
    'Target size (KB)': 'Zielgröße (KB)',
    'Output format': 'Ausgabeformat',
    'Max width (px)': 'Max. Breite (px)',
    'Convert to': 'Umwandeln in',
    'Pixels': 'Pixel',
    'Percent': 'Prozent',
    'Auto': 'Auto',
    'Width': 'Breite',
    'Height': 'Höhe',
    'Resize by': 'Größe angeben in',
    'Format': 'Format',
    'Working…': 'Wird bearbeitet…',
    'Failed': 'Fehlgeschlagen',
    'already small': 'schon klein',
    'This browser cannot open this image type': 'Dieser Browser kann diesen Bildtyp nicht öffnen',
    'Could not encode image': 'Das Bild konnte nicht gespeichert werden',
    'Choose files or drop them here': 'Dateien auswählen oder hier ablegen',
    'MP4, MOV, WebM, M4A, WAV and more. Nothing is uploaded.': 'MP4, MOV, WebM, M4A, WAV und mehr. Es wird nichts hochgeladen.',
    'MP3 quality': 'MP3-Qualität',
    'Output': 'Ausgabe',
    'Reading…': 'Wird gelesen…',
    'Done.': 'Fertig.',
    'Loading converter (first time only)…': 'Konverter wird geladen (nur beim ersten Mal)…',
    'Converting…': 'Wird umgewandelt…',
    'No audio track found': 'Keine Tonspur gefunden',
    'Choose a video or drop it here': 'Video auswählen oder hier ablegen',
    'MP4, MOV, WebM, MKV, AVI and more. Works best under 500 MB. Nothing is uploaded.': 'MP4, MOV, WebM, MKV, AVI und mehr. Funktioniert am besten unter 500 MB. Es wird nichts hochgeladen.',
    'Light (best quality)': 'Leicht (beste Qualität)',
    'Medium': 'Mittel',
    'Strong (smallest)': 'Stark (kleinste Datei)',
    'Keep size': 'Größe beibehalten',
    'Compression': 'Komprimierung',
    'Max resolution': 'Max. Auflösung',
    'Start (sec)': 'Start (Sek.)',
    'Length (sec)': 'Länge (Sek.)',
    'Frame rate': 'Bildrate',
    'Size': 'Größe',
    'Loading converter (first time can take a moment)…': 'Konverter wird geladen (beim ersten Mal kann das einen Moment dauern)…',
    'That file could not be converted. Try a smaller or different file.': 'Diese Datei konnte nicht umgewandelt werden. Versuch es mit einer kleineren oder einer anderen Datei.',
    'This PDF is password-protected': 'Dieses PDF ist passwortgeschützt',
    'Could not read this PDF': 'Dieses PDF konnte nicht gelesen werden',
    'Enter the pages you want': 'Gib die gewünschten Seiten ein',
    'Move up': 'Nach oben',
    'Move down': 'Nach unten',
    'Remove': 'Entfernen',
    'Merge PDFs': 'PDFs zusammenfügen',
    'Add at least two PDFs.': 'Füge mindestens zwei PDFs hinzu.',
    'Extract pages into one PDF': 'Seiten in ein PDF extrahieren',
    'Every page as its own PDF': 'Jede Seite als eigenes PDF',
    'Pages': 'Seiten',
    'Split PDF': 'PDF aufteilen',
    'Mode': 'Modus',
    'Same as image': 'Wie das Bild',
    'US Letter': 'US Letter',
    'No margin': 'Kein Rand',
    'Small margin': 'Schmaler Rand',
    'Big margin': 'Breiter Rand',
    'Create PDF': 'PDF erstellen',
    'Page size': 'Seitengröße',
    'Margin': 'Rand',
    'Could not create the PDF': 'Das PDF konnte nicht erstellt werden',
    'All pages': 'Alle Seiten',
    'Rotate': 'Drehen',
    'Pages (optional)': 'Seiten (optional)',
    'Normal (72 dpi)': 'Normal (72 dpi)',
    'High (144 dpi)': 'Hoch (144 dpi)',
    'Very high (216 dpi)': 'Sehr hoch (216 dpi)',
    'Image format': 'Bildformat',
    'Quality': 'Qualität',
    'Choose a PDF or drop it here': 'PDF auswählen oder hier ablegen',
    'Choose PDFs or drop them here': 'PDFs auswählen oder hier ablegen',
    'Your files stay on your device. Nothing is uploaded.': 'Deine Dateien bleiben auf deinem Gerät. Es wird nichts hochgeladen.',
    'This tool needs a modern browser (Chrome, Edge, Firefox or Safari).': 'Dieses Tool braucht einen aktuellen Browser (Chrome, Edge, Firefox oder Safari).',
  },
  patterns: [
    ['^Converting… (\\d+)%$', 'Wird umgewandelt… $1 %'],
    ['^(\\d+) files? done\\.$', '$1 Datei(en) fertig.'],
    ['^Pages must be between 1 and (\\d+)$', 'Die Seiten müssen zwischen 1 und $1 liegen'],
    ['^Merged (\\d+) files into merged\\.pdf \\((\\d+) pages\\)\\.$', '$1 Dateien zu merged.pdf zusammengefügt ($2 Seiten).'],
    ['^Saved (\\d+) pages?\\.$', '$1 Seite(n) gespeichert.'],
    ['^Split into (\\d+) files \\(ZIP\\)\\.$', 'In $1 Dateien aufgeteilt (ZIP).'],
    ['^Created images\\.pdf with (\\d+) pages?\\.$', 'images.pdf mit $1 Seite(n) erstellt.'],
    ['^Download (\\d+) images \\(ZIP\\)$', '$1 Bilder herunterladen (ZIP)'],
    ['^(\\d+) pages$', '$1 Seiten'],
  ],
};

const slugify = (s) => s.toLowerCase().replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// ---------- Generated families ----------
const imgIntro = {
  'png-to-jpg': 'Bei Fotos sind JPG-Dateien viel kleiner als PNG, deshalb lassen sie sich leichter per E-Mail verschicken und hochladen. Transparente Bereiche werden weiß gefüllt, weil JPG keine Transparenz kennt.',
  'jpg-to-png': 'PNG ist verlustfrei und deshalb eine gute Wahl, wenn du ein Bild weiterbearbeiten willst, ohne dass noch mehr Kompression dazukommt. Rechne damit, dass das PNG größer wird als das JPG.',
  'webp-to-jpg': 'Manche Apps, Bildbearbeitungsprogramme und Upload-Formulare akzeptieren WebP noch immer nicht. Als JPG lässt sich das Bild überall öffnen.',
  'webp-to-png': 'Beim Umwandeln von WebP in PNG bleibt die Transparenz erhalten, und du bekommst eine Datei, die jedes Bildbearbeitungsprogramm öffnen kann.',
  'jpg-to-webp': 'WebP ist bei gleicher Bildqualität meist 25–35 % kleiner als JPG. Dadurch laden Webseiten schneller, was sich auch positiv auf das Ranking in Suchmaschinen auswirken kann.',
  'png-to-webp': 'WebP behält die Transparenz wie PNG, ist aber oft um ein Vielfaches kleiner – ideal für Logos, Icons und Screenshots auf Websites.',
  'bmp-to-png': 'BMP-Dateien sind unkomprimiert und sehr groß. PNG behält jedes Pixel, ist aber meist nur einen Bruchteil so groß.',
  'bmp-to-jpg': 'BMP-Dateien von alten Scannern und aus Windows Paint sind riesig. Als JPG werden sie klein genug, um sie per E-Mail zu verschicken oder hochzuladen.',
  'gif-to-png': 'Damit speicherst du das erste Bild eines GIFs als PNG-Standbild, mit vollen Farben statt der 256 Farben von GIF.',
  'gif-to-jpg': 'Damit speicherst du das erste Bild eines GIFs als JPG-Standbild – praktisch für Thumbnails und Vorschaubilder.',
  'svg-to-png': 'SVG-Logos und -Icons lassen sich nicht überall öffnen. Ein PNG funktioniert in Dokumenten, Präsentationen und Social-Media-Posts und behält die Transparenz.',
  'svg-to-jpg': 'Mach aus einem SVG-Logo oder einer SVG-Zeichnung ein JPG, das jede App öffnen kann. Transparente Bereiche werden weiß.',
  'avif-to-jpg': 'AVIF ist ein neues, sehr platzsparendes Bildformat, das viele Apps und ältere Geräte noch nicht öffnen können. JPG funktioniert überall.',
  'avif-to-png': 'AVIF-Bilder lassen sich in Bildbearbeitungsprogrammen oder älterer Software oft nicht öffnen. PNG wird überall akzeptiert und behält die Transparenz.',
};
function img(t, [, from, to, F, T]) {
  return {
    slug: `${from}-in-${to}`,
    name: `${F} in ${T}`, blurb: `${F}-Bilder in ${T} umwandeln`,
    title: `${F} in ${T} umwandeln – kostenlos, schnell, ohne Upload`,
    desc: `Wandle ${F} kostenlos in deinem Browser in ${T} um. Mehrere Dateien auf einmal, volle Qualität, kein Upload und keine Anmeldung.`,
    h1: `${F} in ${T} umwandeln`,
    lead: `Wandle ${F}-Bilder in Sekunden in ${T}-Dateien um, einzeln oder mehrere auf einmal.`,
    intro: imgIntro[t.slug],
    steps: [`Wähle deine ${F}-Dateien aus oder zieh sie in das Feld.`, `Prüfe, ob „${T}“ ausgewählt ist${to === 'png' ? '' : ', und stell die Qualität ein'}.`, `Lade jede ${T}-Datei einzeln herunter oder alle zusammen als ZIP.`],
    faq: [
      [`Verliert das Bild beim Umwandeln von ${F} in ${T} an Qualität?`, to === 'png' ? `Nein. PNG ist verlustfrei, das PNG behält also jedes Pixel der ${F}-Datei.` : `${T} ist ein komprimiertes Format. Bei 85–95 % Qualität ist der Unterschied kaum zu erkennen.`],
      [`Kann ich viele ${F}-Dateien auf einmal umwandeln?`, 'Ja. Wähle so viele aus, wie du willst, oder zieh sie alle hinein und lade sie zusammen als ZIP herunter.'],
      ['Werden meine Bilder hochgeladen?', local],
    ],
  };
}

const audioIntro = {
  'mov-to-mp3': 'MOV ist das Videoformat, in dem iPhones und Macs aufnehmen. Hol dir den Ton aus einem iPhone-Video, einer Probe oder einem Interview als MP3.',
  'webm-to-mp3': 'WebM-Dateien stammen von Bildschirmrekordern, Browsern und manchen Download-Tools. Speichere die Tonspur als MP3 für dein Handy oder deine Podcast-App.',
  'mkv-to-mp3': 'MKV ist ein Containerformat, das viele Kameras und Aufnahme-Apps verwenden. Extrahiere die Tonspur aus deiner eigenen MKV-Datei als MP3.',
  'avi-to-mp3': 'AVI ist ein älteres Windows-Videoformat. Speichere den Ton aus alten Heimvideos oder Aufnahmen als MP3.',
  'ogg-to-mp3': 'OGG Vorbis ist ein offenes Audioformat, das viele Autoradios und Apple-Geräte nicht abspielen. MP3 läuft überall.',
  'flac-to-mp3': 'FLAC ist verlustfrei und groß, etwa 30 MB pro Song. Ein MP3 mit 320 kbps klingt fast genauso, ist aber nur ein Viertel so groß – so passen mehr Songs aufs Handy oder auf einen USB-Stick.',
  'aac-to-mp3': 'AAC wird von iTunes, YouTube und vielen Handys verwendet. Manche älteren Player und Apps akzeptieren nur MP3.',
  'mp4-to-wav': 'Du brauchst den Ton aus einem Video zum Bearbeiten? WAV ist unkomprimiert und damit das sicherste Format für Audacity, GarageBand oder eine DAW.',
  'mp3-to-wav': 'Manche Editoren, Sampler und Telefonanlagen akzeptieren nur WAV. Durch die Umwandlung von MP3 in WAV wird die Datei kompatibel. Details, die beim MP3 verloren gegangen sind, kommen dadurch aber nicht zurück.',
  'm4a-to-wav': 'M4A ist das Format von iPhone-Sprachmemos und iTunes-Downloads. WAV lässt sich in jedem Audio-Editor öffnen.',
};
function audio(t, [, from, F, to]) {
  const T = to.toUpperCase();
  return {
    slug: `${from}-in-${to}`,
    name: `${F} in ${T}`, blurb: /video/.test(t.accept || '') ? `Den Ton aus ${F}-Dateien holen` : `${F}-Audio in ${T} umwandeln`,
    title: `${F} in ${T} umwandeln – kostenlos, privat, ohne Upload`,
    desc: `Wandle ${F} kostenlos in deinem Browser in ${T} um. ${to === 'mp3' ? 'Wähle zwischen 128 und 320 kbps.' : 'Unkomprimiertes WAV zum Bearbeiten.'} Kein Upload, keine Anmeldung, kein Wasserzeichen.`,
    h1: `${F} in ${T} umwandeln`,
    lead: `Mach aus ${F}-Dateien in wenigen Sekunden ${T}-Audio, direkt auf deinem Gerät.`,
    intro: audioIntro[t.slug],
    steps: [`Wähle deine ${F}-Dateien aus oder zieh sie in das Feld.`, to === 'mp3' ? 'Wähle die MP3-Qualität. 192 kbps reicht für die meisten Zwecke, 320 kbps für Musik.' : 'Lass WAV ausgewählt.', 'Warte, bis der Ton umgewandelt ist.', `Lade deine ${T}-Datei herunter.`],
    faq: [
      [to === 'mp3' ? 'Welche MP3-Qualität soll ich wählen?' : 'Warum WAV?', to === 'mp3' ? '128 kbps reicht für Sprache, 192 kbps für die meiste Musik und 320 kbps für die beste Qualität.' : 'WAV ist unkomprimiert und damit das sicherste Format zum Bearbeiten in Audacity, GarageBand oder einer DAW. Die Dateien sind etwa 10 MB pro Minute groß.'],
      [`Kann ich mehrere ${F}-Dateien auf einmal umwandeln?`, 'Ja. Füge so viele hinzu, wie du willst – sie werden nacheinander umgewandelt.'],
      ['Werden meine Dateien hochgeladen?', local],
    ],
  };
}

const videoIntro = {
  'webm-to-mp4': 'WebM-Bildschirmaufnahmen und Browser-Downloads laufen auf vielen Handys und Fernsehern und in PowerPoint nicht.',
  'mkv-to-mp4': 'MKV-Dateien laufen oft nicht auf iPhones, Smart-TVs oder in Videoschnittprogrammen.',
  'avi-to-mp4': 'AVI ist ein altes, sperriges Format, das Handys und Websites nur schlecht unterstützen.',
  'flv-to-mp4': 'FLV ist ein altes Flash-Videoformat, das moderne Geräte nicht abspielen können.',
  'mp4-to-webm': 'Du baust eine Website?',
  'mp4-to-mov': 'Du schneidest auf einem Mac?',
};
function video(t, [, from, F, to]) {
  const T = to.toUpperCase();
  const tail = to === 'mp4' ? 'MP4 mit H.264 läuft auf fast jedem Handy, Computer, Fernseher und auf jeder Website.' : to === 'webm' ? 'WebM ist ein offenes Format, das fürs Web gemacht ist und in jedem modernen Browser läuft.' : 'MOV ist das Videoformat von Apple und lässt sich problemlos in QuickTime, iMovie und Final Cut öffnen.';
  return {
    slug: `${from}-in-${to}`,
    name: `${F} in ${T}`, blurb: `${F}-Videos in ${T} umwandeln`,
    title: `${F} in ${T} umwandeln – kostenlos, ohne Upload, ohne Wasserzeichen`,
    desc: `Wandle ${F} kostenlos in deinem Browser in ${T} um. Kein Upload, kein Wasserzeichen, keine Anmeldung. Funktioniert unter Windows, auf dem Mac und auf dem Chromebook.`,
    h1: `${F} in ${T} umwandeln`,
    lead: `Mach aus ${F}-Videos ${T}-Dateien, die dort laufen, wo du sie brauchst.`,
    intro: `${videoIntro[t.slug]} ${tail}`,
    steps: [`Wähle dein ${F}-Video aus oder zieh es in das Feld.`, `Lass „${to === 'mp4' ? 'MP4 (H.264)' : to === 'webm' ? 'WebM (VP8)' : 'MOV'}“ ausgewählt.`, 'Lass den Tab geöffnet, während das Video umgewandelt wird.', `Lade dein ${T} herunter.`],
    faq: [
      [`Wird die Qualität beim Umwandeln von ${F} in ${T} schlechter?`, 'Das Video wird mit hoher Qualität neu codiert, der Unterschied ist also kaum zu sehen.'],
      ['Wie lange dauert das?', 'Auf einem normalen Laptop etwa so lange, wie das Video selbst dauert. Kurze Clips gehen schnell; lange Videos sind auf einem Computer schneller als auf dem Handy.'],
      ['Werden meine Videos hochgeladen?', local],
    ],
  };
}

const sizeWhy = {
  'compress-image-to-20kb': 'Manche Behörden- und Prüfungsformulare akzeptieren nur Fotos und Unterschriften unter 20 KB.',
  'compress-image-to-50kb': 'Jobportale, Prüfungsanmeldungen und Ausweisanträge verlangen oft Bilder unter 50 KB.',
  'compress-image-to-100kb': 'Viele Online-Formulare, Profilseiten und E-Mail-Systeme begrenzen Bild-Uploads auf 100 KB.',
  'compress-image-to-200kb': 'Antragsformulare und Websites begrenzen Fotos oft auf 200 KB.',
  'compress-image-to-500kb': 'Eine Grenze von 500 KB ist in Foren, auf Schulportalen und auf Kleinanzeigen-Seiten üblich.',
  'compress-image-to-1mb': 'Viele Websites und E-Mail-Dienste begrenzen Anhänge auf etwa 1 MB pro Bild.',
  'compress-jpeg-to-100kb': 'Handy-JPEGs sind meist 2–5 MB groß, weit mehr als die 100 KB, die viele Formulare erlauben.',
  'compress-jpeg-to-200kb': 'Handy-JPEGs sind meist 2–5 MB groß, weit mehr als die 200 KB, die viele Formulare erlauben.',
};
function size(t, [, kb, jpeg]) {
  const L = kb >= 1000 ? `${kb / 1000} MB` : `${kb} KB`;
  const what = jpeg ? 'JPEG' : 'Bild';
  const thing = jpeg ? 'JPG-Foto' : 'Bild';
  return {
    slug: `${jpeg ? 'jpeg' : 'bild'}-auf-${kb >= 1000 ? kb / 1000 + 'mb' : kb + 'kb'}-komprimieren`,
    name: `${what} auf ${L} komprimieren`, blurb: `Bring jedes ${thing} unter ${L}`,
    title: `${what} auf ${L} komprimieren – kostenlos, exakte Größe, ohne Upload`,
    desc: `Komprimiere ein ${thing} in einem Schritt auf ${L} oder weniger. Das Tool findet die beste Qualität, die unter ${L} passt. Kostenlos, privat, kein Upload, keine Anmeldung.`,
    h1: `${jpeg ? 'JPEG-Foto' : 'Bild'} auf ${L} komprimieren`,
    lead: `Zieh ein Foto hinein und erhalte eine Kopie unter ${L} – in der besten Qualität, die noch passt.`,
    intro: `${sizeWhy[t.slug]} Statt eine Qualitätsstufe zu raten, probiert das Tool verschiedene Einstellungen für dich aus und behält die schärfste Version, die unter ${L} bleibt. Ist ein Foto sehr groß, wird es außerdem etwas verkleinert, bis es passt.`,
    steps: [`Wähle deine ${jpeg ? 'JPG-' : ''}Fotos aus oder zieh sie in das Feld.`, `Lass die Zielgröße bei ${kb} KB oder gib eine andere Größe ein.`, `Lade jedes Foto unter ${L} einzeln herunter oder alle zusammen als ZIP.`],
    faq: [
      [`Wird das Foto genau ${L} groß?`, `Es wird ${L} groß oder etwas kleiner. Das Tool wählt die höchste Qualität, die noch in die Grenze passt.`],
      ['Warum hat mein Bild jetzt weniger Pixel?', `Manche Fotos lassen sich allein über die Qualität nicht auf ${L} bringen. Dann verkleinert das Tool Breite und Höhe Schritt für Schritt, bis die Datei passt.`],
      ['Kann ich viele Fotos auf einmal bearbeiten?', 'Ja. Jedes Foto, das du hinzufügst, wird auf dieselbe Größe gebracht, und du kannst alle zusammen als ZIP herunterladen.'],
      ['Werden meine Fotos hochgeladen?', local],
    ],
  };
}

const sites = {
  'resize-image-for-instagram': ['bildgroesse-fuer-instagram-aendern', 'Instagram', 'Instagram zeigt Beiträge mit 1080 px Breite an. Quadratische Beiträge sind 1080 × 1080 groß, Hochformat-Beiträge 1080 × 1350.', 'Wenn nur die Breite festgelegt ist, bleibt die Form deines Fotos erhalten, es wird also nichts verzerrt.'],
  'resize-image-for-youtube-thumbnail': ['bildgroesse-fuer-youtube-thumbnails-aendern', 'YouTube-Thumbnails', 'YouTube empfiehlt Thumbnails mit 1280 × 720 Pixeln (16:9) und unter 2 MB.', 'Nimm am besten ein Bild im Breitbildformat 16:9, damit nichts verzerrt wird.'],
  'resize-image-for-facebook-cover': ['bildgroesse-fuer-facebook-titelbilder-aendern', 'Facebook-Titelbilder', 'Facebook-Titelbilder werden auf Computern mit 851 × 315 Pixeln angezeigt.', 'Nimm ein breites Bild oder lösch die Höhe, damit die Form erhalten bleibt.'],
  'resize-image-for-twitter-header': ['bildgroesse-fuer-x-twitter-header-aendern', 'X-Headerbilder (Twitter)', 'Headerbilder auf X (Twitter) sind 1500 × 500 Pixel groß.', 'Nimm ein breites Bild im Format 3:1 oder lösch die Höhe, damit die Form erhalten bleibt.'],
};
function site(t, [, , w, h]) {
  const [slug, name, why, tip] = sites[t.slug];
  const dims = `${w}${h ? ' × ' + h : ' px breit'}`;
  const dimsN = h ? `${w} × ${h}` : `${w} px Breite`;
  return {
    slug,
    name: `Bildgröße für ${name} ändern`, blurb: dims,
    title: `Bildgröße für ${name} ändern – ${w}${h ? '×' + h : ' px'} kostenlos, ohne Upload`,
    desc: `Bring deine Fotos auf die richtige Größe für ${name} (${dimsN}). Kostenlos, schnell und direkt im Browser, ohne Upload.`,
    h1: `Bildgröße für ${name} ändern`,
    lead: `${h ? 'Breite und Höhe sind' : 'Die Breite ist'} für ${name} schon eingetragen. Füg einfach dein Foto hinzu.`,
    intro: `${why} ${tip}`,
    steps: ['Wähle dein Bild aus oder zieh es in das Feld.', `Behalte die voreingestellte Größe von ${dimsN} oder ändere sie.`, 'Lade das angepasste Bild herunter und lade es auf der Plattform hoch.'],
    faq: [
      [`Welche Größe ist für ${name} am besten?`, why],
      ['Wird mein Foto verzerrt?', h ? `Nur wenn seine Form von ${w} × ${h} abweicht. ${tip}` : 'Nein. Nur die Breite wird festgelegt, die Höhe richtet sich nach der ursprünglichen Form.'],
      ['Werden meine Bilder hochgeladen?', local],
    ],
  };
}

// ---------- Hand-written pages ----------
const hand = {
  'compress-jpeg': {
    slug: 'jpeg-komprimieren', name: 'JPEG komprimieren', blurb: 'JPG-Fotos ohne sichtbaren Qualitätsverlust verkleinern',
    title: 'JPEG online komprimieren – JPG-Dateigröße kostenlos verringern, ohne Upload',
    desc: 'Komprimiere JPEG- und JPG-Fotos kostenlos. Verringere die Dateigröße um bis zu 80 % ohne sichtbaren Qualitätsverlust. Mehrere Dateien auf einmal, kein Upload, keine Anmeldung.',
    h1: 'JPEG-Bilder komprimieren',
    lead: 'Mach JPG-Fotos kleiner für E-Mails, Websites und Formulare – und trotzdem scharf.',
    intro: 'Handyfotos sind oft 3–8 MB groß. Der Großteil davon sind Details, die das Auge gar nicht sieht. Eine Qualität von etwa 70–80 % halbiert die Datei meist oder spart sogar noch mehr, und mit einer maximalen Breite (zum Beispiel 1920 px) wird sie noch kleiner.',
    steps: ['Wähle deine JPG-Fotos aus oder zieh sie in das Feld.', 'Wähle eine Qualität. 75 % ist ein guter Kompromiss aus Dateigröße und Schärfe.', 'Leg bei Bedarf eine maximale Breite fest, um große Fotos noch kleiner zu machen.', 'Lade jedes Foto einzeln herunter oder alle zusammen als ZIP.'],
    faq: [
      ['Wie viel kleiner wird mein JPEG?', 'Meist 40–80 % kleiner, je nach Foto und gewählter Qualität. Ist ein Foto schon gut komprimiert, bleibt das Original erhalten, damit es nie größer wird.'],
      ['Welche Qualität soll ich wählen?', '75 % passt für die meisten Fotos. Nimm 85–90 % für Ausdrucke oder detailreiche Bilder und 60 %, wenn die Dateigröße am wichtigsten ist, zum Beispiel bei E-Mail-Anhängen.'],
      ['Gibt es eine Grenze für Dateigröße oder Anzahl?', 'Keine feste Grenze. Bei sehr vielen Dateien kommt es auf den Arbeitsspeicher deines Geräts an.'],
      ['Werden meine Fotos irgendwo hochgeladen?', local],
    ],
  },
  'compress-image': {
    slug: 'bild-komprimieren', name: 'Bildkompressor', blurb: 'JPG, PNG und WebP komprimieren',
    title: 'Bildkompressor – JPG, PNG & WebP kostenlos online komprimieren',
    desc: 'Kostenloser Bildkompressor für JPG, PNG und WebP. Verkleinere Bilder für Websites, E-Mails und Uploads. Läuft in deinem Browser, ohne Upload.',
    h1: 'Bildkompressor',
    lead: 'Verringere die Dateigröße von JPG-, PNG- und WebP-Bildern an einem Ort.',
    intro: 'JPG und WebP lassen sich gut komprimieren, indem man die Qualität senkt. PNG ist verlustfrei, deshalb sparst du am meisten, wenn du es stattdessen als WebP oder JPG speicherst. WebP wird von allen modernen Browsern unterstützt und ist für Websites meist die kleinste Wahl.',
    steps: ['Wähle deine Bilder aus oder zieh sie in das Feld.', 'Wähle Qualität und Ausgabeformat. Bei PNG sparst du mit WebP oder JPG am meisten.', 'Leg eine maximale Breite fest, wenn die Bilder größer sind als nötig.', 'Lade jedes Bild einzeln herunter oder alle zusammen als ZIP.'],
    faq: [
      ['Warum ist mein PNG kaum kleiner geworden?', 'PNG behält jedes Pixel, deshalb bringt erneutes Speichern als PNG wenig. Wähle WebP oder JPG als Ausgabeformat, damit die Datei deutlich kleiner wird.'],
      ['Geht beim Komprimieren die Transparenz verloren?', 'WebP und PNG behalten die Transparenz. JPG unterstützt keine Transparenz, deshalb werden transparente Bereiche weiß.'],
      ['Welches Format ist am kleinsten?', 'WebP ist bei gleicher Bildqualität meist 25–35 % kleiner als JPG.'],
      ['Ist dieser Bildkompressor sicher?', local],
    ],
  },
  'resize-image': {
    slug: 'bildgroesse-aendern', name: 'Bildgröße ändern', blurb: 'Breite und Höhe in Pixeln oder % ändern',
    title: 'Bildgröße online ändern – kostenlos in Pixeln oder % anpassen',
    desc: 'Ändere die Bildgröße kostenlos in Pixeln oder Prozent. Seitenverhältnis beibehalten, mehrere JPG-, PNG- und WebP-Bilder auf einmal anpassen. Kein Upload, keine Anmeldung.',
    h1: 'Bildgröße ändern',
    lead: 'Ändere die Abmessungen eines Bildes in Pixeln oder Prozent – für ein einzelnes Foto oder einen ganzen Ordner.',
    intro: 'Gib nur die Breite oder nur die Höhe ein, dann wird die andere Seite automatisch berechnet und nichts wird verzerrt. Gib beide ein, um eine exakte Größe festzulegen.',
    steps: ['Wähle deine Bilder aus oder zieh sie in das Feld.', 'Wähle Pixel oder Prozent und gib die gewünschte Größe ein.', 'Behalte das Originalformat oder wechsle zu JPG, PNG oder WebP.', 'Lade die angepassten Bilder herunter.'],
    faq: [
      ['Wie behalte ich das Seitenverhältnis bei?', 'Füll nur die Breite oder nur die Höhe aus. Die andere Seite wird automatisch berechnet.'],
      ['Kann ich ein Bild vergrößern?', 'Ja, aber beim Vergrößern kommen keine Details hinzu, deshalb wirken starke Vergrößerungen unscharf.'],
      ['Welche Größe nehme ich für Instagram oder eine Website?', 'Instagram-Beiträge sehen mit 1080 px Breite am besten aus. Für die meisten Websites reichen 1600–1920 px Breite völlig aus.'],
      ['Werden meine Bilder hochgeladen?', local],
    ],
  },
  'image-converter': {
    slug: 'bildkonverter', name: 'Bildkonverter', blurb: 'Zwischen JPG, PNG und WebP umwandeln',
    title: 'Bildkonverter – JPG, PNG & WebP kostenlos online umwandeln',
    desc: 'Kostenloser Bildkonverter. Wandle Bilder in deinem Browser zwischen JPG, PNG und WebP um – auch mehrere auf einmal, ohne Upload und ohne Anmeldung.',
    h1: 'Bildkonverter',
    lead: 'Wandle Bilder zwischen JPG, PNG und WebP um, einzeln oder viele auf einmal.',
    intro: 'Nimm JPG für Fotos, PNG für Grafiken und Screenshots, die scharfe Kanten oder Transparenz brauchen, und WebP, wenn du die kleinste Datei fürs Web willst.',
    steps: ['Wähle deine Bilder aus oder zieh sie in das Feld.', 'Wähle das Zielformat.', 'Stell die Qualität für JPG oder WebP ein.', 'Lade jede Datei einzeln herunter oder alle zusammen als ZIP.'],
    faq: [
      ['Aus welchen Formaten kann ich umwandeln?', 'JPG, PNG, WebP, GIF (erstes Bild), BMP, AVIF und SVG – sofern dein Browser sie öffnen kann.'],
      ['Kann ich HEIC-Fotos vom iPhone umwandeln?', 'Nur in Browsern, die HEIC öffnen können, zum Beispiel Safari auf dem Mac und dem iPhone. Für andere Browser stellst du die iPhone-Kamera auf „Maximale Kompatibilität“, damit sie JPGs speichert.'],
      ['Werden meine Bilder hochgeladen?', local],
    ],
  },
  'mp4-to-mp3': {
    slug: 'mp4-in-mp3', name: 'MP4 in MP3', blurb: 'Den Ton aus MP4-Videos holen',
    title: 'MP4 in MP3 umwandeln – Audio kostenlos extrahieren, ohne Upload',
    desc: 'Wandle MP4 kostenlos in MP3 um. Extrahiere den Ton aus deinen eigenen MP4-Videos mit bis zu 320 kbps. Läuft in deinem Browser, kein Upload, keine Anmeldung.',
    h1: 'MP4 in MP3 umwandeln',
    lead: 'Speichere den Ton deiner eigenen MP4-Videos als MP3, das du überall abspielen kannst.',
    intro: 'Praktisch, um aus einer aufgenommenen Probe, einer Vorlesung, einer Sprachnotiz oder einem Interview eine Audiodatei für dein Handy oder deine Podcast-App zu machen. Nutze das Tool nur für Videos, die dir gehören oder die du verwenden darfst.',
    steps: ['Wähle deine MP4-Dateien aus oder zieh sie in das Feld.', 'Wähle die MP3-Qualität. 192 kbps ist für die meisten Zwecke ideal, 320 kbps für Musik.', 'Warte ein paar Sekunden, bis der Ton umgewandelt ist.', 'Lade dein MP3 herunter.'],
    faq: [
      ['Welche MP3-Qualität soll ich wählen?', '128 kbps reicht für Sprache, 192 kbps für die meiste Musik und 320 kbps für die beste Qualität.'],
      ['Kann ich stattdessen eine WAV-Datei bekommen?', 'Ja. Wähle WAV als Ausgabe für unkomprimierten Ton – praktisch zum Bearbeiten.'],
      ['Kann ich hier YouTube-Videos umwandeln?', 'Nein. Dieses Tool arbeitet mit Videodateien, die schon auf deinem Gerät sind. Das Herunterladen von YouTube verstößt gegen die Nutzungsbedingungen von YouTube.'],
      ['Werden meine Videos hochgeladen?', local],
    ],
  },
  'video-to-mp3': {
    slug: 'audio-aus-video-extrahieren', name: 'Audio aus Video extrahieren', blurb: 'MOV, WebM, MKV, AVI in MP3',
    title: 'Audio aus Video extrahieren – Video kostenlos in MP3 umwandeln',
    desc: 'Extrahiere den Ton aus jedem Video: MOV, MP4, WebM, MKV und AVI in MP3 oder WAV. Kostenlos, privat und schnell. Kein Upload, keine Anmeldung.',
    h1: 'Audio aus einem Video extrahieren',
    lead: 'Mach aus der Tonspur eines MOV-, WebM-, MKV- oder AVI-Videos ein MP3 oder WAV.',
    intro: 'Die meisten Videos werden sofort umgewandelt. Seltenere Formate übernimmt ein eingebauter Konverter, der beim ersten Mal geladen wird und danach in deinem Browser zwischengespeichert bleibt.',
    steps: ['Wähle deine Videodateien aus oder zieh sie in das Feld.', 'Wähle MP3 oder WAV und die MP3-Qualität.', 'Warte, bis der Ton extrahiert ist.', 'Lade die Audiodatei herunter.'],
    faq: [
      ['Welche Videoformate funktionieren?', 'In den meisten Fällen MP4, MOV, M4V, WebM, MKV, AVI, FLV, WMV und 3GP.'],
      ['Warum hat die erste Umwandlung länger gedauert?', 'Manche Formate brauchen den vollständigen Konverter (etwa 30 MB). Er wird einmal heruntergeladen und dann von deinem Browser zwischengespeichert.'],
      ['Werden meine Videos hochgeladen?', local],
    ],
  },
  'wav-to-mp3': {
    slug: 'wav-in-mp3', name: 'WAV in MP3', blurb: 'WAV-Aufnahmen als MP3 verkleinern',
    title: 'WAV in MP3 umwandeln – kostenlos, schnell, ohne Upload',
    desc: 'Wandle WAV kostenlos in deinem Browser in MP3 um. Mach große WAV-Aufnahmen mit 128–320 kbps bis zu 10-mal kleiner. Kein Upload, keine Anmeldung.',
    h1: 'WAV in MP3 umwandeln',
    lead: 'Mach große WAV-Aufnahmen klein genug zum Mailen, Teilen oder Aufbewahren.',
    intro: 'Eine 5-minütige Stereo-WAV-Datei ist etwa 50 MB groß. Als MP3 mit 192 kbps sind es etwa 7 MB, und für die meisten Hörer klingt sie gleich.',
    steps: ['Wähle deine WAV-Dateien aus oder zieh sie in das Feld.', 'Wähle die MP3-Qualität.', 'Lade die MP3-Dateien herunter.'],
    faq: [
      ['Verliert WAV beim Umwandeln in MP3 an Qualität?', 'MP3 ist komprimiert, aber bei 256–320 kbps ist der Unterschied kaum zu hören.'],
      ['Kann ich auch andere Audiodateien umwandeln?', 'Ja. Je nach Browser funktionieren auch FLAC-, OGG-, AAC- und M4A-Dateien.'],
      ['Werden meine Dateien hochgeladen?', local],
    ],
  },
  'm4a-to-mp3': {
    slug: 'm4a-in-mp3', name: 'M4A in MP3', blurb: 'iPhone-Sprachmemos und M4A umwandeln',
    title: 'M4A in MP3 umwandeln – Sprachmemos kostenlos konvertieren',
    desc: 'Wandle M4A kostenlos in MP3 um, auch iPhone-Sprachmemos und iTunes-Audio ohne DRM. Läuft in deinem Browser, ohne Upload.',
    h1: 'M4A in MP3 umwandeln',
    lead: 'Mach aus M4A-Dateien wie iPhone-Sprachmemos MP3s, die auf jedem Gerät laufen.',
    intro: 'M4A ist das Standard-Audioformat von Apple. Manche Autos, ältere Player und Websites akzeptieren nur MP3 – nach der Umwandlung läuft die Datei überall.',
    steps: ['Wähle deine M4A-Dateien aus oder zieh sie in das Feld.', 'Wähle die MP3-Qualität.', 'Lade deine MP3-Dateien herunter.'],
    faq: [
      ['Wie bekomme ich Sprachmemos von meinem iPhone?', 'Tippe in der App „Sprachmemos“ auf ein Memo, dann auf „Teilen“, und sichere es in „Dateien“. Öffne danach diese Seite auf deinem Handy und wähle die Datei aus.'],
      ['Lassen sich bei iTunes gekaufte Songs umwandeln?', 'Nur Songs ohne Kopierschutz (DRM).'],
      ['Werden meine Dateien hochgeladen?', local],
    ],
  },
  'video-converter': {
    slug: 'videokonverter', name: 'Videokonverter', blurb: 'In MP4, WebM oder MOV umwandeln',
    title: 'Videokonverter – Videos kostenlos in MP4, WebM oder MOV umwandeln',
    desc: 'Kostenloser Online-Videokonverter. Wandle MOV, MKV, AVI, WebM und mehr in deinem Browser in MP4, WebM oder MOV um. Kein Upload, kein Wasserzeichen.',
    h1: 'Videokonverter',
    lead: 'Wandle Videos in MP4, WebM oder MOV um, ohne etwas zu installieren.',
    intro: 'MP4 mit H.264 läuft auf fast jedem Handy, Computer, Fernseher und in jedem sozialen Netzwerk und ist damit die sicherste Wahl. Die Umwandlung passiert auf deinem Gerät, die Geschwindigkeit hängt also von deinem Computer und der Länge des Videos ab.',
    steps: ['Wähle ein Video aus oder zieh es in das Feld.', 'Wähle das Zielformat.', 'Lass den Tab geöffnet, während das Video umgewandelt wird. Der Fortschrittsbalken zeigt, wie weit es ist.', 'Lade das umgewandelte Video herunter.'],
    faq: [
      ['Gibt es ein Wasserzeichen?', 'Nein. Dein Video wird so umgewandelt, wie es ist – ohne Wasserzeichen und ohne Zeitlimit.'],
      ['Warum ist das langsamer als ein Desktop-Programm?', 'Der Konverter läuft für deine Privatsphäre direkt in deinem Browser. Kurze Clips sind schnell umgewandelt, lange oder 4K-Videos brauchen länger.'],
      ['Wie groß darf ein Video sein?', 'Videos unter etwa 500 MB funktionieren am besten. Bei größeren Dateien kommt es auf den Arbeitsspeicher deines Geräts an.'],
      ['Werden meine Videos hochgeladen?', local],
    ],
  },
  'mov-to-mp4': {
    slug: 'mov-in-mp4', name: 'MOV in MP4', blurb: 'iPhone- und Mac-Videos umwandeln',
    title: 'MOV in MP4 umwandeln – kostenlos, ohne Upload, ohne Wasserzeichen',
    desc: 'Wandle MOV kostenlos in MP4 um. So laufen Videos vom iPhone und Mac auch unter Windows, auf Android und in sozialen Netzwerken. Kein Upload, kein Wasserzeichen.',
    h1: 'MOV in MP4 umwandeln',
    lead: 'Bring MOV-Videos vom iPhone und Mac unter Windows, auf Android und in jedem sozialen Netzwerk zum Laufen.',
    intro: 'MOV-Dateien vom iPhone nutzen oft Codecs, die Windows und manche Websites nicht öffnen. MP4 mit H.264 ist das am weitesten unterstützte Videoformat.',
    steps: ['Wähle dein MOV-Video aus oder zieh es in das Feld.', 'Lass „MP4 (H.264)“ ausgewählt.', 'Lass den Tab geöffnet, während das Video umgewandelt wird.', 'Lade dein MP4 herunter.'],
    faq: [
      ['Wird die Qualität beim Umwandeln von MOV in MP4 schlechter?', 'Das Video wird mit hoher Qualität neu codiert, der Unterschied ist also kaum zu sehen.'],
      ['Kann ich das auf meinem iPhone machen?', 'Ja, es funktioniert in Safari auf dem iPhone und iPad. Lange Videos gehen auf einem Computer allerdings schneller.'],
      ['Werden meine Videos hochgeladen?', local],
    ],
  },
  'compress-video': {
    slug: 'video-komprimieren', name: 'Video komprimieren', blurb: 'Videos zum Teilen verkleinern',
    title: 'Video online komprimieren – MP4-Dateigröße kostenlos verringern',
    desc: 'Komprimiere Videos kostenlos in deinem Browser. Verkleinere MP4, MOV und WebM für E-Mail, WhatsApp und Discord. Kein Upload, kein Wasserzeichen.',
    h1: 'Video komprimieren',
    lead: 'Verkleinere Videos, damit sie in E-Mails, WhatsApp, Discord und unter Upload-Grenzen passen.',
    intro: 'Wenn du die Auflösung auf 720p senkst und eine mittlere Komprimierung wählst, wird ein Handyvideo meist 3- bis 10-mal kleiner und sieht auf dem Handydisplay trotzdem noch gut aus.',
    steps: ['Wähle ein Video aus oder zieh es in das Feld.', 'Wähle, wie stark komprimiert werden soll.', 'Wähle eine maximale Auflösung. 720p reicht zum Teilen fast immer.', 'Lade das kleinere MP4 herunter.'],
    faq: [
      ['Wie klein wird mein Video?', 'Das hängt vom Original ab. Handyvideos in 1080p oder 4K schrumpfen bei 720p und mittlerer Komprimierung oft um 70–90 %.'],
      ['Welche Einstellung nehme ich für Discord oder E-Mail?', 'Wähle „Stark“ und 480p oder 720p, dann bleiben die meisten kurzen Clips unter 25 MB.'],
      ['Werden meine Videos hochgeladen?', local],
    ],
  },
  'video-to-gif': {
    slug: 'video-in-gif', name: 'Video in GIF', blurb: 'GIF aus einem Videoclip erstellen',
    title: 'GIF aus Video erstellen – MP4 kostenlos in GIF umwandeln',
    desc: 'Erstelle kostenlos GIFs aus MP4-, MOV- und WebM-Videos. Wähle Startpunkt, Länge, Größe und Bildrate. Kein Upload, kein Wasserzeichen.',
    h1: 'GIF aus einem Video erstellen',
    lead: 'Mach aus einem kurzen Moment in einem Video ein animiertes GIF.',
    intro: 'GIFs werden schnell groß, halte sie also kurz: 3–6 Sekunden mit 480 px Breite und 10 fps sind eine gute Größe für Chats und Websites.',
    steps: ['Wähle ein Video aus oder zieh es in das Feld.', 'Leg fest, wo das GIF beginnt und wie lange es dauert.', 'Wähle Bildrate und Breite.', 'Lade dein GIF herunter.'],
    faq: [
      ['Wie lang darf das GIF sein?', 'Bis zu 60 Sekunden, aber kürzere GIFs sind viel kleiner und laden schneller.'],
      ['Warum ist mein GIF größer als das Video?', 'GIF ist ein altes Format mit schwacher Kompression. Verringere Breite, Bildrate oder Länge, damit es kleiner wird.'],
      ['Werden meine Videos hochgeladen?', local],
    ],
  },
  'mp4-to-gif': {
    slug: 'mp4-in-gif', name: 'MP4 in GIF', blurb: 'GIF aus einem MP4-Clip erstellen',
    title: 'MP4 in GIF umwandeln – GIFs kostenlos aus Videos erstellen, ohne Upload',
    desc: 'Mach aus einem MP4-Clip kostenlos ein animiertes GIF. Wähle Startzeit, Länge, Größe und Bildrate. Privat, kein Upload, kein Wasserzeichen.',
    h1: 'MP4 in GIF umwandeln',
    lead: 'Schneide ein paar Sekunden aus einem MP4 heraus und speichere sie als GIF in Endlosschleife.',
    intro: 'GIFs laufen in Chats, E-Mails und Dokumenten automatisch ab, auch wo Videos nicht funktionieren. Halte sie kurz, 2 bis 6 Sekunden, und etwa 480 px breit, damit sie klein genug zum Teilen bleiben.',
    steps: ['Wähle dein MP4 aus oder zieh es in das Feld.', 'Leg Startzeit und Länge in Sekunden fest.', 'Wähle Breite und Bildrate. 480 px mit 12 fps ist ein guter Ausgangswert.', 'Lade dein GIF herunter.'],
    faq: [
      ['Warum ist mein GIF so groß?', 'GIF ist ein altes Format mit schlechter Kompression. Ein kürzerer Clip, eine geringere Breite oder eine niedrigere Bildrate machen es deutlich kleiner.'],
      ['Wie lang darf das GIF sein?', 'Bis zu 60 Sekunden, aber unter 6 Sekunden bleibt die Datei in einer vernünftigen Größe.'],
      ['Werden meine Videos hochgeladen?', local],
    ],
  },
  'merge-pdf': {
    slug: 'pdf-zusammenfuegen', name: 'PDF zusammenfügen', blurb: 'Mehrere PDFs zu einer Datei kombinieren',
    title: 'PDF zusammenfügen – PDF-Dateien kostenlos online kombinieren, ohne Upload',
    desc: 'Füge PDF-Dateien kostenlos zu einem Dokument zusammen. Die Reihenfolge legst du selbst fest. Läuft in deinem Browser, privat, kein Upload, keine Anmeldung.',
    h1: 'PDF-Dateien zusammenfügen',
    lead: 'Füge mehrere PDFs in der Reihenfolge deiner Wahl zu einem Dokument zusammen.',
    intro: 'Praktisch, um Anträge, Rechnungen, Verträge und eingescannte Seiten zusammenzustellen. Da nichts hochgeladen wird, ist das Tool auch für private Dokumente sicher.',
    steps: ['Wähle deine PDF-Dateien aus oder zieh sie in das Feld.', 'Bring sie mit den Pfeilen in die richtige Reihenfolge.', 'Klick auf „PDFs zusammenfügen“.', 'Dein zusammengefügtes PDF wird automatisch heruntergeladen.'],
    faq: [
      ['Wie viele PDFs kann ich höchstens zusammenfügen?', 'Es gibt keine feste Grenze. Bei sehr großen Dateien kommt es auf den Arbeitsspeicher deines Geräts an.'],
      ['Kann ich passwortgeschützte PDFs zusammenfügen?', 'Nein. Entferne das Passwort zuerst in der App, mit der du das PDF öffnest.'],
      ['Werden meine PDFs hochgeladen?', local],
    ],
  },
  'split-pdf': {
    slug: 'pdf-aufteilen', name: 'PDF aufteilen', blurb: 'Seiten extrahieren oder jede Seite einzeln speichern',
    title: 'PDF aufteilen – Seiten kostenlos aus einem PDF extrahieren, ohne Upload',
    desc: 'Teile ein PDF kostenlos auf. Extrahiere die Seiten, die du brauchst, oder speichere jede Seite als eigenes PDF. Privat, in deinem Browser, ohne Upload.',
    h1: 'PDF aufteilen',
    lead: 'Hol dir nur die Seiten heraus, die du brauchst, oder zerlege ein PDF in einzelne Seiten.',
    intro: 'Gib Seiten und Bereiche wie „1-3, 7, 10-“ ein, um ein neues PDF nur aus diesen Seiten zu erstellen. Seiten wegzulassen ist außerdem eine einfache Möglichkeit, sie zu löschen.',
    steps: ['Wähle ein PDF aus oder zieh es in das Feld.', 'Wähle „Seiten extrahieren“ und gib die Seiten ein, oder wähle „Jede Seite“.', 'Klick auf „PDF aufteilen“.', 'Lade dein neues PDF oder das ZIP mit den Seiten herunter.'],
    faq: [
      ['Wie lösche ich Seiten aus einem PDF?', 'Extrahiere alle Seiten außer denen, die du löschen willst. Um zum Beispiel Seite 4 aus einer Datei mit 10 Seiten zu entfernen, gibst du „1-3, 5-10“ ein.'],
      ['Was bedeutet „10-“?', 'Es bedeutet: von Seite 10 bis zur letzten Seite.'],
      ['Werden meine PDFs hochgeladen?', local],
    ],
  },
  'jpg-to-pdf': {
    slug: 'jpg-in-pdf', name: 'JPG in PDF', blurb: 'Fotos und Scans in ein PDF umwandeln',
    title: 'JPG in PDF umwandeln – Bilder kostenlos zu PDF, ohne Upload',
    desc: 'Wandle JPG, PNG und andere Bilder kostenlos in PDF um. Fasse Fotos in einem PDF zusammen, wahlweise in A4 oder US Letter. Privat, ohne Upload.',
    h1: 'JPG in PDF umwandeln',
    lead: 'Fasse Fotos, Scans und Screenshots in einem einzigen PDF zusammen.',
    intro: 'Ideal, um abfotografierte Belege, Ausweise oder unterschriebene Formulare als ein ordentliches Dokument zu verschicken. Wähle A4 oder US Letter für Seiten, die sich gut drucken lassen, oder lass jede Seite so groß wie ihr Bild.',
    steps: ['Wähle deine Bilder aus oder zieh sie in das Feld.', 'Leg mit den Pfeilen die Reihenfolge der Seiten fest.', 'Wähle Seitengröße und Rand.', 'Klick auf „PDF erstellen“, um es herunterzuladen.'],
    faq: [
      ['Welche Bildtypen funktionieren?', 'JPG, PNG, WebP, GIF und BMP. Jedes Bild wird zu einer Seite.'],
      ['Lässt sich das PDF gut drucken?', 'Wähle A4 oder US Letter mit schmalem Rand für einen sauberen Ausdruck.'],
      ['Werden meine Bilder hochgeladen?', local],
    ],
  },
  'png-to-pdf': {
    slug: 'png-in-pdf', name: 'PNG in PDF', blurb: 'Screenshots in ein PDF umwandeln',
    title: 'PNG in PDF umwandeln – Screenshots & Bilder kostenlos zu PDF',
    desc: 'Wandle PNG-Bilder und Screenshots kostenlos in PDF um. Fasse viele in einem PDF zusammen, wahlweise in A4 oder US Letter. Privat, ohne Upload.',
    h1: 'PNG in PDF umwandeln',
    lead: 'Fasse Screenshots und PNG-Bilder in einem einzigen PDF zusammen.',
    intro: 'Praktisch, um eine Reihe von Screenshots, einen Chatverlauf oder Design-Entwürfe als ein Dokument zu verschicken, das sich überall öffnen lässt.',
    steps: ['Wähle deine PNG-Dateien aus oder zieh sie in das Feld.', 'Leg mit den Pfeilen die Reihenfolge der Seiten fest.', 'Wähle Seitengröße und Rand.', 'Klick auf „PDF erstellen“, um es herunterzuladen.'],
    faq: [
      ['Bleibt die PNG-Qualität im PDF erhalten?', 'Ja. PNG-Bilder werden ohne erneute Kompression ins PDF eingefügt.'],
      ['Kann ich PNG und JPG mischen?', 'Ja. Jede Mischung aus PNG, JPG, WebP, GIF und BMP funktioniert.'],
      ['Werden meine Bilder hochgeladen?', local],
    ],
  },
  'pdf-to-jpg': {
    slug: 'pdf-in-jpg', name: 'PDF in JPG', blurb: 'PDF-Seiten als Bilder speichern',
    title: 'PDF in JPG umwandeln – PDF-Seiten kostenlos als Bilder speichern',
    desc: 'Wandle PDF kostenlos in JPG oder PNG um. Speichere jede Seite als hochwertiges Bild. Läuft in deinem Browser, ohne Upload.',
    h1: 'PDF in JPG umwandeln',
    lead: 'Speichere jede Seite eines PDFs als JPG- oder PNG-Bild.',
    intro: 'Praktisch, um einen Flyer oder eine Speisekarte in sozialen Netzwerken zu posten, eine Seite in eine Präsentation einzufügen oder eine Seite an jemanden zu schicken, der keine PDFs öffnen kann.',
    steps: ['Wähle ein PDF aus oder zieh es in das Feld.', 'Wähle JPG oder PNG und die Qualität.', 'Lade das Bild herunter oder alle Seiten als ZIP.'],
    faq: [
      ['Welche Qualität soll ich wählen?', 'Hoch (144 dpi) passt für Bildschirme und soziale Netzwerke. Sehr hoch (216 dpi) ist besser zum Drucken oder Hineinzoomen.'],
      ['Kann ich nur eine Seite umwandeln?', 'Wandle das PDF um und behalte das Bild, das du brauchst. Oder hol dir die Seite vorher mit „PDF aufteilen“ heraus.'],
      ['Werden meine PDFs hochgeladen?', local],
    ],
  },
  'pdf-to-png': {
    slug: 'pdf-in-png', name: 'PDF in PNG', blurb: 'PDF-Seiten als scharfe PNGs speichern',
    title: 'PDF in PNG umwandeln – PDF-Seiten kostenlos als PNG-Bilder',
    desc: 'Wandle PDF-Seiten kostenlos in PNG-Bilder um. Scharfer Text, ohne Transparenz und verlustfrei. Läuft in deinem Browser, ohne Upload.',
    h1: 'PDF in PNG umwandeln',
    lead: 'Speichere jede Seite eines PDFs als gestochen scharfes PNG-Bild.',
    intro: 'PNG hält Text und Strichgrafiken scharf, ohne verschwommene Kanten. Für Folien, Diagramme, Schaubilder und Dokumente ist es deshalb die bessere Wahl als JPG.',
    steps: ['Wähle ein PDF aus oder zieh es in das Feld.', 'Lass PNG ausgewählt und wähle die Qualität.', 'Lade das Bild herunter oder alle Seiten als ZIP.'],
    faq: [
      ['PNG oder JPG für PDF-Seiten?', 'PNG für Text, Diagramme und Schaubilder. JPG für Seiten mit vielen Fotos, wenn eine kleinere Datei wichtiger ist.'],
      ['Kann ich nur eine Seite umwandeln?', 'Wandle das PDF um und behalte die Seite, die du brauchst, oder nutze vorher „PDF aufteilen“.'],
      ['Werden meine PDFs hochgeladen?', local],
    ],
  },
  'rotate-pdf': {
    slug: 'pdf-drehen', name: 'PDF drehen', blurb: 'Seitlich oder kopfüber liegende Seiten korrigieren',
    title: 'PDF drehen – PDF-Seiten kostenlos drehen und speichern, ohne Upload',
    desc: 'Drehe PDF-Seiten kostenlos und speichere das Ergebnis. Dreh alle Seiten oder nur einige. Privat, in deinem Browser, ohne Upload.',
    h1: 'PDF-Seiten drehen',
    lead: 'Korrigiere seitlich oder kopfüber liegende Scans und speichere das PDF richtig herum.',
    intro: 'Dreh alle Seiten oder gib Seitenzahlen wie „2, 5-6“ ein, um nur diese zu drehen.',
    steps: ['Wähle die Drehung und bei Bedarf die Seiten.', 'Wähle dein PDF aus oder zieh es in das Feld.', 'Lade das gedrehte PDF herunter.'],
    faq: [
      ['Wird die Drehung dauerhaft gespeichert?', 'Ja. Das heruntergeladene PDF öffnet sich in jedem PDF-Reader mit der neuen Ausrichtung.'],
      ['Kann ich nur eine Seite drehen?', 'Ja. Gib ihre Seitenzahl in das Feld „Seiten“ ein, bevor du die Datei auswählst.'],
      ['Werden meine PDFs hochgeladen?', local],
    ],
  },
  'compress-photo-for-email': {
    slug: 'fotos-fuer-e-mail-komprimieren', name: 'Fotos für E-Mail komprimieren', blurb: 'Fotos klein genug für den Anhang machen',
    title: 'Fotos für E-Mail komprimieren – Bilder kostenlos für den Anhang verkleinern',
    desc: 'Mach Handyfotos klein genug für den E-Mail-Versand. Verkleinert Bilder auf etwa 1600 px und einen Bruchteil der Dateigröße, damit mehr in eine Nachricht passen. Kostenlos, ohne Upload.',
    h1: 'Fotos für E-Mail komprimieren',
    lead: 'Verkleinere mehrere Handyfotos auf einmal, damit sie sich anhängen und verschicken lassen, ohne an Größenlimits zu stoßen.',
    intro: 'Gmail und Outlook begrenzen Anhänge auf etwa 20–25 MB pro E-Mail – das sind nur eine Handvoll Handyfotos. Mit 1600 px Breite sieht jedes Bild auf jedem Bildschirm noch scharf aus, und die Dateien schrumpfen meist auf 300–600 KB. So kannst du viel mehr Fotos in einer E-Mail verschicken.',
    steps: ['Wähle deine Fotos aus oder zieh sie in das Feld.', 'Lass die maximale Breite bei 1600 px und die Qualität bei 75 %.', 'Lade alle als ZIP oder einzeln herunter und häng sie an deine E-Mail an.'],
    faq: [
      ['Wie viele Fotos kann ich nach dem Komprimieren per E-Mail verschicken?', 'Bei etwa 400 KB pro Foto passen rund 40–50 Fotos unter ein E-Mail-Limit von 20 MB.'],
      ['Sehen die Fotos danach noch gut aus?', 'Ja. 1600 px Breite füllen einen Laptop-Bildschirm, und 75 % Qualität ist vom Original kaum zu unterscheiden.'],
      ['Kann ich stattdessen eine exakte Größe festlegen?', 'Ja. Gib eine Zahl bei „Zielgröße (KB)“ ein, zum Beispiel 500, dann bleibt jedes Foto darunter.'],
      ['Werden meine Fotos hochgeladen?', local],
    ],
  },
};

const gens = { img, audio, video, size, site };

// Returns the German page for an English tool entry
export function translateTool(t) {
  const out = t.gen ? gens[t.gen[0]](t, t.gen) : hand[t.slug];
  if (!out) throw new Error('Missing German text for ' + t.slug);
  for (const k of ['slug', 'name', 'blurb', 'title', 'desc', 'h1', 'lead', 'intro', 'steps', 'faq']) {
    if (!out[k] || (typeof out[k] === 'string' && out[k].includes('undefined'))) throw new Error(`German ${k} missing for ${t.slug}`);
  }
  out.slug = slugify(out.slug);
  return out;
}
