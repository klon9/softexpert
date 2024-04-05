export const preloader = () => {
  const path = document.getElementById("preloader");
  path?.setAttribute("style", "opacity:0%");
  setTimeout(() => {
    path?.remove();
  }, 700);
};
