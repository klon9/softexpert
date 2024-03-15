document.addEventListener("DOMContentLoaded", () => {
  //
  // open and close modal
  //
  const modalButton = document.querySelectorAll("[data-role='modal-button']");
  const modalWindow = document.querySelector("[data-role='modal-window']");

  modalButton?.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      modalWindow?.classList.add("active");
      document.body.classList.add("no-scroll");
    });
  });

  const closeButton = document.querySelector("[data-role='modal-close']");
  closeButton?.addEventListener("click", (e) => {
    e.preventDefault();
    modalWindow?.classList.remove("active");
    document.body.classList.remove("no-scroll");
  });

  const inputsWrappers = document.querySelectorAll(".checkbox-item");
  inputsWrappers.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      element
        .querySelector('input[type="checkbox"]')
        ?.toggleAttribute("checked");
    });
  });
  //
  // inputs masks
  //
  // ...
});
