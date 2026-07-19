document.documentElement.classList.add("js");

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("is-open", !isOpen);
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuButton.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    }
  });
}

const reveals = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  reveals.forEach((item) => observer.observe(item));
} else {
  reveals.forEach((item) => item.classList.add("is-visible"));
}

const form = document.querySelector(".contact-form");
const note = document.querySelector(".form-note");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const message = [
      "Olá, gostaria de ajuda com contabilidade.",
      "",
      `Nome: ${data.get("nome") || ""}`,
      `WhatsApp: ${data.get("whatsapp") || ""}`,
      `Cidade: ${data.get("cidade") || ""}`,
      `Tipo de atendimento: ${data.get("tipo") || ""}`,
      `Mensagem: ${data.get("mensagem") || ""}`,
    ].join("\n");

    if (note) {
      note.textContent = "Abrindo o WhatsApp com sua mensagem preenchida.";
    }

    window.location.href = `https://wa.me/554185051967?text=${encodeURIComponent(message)}`;
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
