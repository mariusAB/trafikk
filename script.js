// One highlighted dot out of 2,000 = 0.05%. Keep the diagram decorative
// for assistive technology; its container provides the full description.
const grid = document.getElementById('dot-grid');
if (grid) {
  const dots = document.createDocumentFragment();
  for (let index = 0; index < 2000; index += 1) {
    const dot = document.createElement('i');
    dot.setAttribute('aria-hidden', 'true');
    if (index === 1027) dot.className = 'highlight';
    dots.appendChild(dot);
  }
  grid.appendChild(dots);
}
