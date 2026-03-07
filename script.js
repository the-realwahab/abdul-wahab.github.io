// Subtle parallax on ambient blobs following mouse movement
document.addEventListener('mousemove', (e) => {
  const cx = window.innerWidth  / 2;
  const cy = window.innerHeight / 2;
  const dx = (e.clientX - cx) / cx;
  const dy = (e.clientY - cy) / cy;

  const blob1 = document.querySelector('.blob-1');
  const blob2 = document.querySelector('.blob-2');

  if (blob1) blob1.style.transform = `translate(${dx * 18}px, ${dy * 18}px)`;
  if (blob2) blob2.style.transform = `translate(${-dx * 14}px, ${-dy * 14}px)`;
});