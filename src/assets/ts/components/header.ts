export const headerActions = () => {
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
    mobileMenuButton.addEventListener("click", (event) => {
      event.preventDefault;
      if (!mobileMenu || !body) return;

      if (buttonWrapper?.classList.contains("active")) {
        hideMobileMenu();
      } else {
        body.classList.add("no-scroll__mobile-menu");
        showMobileMenu();
      }
    });
  }

  //
  // navigation
  //

  function setNewPosition(target: Element, parent: Element) {
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
      setNewPosition(specialCirle, mobileMenuButton);
      specialCirle.classList.add("active");
    }

    setTimeout(() => {
      buttonWrapper?.classList.add("active");
      mobileMenuButton.classList.add("active");

      setTimeout(() => {
        buttonWrapper?.classList.add("fixed");
        mobileMenu.classList.add("active");
        mobileMenu.classList.add("visible");
      }, 500);
    }, 300);
  }
};
