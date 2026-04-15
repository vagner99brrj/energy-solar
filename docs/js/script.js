const toggle = document.getElementById('navToggle');
const menu = document.getElementById('mobileMenu');
toggle.addEventListener('click', () => menu.classList.toggle('open'));
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 60));

const sectionIds = ['home', 'resumo', 'problema', 'publico', 'personas', 'solucao', 'impacto'];
const steps = document.querySelectorAll('.tl-step');
window.addEventListener('scroll', () => {
  let current = 0;
  sectionIds.forEach((id, i) => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 200) current = i;
  });
  steps.forEach((s, i) => s.classList.toggle('active', i === current));
});
