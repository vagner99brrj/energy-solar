const toggle = document.getElementById("navToggle");
const menu = document.getElementById("mobileMenu");
toggle.addEventListener("click", () => menu.classList.toggle("open"));
menu
  .querySelectorAll("a")
  .forEach((a) =>
    a.addEventListener("click", () => menu.classList.remove("open")),
  );

const nav = document.getElementById("nav");
window.addEventListener("scroll", () =>
  nav.classList.toggle("scrolled", window.scrollY > 60),
);

const sections = document.querySelectorAll("section[id], header[id]");
const steps = document.querySelectorAll(".tl-step");
const ids = ["home", "problema", "publico", "personas", "solucao", "impacto"];
window.addEventListener("scroll", () => {
  let current = 0;
  sections.forEach((s, i) => {
    if (window.scrollY >= s.offsetTop - 200) current = i;
  });
  steps.forEach((s, i) => s.classList.toggle("active", i === current));
});
