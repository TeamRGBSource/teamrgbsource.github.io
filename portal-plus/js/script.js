const background = document.getElementById('background');

document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 10;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;

  background.style.transform = `translate(calc(-10% + ${x}px), calc(-5% + ${y}px))`;
});

