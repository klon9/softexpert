document.addEventListener("DOMContentLoaded", () => {
  //
  // toggle header position to fixed
  //
  window.addEventListener("scroll", () => {
    const header = document.getElementById("main-header");
    if (!header) return;

    const activeClass = "main-header_active";

    if (
      (window.scrollY > 0 && !header.classList.contains(activeClass)) ||
      (window.scrollY == 0 && header.classList.contains(activeClass))
    ) {
      header.classList.toggle(activeClass);
    }
  });

  //
  // show and hide mobile menu
  //
  const mobileMenu = document.querySelector(".main-header_nav-wrapper");
  const mobileMenuButton = document.querySelector(".button__mobile-menu");
  if (!mobileMenu || !mobileMenuButton) return;
  
  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
});
