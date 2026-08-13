// Vis innholdet når logo-animasjonen er ferdig
// (med reserveløsning etter 5,5 sek i tilfelle videoen ikke laster)
const video = document.getElementById('logoVideo');
const vis = () => document.body.classList.add('synlig');

video.addEventListener('ended', vis);
setTimeout(vis, 5500);

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  vis();
}

// Enkel bekreftelse — koble til et nyhetsbrev-verktøy (f.eks. Mailchimp)
// for å faktisk lagre e-postadressene
function meldPa() {
  const felt = document.getElementById('epost');
  if (felt.value && felt.value.includes('@')) {
    document.querySelector('.varsle').style.display = 'none';
    document.getElementById('takk').style.display = 'block';
  } else {
    felt.focus();
    felt.style.borderColor = '#a05252';
  }
}

document.getElementById('varsleKnapp').addEventListener('click', meldPa);

// Send også med Enter-tasten
document.getElementById('epost').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') meldPa();
});
