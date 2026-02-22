// Mobile menu
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

function closeMenu() {
  navLinks.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
}

navToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close menu after clicking a link (mobile)
document.querySelectorAll(".nav__link").forEach((a) => {
  a.addEventListener("click", () => closeMenu());
});

// Close menu on ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Form validation + fake submit
const form = document.getElementById("leadForm");
const msg = document.getElementById("formMsg");

function setMsg(text, ok = true) {
  msg.textContent = text;
  msg.style.color = ok ? "var(--gold2)" : "#ffb4b4";
}

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const nome = String(data.get("nome") || "").trim();
  const telefone = String(data.get("telefone") || "").trim();
  const email = String(data.get("email") || "").trim();
  const assunto = String(data.get("assunto") || "").trim();
  const mensagem = String(data.get("mensagem") || "").trim();

  if (!nome || !telefone || !email || !assunto || !mensagem) {
    setMsg("Por favor, preencha todos os campos para enviarmos seu atendimento.", false);
    return;
  }

  // Basic email check
  if (!email.includes("@") || !email.includes(".")) {
    setMsg("Digite um e-mail válido para retornarmos seu contato.", false);
    return;
  }

  // Here you would send to your backend / service (e.g. Formspree, EmailJS, API)
  form.reset();
  setMsg("Recebemos sua mensagem! Em breve retornaremos com os próximos passos. ✅", true);
});
// Scroll Reveal com IntersectionObserver (leve e profissional)
document.addEventListener("DOMContentLoaded", () => {
  const els = document.querySelectorAll(".reveal");

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target); // anima 1x (padrão pro)
      }
    });
  }, { threshold: 0.12 });

  els.forEach(el => io.observe(el));
});
