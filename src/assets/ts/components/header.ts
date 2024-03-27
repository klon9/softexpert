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
  const body = document.querySelector("body");

  mobileMenuButton?.addEventListener("click", () => {
    if (!mobileMenu) return;
    body?.classList.toggle("no-scroll__mobile-menu");

    if (mobileMenuButton.parentElement?.classList.contains("active")) {
      mobileMenuButton.parentElement?.classList.toggle("fixed");
      mobileMenuButton.classList.toggle("active");
      mobileMenu.classList.toggle("active");

      setTimeout(() => {
        mobileMenuButton.parentElement?.classList.toggle("active");
      }, 500);
    } else {
      mobileMenuButton.parentElement?.classList.toggle("active");
      setTimeout(() => {
        mobileMenuButton.parentElement?.classList.toggle("fixed");

        mobileMenu.classList.toggle("active");
      }, 500);
      mobileMenuButton.classList.toggle("active");
    }
  });

  //
  // navigation
  //
  const links = document.querySelectorAll("[data-role='navigation-link'] a");
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const parent = link.parentElement;
      if (parent && parent.classList.contains("active")) {
        return;
      }

      // parent?.parentElement
      //   ?.querySelector("li.active")
      //   ?.classList.remove("active");

      // parent?.classList.add("active");
      const href = link.getAttribute("href");
      if (href) {
        const target = document.querySelector(href);
        if (target) {
          const headerHeight =
            document.getElementById("main-header")?.clientHeight || 0;

          window.scrollTo({
            top:
              target.getBoundingClientRect().top +
              window.scrollY -
              headerHeight,
            behavior: "smooth",
          });
        }
      }
    });
  });
});
