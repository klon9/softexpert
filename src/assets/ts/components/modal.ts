document.addEventListener("DOMContentLoaded", () => {
  //
  // open and close modal
  //
  const modalButtons = document.querySelectorAll("[data-role='modal-button']");
  const modalWindow = document.querySelector("[data-role='modal-window']");

  modalButtons?.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      modalWindow?.classList.add("active");
      document.body.classList.add("no-scroll__modal");
    });
  });

  const closeButton = document.querySelector("[data-role='modal-close']");
  closeButton?.addEventListener("click", (event) => {
    event.preventDefault();
    modalWindow?.classList.remove("active");
    document.body.classList.remove("no-scroll__modal");
  });
});
