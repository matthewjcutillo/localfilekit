const root = document.getElementById('tool');
if (root) {
  import(`./${root.dataset.family}.js`).then((m) => m.init(root)).catch((e) => {
    root.textContent = 'This tool needs a modern browser (Chrome, Edge, Firefox or Safari).';
    console.error(e);
  });
}
