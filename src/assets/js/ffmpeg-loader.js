// Lazy-loads ffmpeg.wasm (about 30 MB, cached by the browser after the first use).
let ready;
export function getFFmpeg(onLog) {
  ready ||= (async () => {
    const { FFmpeg } = await import('/vendor/ffmpeg/index.js');
    const ff = new FFmpeg();
    const base = new URL('/vendor/ffmpeg-core/', location.href).href;
    await ff.load({ coreURL: base + 'ffmpeg-core.js', wasmURL: base + 'ffmpeg-core.wasm' });
    return ff;
  })();
  ready.catch(() => (ready = null));
  return ready.then((ff) => { ff._onLog = onLog; return ff; });
}

// Runs one ffmpeg job on a File and returns a Blob.
export async function runFFmpeg(file, args, outName, mime, onProgress) {
  const ff = await getFFmpeg();
  const inName = 'in.' + ((file.name.split('.').pop() || 'bin').toLowerCase().replace(/[^a-z0-9]/g, '') || 'bin');
  const prog = ({ progress }) => onProgress && onProgress(Math.min(1, Math.max(0, progress)));
  ff.on('progress', prog);
  try {
    await ff.writeFile(inName, new Uint8Array(await file.arrayBuffer()));
    const code = await ff.exec(['-i', inName, ...args, outName]);
    if (code !== 0) throw new Error('Conversion failed for this file');
    const data = await ff.readFile(outName);
    return new Blob([data.buffer], { type: mime });
  } finally {
    ff.off('progress', prog);
    try { await ff.deleteFile(inName); } catch {}
    try { await ff.deleteFile(outName); } catch {}
  }
}
