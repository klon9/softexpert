export const navObserver = () => {
  let observer = new IntersectionObserver(observerCollback, options);
  let sections =
    document.querySelectorAll("[data-role='navigation-target']") || null;
  sections.forEach((section: any) => {
    observer.observe(section);
  });
};

const trash = (80 / document.body.clientHeight) * 100;
console.log(trash);

let options = {
  rootMargin: "80px",
  trashold: 0.5,
};
const navPointer = document.querySelector(".nav-pointer");
let activeMenuItem = getActiveMenuItem();

const observerCollback = (entries: any) => {
  entries.forEach((entry: any) => {
    const section = entry.target;
    activeMenuItem = getActiveMenuItem();
    if (entry.isIntersecting) {
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

function setActiveMenuItem(item: any) {
  document
    .querySelector("li.active[data-role='navigation-link']")
    ?.classList.remove("active");
  item?.classList.add("active");
}

function show(element: any) {
  element.classList.add("active");
  return true;
}

function hide(element: any) {
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
