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

  const mobileMenuButton = document.querySelector(".button__mobile-menu");

  mobileMenuButton?.addEventListener("click", () => {
    const body = document.querySelector("body");
    const mobileMenu = document.querySelector(".main-header_nav-wrapper");
    const specialCirle = document.querySelector("#special-circle");

    if (!mobileMenu || !body) return;
    body.classList.toggle("no-scroll__mobile-menu");

    if (mobileMenuButton.parentElement?.classList.contains("active")) {
      mobileMenuButton.parentElement.classList.toggle("fixed");
      mobileMenuButton.classList.toggle("active");
      mobileMenu.classList.toggle("active");

      setTimeout(() => {
        mobileMenuButton.parentElement?.classList.toggle("active");

        setTimeout(() => {
          if (specialCirle) {
            specialCirle.classList.remove("active");
          }
        }, 300);
      }, 500);
    } else {
      if (specialCirle) {
        setNewPotition(specialCirle, mobileMenuButton);
        setTimeout(() => {
          specialCirle.classList.add("active");
        }, 300);
      }

      setTimeout(() => {
        mobileMenuButton.parentElement?.classList.toggle("active");
        setTimeout(() => {
          mobileMenuButton.parentElement?.classList.toggle("fixed");
          mobileMenu.classList.toggle("active");
        }, 500);
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

      const href = link.getAttribute("href");
      if (href) {
        const target = document.querySelector(href);
        if (target) {
          const headerHeight =0;

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

function setNewPotition(target: Element, parent: Element) {
  target.setAttribute(
    "style",
    `top:calc(${parent.getBoundingClientRect().y}px + ${
      parent.getBoundingClientRect().height
    }px /2); left:calc(${parent.getBoundingClientRect().x}px + ${
      parent.getBoundingClientRect().width
    }px / 2);`
  );
}
