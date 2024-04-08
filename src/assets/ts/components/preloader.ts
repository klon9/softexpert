export const preloader = () => {
  const path = document.getElementById("preloader");
  path?.setAttribute("style", "opacity:0%");
  const mbody = document.querySelector("body");
  mbody?.classList.remove("no-scroll__modal");
  setTimeout(() => {
    path?.remove();
  }, 700);
};
