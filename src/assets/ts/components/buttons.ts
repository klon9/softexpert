export const buttonsAction = () => {
  showMore();
};

function showMore() {
  const gridWrapper = document.querySelector("#cases");
  if (!gridWrapper) return false;
  const grid = gridWrapper.querySelector(".grid__type-4");
  if (!grid) return false;

  const button = gridWrapper.querySelector("[data-action='show-overflow']");
  if (!button) return false;

  button.addEventListener("click", (event) => {
    event.preventDefault();
    toggleGridActivity(grid, button);
  });
}

function toggleGridActivity(grid: Element, button: Element) {
  if (button.classList.contains("in-progress")) return false;
  button.classList.add("in-progress");
  const buttonWrapper = button.parentElement;
  if (!buttonWrapper) return false;
  buttonWrapper.classList.toggle("active");
  grid.classList.toggle("active");

  setTimeout(() => {
    button.textContent = buttonWrapper.classList.contains("active")
      ? "Свернуть"
      : "Показать всё";
    button.classList.remove("in-progress");
  }, 300);
}
