export const navObserver = () => {
  listen();
};

export const buildNavItems = () => {
  createNavItems();
};

function setActiveMenuItem(item: Element | null) {
  document
    .querySelector("li.active[data-role='navigation-link']")
    ?.classList.remove("active");
  item?.classList.add("active");
}

function show(element: Element) {
  element.classList.add("active");
  return true;
}

function hide(element: Element) {
  element.classList.remove("active");
  return true;
}

function moveX(element: HTMLElement, range: number) {
  element.style.right = "unset";
  element.style.left = range + "px";
  return true;
}

function calcRange(element: HTMLElement) {
  return element.offsetLeft + element.offsetWidth / 2;
}

function createNavItems() {
  if (!document.querySelector("[data-role='navigation-link']")) {
    const navItems = document.querySelectorAll(".main-header_nav-item");

    navItems.forEach((navItem) => {
      const tar = navItem.getAttribute("href");
      if (!tar || tar == "") return false;

      const target = tar.replace("/", "");

      const section = document.querySelector(target);

      const parent = navItem.parentElement;
      if (!parent) return false;

      if (section) {
        parent.setAttribute("data-role", "navigation-link");
      }
    });
  }
  const closeButton = document.querySelector("[data-role='close-mobile-menu']");
  if (!closeButton) return;
  const header = document.querySelector("header#main-header");
  if (!header) return false;
  const eventClick = new MouseEvent("click");
  const links = document.querySelectorAll(
    ".main-header_nav-wrapper [data-role='navigation-link']>a"
  );

  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (header.classList.contains("active")) {
        closeButton.dispatchEvent(eventClick);
      }
    });
  });
}

function listen() {
  const sections =
    document.querySelectorAll("[data-role='navigation-target']") || null;
  const navPointer = document.querySelector(".nav-pointer") as HTMLElement;

  if (!sections || !navPointer) return false;

  document.addEventListener("scroll", () => {
    if (window.innerWidth < 1081) return false;
    // eslint-disable-next-line @typescript-eslint/no-array-constructor
    const visibleSections = new Array();

    sections.forEach((section) => {
      if (
        (section.getBoundingClientRect().y +
          section.getBoundingClientRect().height >
          window.outerHeight * 0.55 &&
          section.getBoundingClientRect().y < window.outerHeight * 0.45) ||
        (section.getBoundingClientRect().y +
          section.getBoundingClientRect().height <
          window.outerHeight &&
          section.getBoundingClientRect().y > 0 &&
          section.getBoundingClientRect().y < window.outerHeight + 1)
      ) {
        visibleSections.push(section);
      }
    });

    if (visibleSections.length > 0) {
      const id = visibleSections[0].id;
      const currentMenuItem = document.querySelector(
        `li[data-role='navigation-link']:has([href$='#${id}'])`
      ) as HTMLElement;

      if (currentMenuItem) {
        setActiveMenuItem(currentMenuItem);
        moveX(navPointer, calcRange(currentMenuItem));
        if (!navPointer.classList.contains("active")) {
          show(navPointer);
        }
      }
      return true;
    }

    hide(navPointer);
    setActiveMenuItem(null);
    return false;
  });
}
