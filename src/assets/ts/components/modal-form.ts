document.addEventListener("DOMContentLoaded", () => {
  //
  // open and close modal
  //
  const modalButton = document.querySelector("[data-role='modal-button']");
  const modalWindow = document.querySelector("[data-role='modal-window']");

  modalButton?.addEventListener("click", () => {
    modalWindow?.classList.toggle("active");
  });

  //
  // inputs masks
  //
  // ...
});
