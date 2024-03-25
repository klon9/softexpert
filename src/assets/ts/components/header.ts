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
    mobileMenuButton.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  //
  // navigation
  //
  const links = document.querySelectorAll("[data-role='navigation-link']");
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

  let observer = new IntersectionObserver(observerCollback, options);
  let sections =
    document.querySelectorAll("[data-role='navigation-target']") || null;
  sections.forEach((section) => {
    observer.observe(section);
  });
});

let options = {};

const observerCollback = (entries: any) => {
  entries.forEach((entry: any) => {
    const section = entry.target;
    let scene = 0;
    activeMenuItem = getActiveMenuItem();
    if (entry.isIntersecting) {
      const currentMenuItem = document.querySelector(
        `li:has([data-role='navigation-link'][href='#${section.id}'])`
      );

      if (currentMenuItem) {
        if (activeMenuItem) {
          if (
            (currentMenuItem.getAttribute("data-order") || 0) >
            (activeMenuItem.getAttribute("data-order") || 0)
          ) {
            scene = 1;
          } else {
            scene = 2;
          }
          hideActiveMenuItem(activeMenuItem, scene);
        }
        showActiveMenuItem(currentMenuItem, scene);
      } else if (activeMenuItem) {
        hideActiveMenuItem(activeMenuItem, 0);
      }
    }
  });
};

let activeMenuItem = getActiveMenuItem();

function getActiveMenuItem() {
  return document.querySelector(
    "li.active__new:has([data-role='navigation-link'])"
  );
}

function showActiveMenuItem(link: Element, scene: number) {
  if (scene == 1) {
    link.classList.value = "active__scene-1";
  } else if (scene == 2) {
    link.classList.value = "active__scene-2";
  } else {
    link.classList.value = "active";
  }
  link.classList.add("active__new");
}

function hideActiveMenuItem(link: Element, scene: number) {
  if (scene == 2) {
    link.classList.value = "unactive__scene-1";
    return;
  } else if (scene == 1) {
    link.classList.value = "unactive__scene-2";
    return;
  }
  link.classList.value = "unactive";
}

function nextActiveMenuItem(link: Element) {
  link.classList.remove(
    "active__new",
    "active",
    "active__scene-1",
    "active__scene-2"
  );
  link.nextElementSibling?.classList.add("active__new");
}

function prevActiveMenuItem(link: Element) {
  link.classList.remove("active");
  link.previousElementSibling?.classList.add("active");
}
