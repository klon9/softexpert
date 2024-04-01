export const navObserver = () => {
  let observer = new IntersectionObserver(observerCollback, {
    threshold: [0.15, 0.4, 0.6, 0.85],
  });
  let sections =
    document.querySelectorAll("[data-role='navigation-target']") || null;
  sections.forEach((section: any) => {
    observer.observe(section);
  });
};

const navPointer = document.querySelector(".nav-pointer");
let activeMenuItem = getActiveMenuItem();

const observerCollback = (entries: any) => {
  entries.forEach((entry: any) => {
    const section = entry.target;
    console.log(section);
    if (!navPointer) return;
    if (entry.isIntersecting) {
      console.log(section.id);
      console.log(section.getBoundingClientRect());
      activeMenuItem = getActiveMenuItem();
      const currentMenuItem = document.querySelector(
        `li[data-role='navigation-link']:has([href='#${section.id}'])`
      );

      if (currentMenuItem) {
        if (activeMenuItem) {
          moveX(navPointer, calcRange(currentMenuItem));
        } else {
          moveX(navPointer, calcRange(currentMenuItem));
          show(navPointer);
        }
        setActiveMenuItem(currentMenuItem);
      } else if (activeMenuItem) {
        hide(navPointer);
        setActiveMenuItem(null);
      }
    }
  });
};

function getActiveMenuItem() {
  return document.querySelector("li.active[data-role='navigation-link']");
}

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

function moveX(element: any, range: number) {
  element.style.right = "unset";
  element.style.left = range + "px";
  return true;
}

function calcRange(element: any): number {
  return element.offsetLeft + element.offsetWidth / 2;
}
