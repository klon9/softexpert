//
// toggle header position to fixed
//
const header = document.getElementById("main-header");
const activeClass = "main-header_active";
if (header) {
  checkScroll(header, activeClass);
  window.addEventListener("scroll", (event) => {
    event.preventDefault();
    checkScroll(header, activeClass);
  });
}

//
// show and hide mobile menu
//

const mobileMenuButton = document.querySelector(".button__mobile-menu");
const body = document.querySelector("body");
const mobileMenu = document.querySelector(".main-header_nav-wrapper");
const specialCirle = document.querySelector("#special-circle");
const buttonWrapper = mobileMenuButton?.parentElement;

if (mobileMenuButton) {
  mobileMenuButton.addEventListener("click", () => {
    if (!mobileMenu || !body) return;

    if (buttonWrapper?.classList.contains("active")) {
      hideMobileMenu();
    } else {
      showMobileMenu();
    }
  });
}

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
        const headerHeight = 80;
        if (mobileMenu?.classList.contains("active")) {
          hideMobileMenu();
          setTimeout(() => {
            window.scrollTo({
              top:
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight,
              behavior: "smooth",
            });
          }, 800);
        } else {
          window.scrollTo({
            top:
              target.getBoundingClientRect().top +
              window.scrollY -
              headerHeight,
            behavior: "smooth",
          });
        }
      }
    }
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

function checkScroll(header: Element, activeClass: string) {
  if (
    (window.scrollY > 0 && !header.classList.contains(activeClass)) ||
    (window.scrollY == 0 && header.classList.contains(activeClass))
  ) {
    header.classList.toggle(activeClass);
  }

  if (
    document.body.classList.contains("no-scroll__mobile") ||
    document.body.classList.contains("no-scroll__modal")
  ) {
    return;
  }
}

function hideMobileMenu() {
  buttonWrapper?.classList.remove("fixed");
  mobileMenuButton?.classList.remove("active");
  mobileMenu?.classList.remove("visible");

  setTimeout(() => {
    mobileMenu?.classList.remove("active");
    buttonWrapper?.classList.remove("active");

    setTimeout(() => {
      if (specialCirle) {
        specialCirle.classList.remove("active");
      }
      body?.classList.remove("no-scroll__mobile-menu");
    }, 300);
  }, 300);
}

function showMobileMenu() {
  if (!mobileMenuButton || !body || !mobileMenu) return;

  if (specialCirle) {
    setNewPotition(specialCirle, mobileMenuButton);
    specialCirle.classList.add("active");
  }

  setTimeout(() => {
    buttonWrapper?.classList.add("active");
    mobileMenuButton.classList.add("active");

    setTimeout(() => {
      buttonWrapper?.classList.add("fixed");
      mobileMenu.classList.add("active");
      mobileMenu.classList.add("visible");
      body.classList.add("no-scroll__mobile-menu");
    }, 500);
  }, 300);
}
