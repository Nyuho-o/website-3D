function setFooterYear() {
  const yearEl = document.getElementById("year");
  if (!yearEl) return;

  yearEl.textContent = String(new Date().getFullYear());
}

function markActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("#site-nav a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });
}

function setupMobileNavToggle() {
  const toggleBtn = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");

  if (!toggleBtn || !nav) return;

  toggleBtn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggleBtn.setAttribute("aria-expanded", String(isOpen));
  });
}

setFooterYear();
markActiveNavLink();
setupMobileNavToggle();
