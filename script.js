const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuButton.textContent = isOpen ? "✕" : "☰";
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

const contactForm = document.querySelector("#contact-form");
const feedback = document.querySelector("#form-feedback");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const subject = document.querySelector("#subject").value.trim();
  const message = document.querySelector("#message").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  feedback.className = "form-feedback";

  if (!name || !email || !subject || !message) {
    feedback.textContent = "Please complete every field before submitting.";
    feedback.classList.add("error");
    return;
  }

  if (!emailPattern.test(email)) {
    feedback.textContent = "Please enter a valid email address.";
    feedback.classList.add("error");
    return;
  }

  feedback.textContent = `Thank you, ${name}! Your form passed validation. This demo does not send messages.`;
  feedback.classList.add("success");
  contactForm.reset();
});
