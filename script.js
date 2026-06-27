const year = new Date().getFullYear();
document.documentElement.style.setProperty("--current-year", `"${year}"`);

const links = [...document.querySelectorAll(".menu a")];
const sections = links
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const setActiveLink = () => {
  let current = sections[0];

  sections.forEach((section) => {
    if (section.getBoundingClientRect().top <= 120) {
      current = section;
    }
  });

  links.forEach((link) => {
    const isActive = current && link.getAttribute("href") === `#${current.id}`;
    link.toggleAttribute("aria-current", isActive);
  });
};

window.addEventListener("scroll", setActiveLink, { passive: true });
setActiveLink();

const prayerForm = document.querySelector("#oracao form");

if (prayerForm) {
  prayerForm.addEventListener("submit", (event) => {
    event.preventDefault();
  });

  const submitButton = prayerForm.querySelector("button");

  submitButton?.addEventListener("click", () => {
    const name = prayerForm.elements.nome?.value?.trim();
    const intention = prayerForm.elements.intencao?.value?.trim();

    if (!name || !intention) {
      alert("Preencha seu nome e sua intenção antes de enviar.");
      return;
    }

    alert("Pedido de oração registrado. A paróquia rezará por esta intenção.");
    prayerForm.reset();
  });
}
