// Toner inn innholdet trinnvis når siden er lastet
window.addEventListener('load', () => {
  requestAnimationFrame(() => document.body.classList.add('lastet'));
});

// Reserveløsning hvis load-hendelsen drøyer (f.eks. treg fontlasting)
setTimeout(() => document.body.classList.add('lastet'), 1200);
