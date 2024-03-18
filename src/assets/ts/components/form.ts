import IMask, { InputElement } from "imask";

const patterns = {
  tel: /^\+\d{1}\(\d{3}\)\d{3}-\d{2}-\d{2}$/,
  email: /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
};

const masks = {
  tel: {
    mask: "+{7}(000)000-00-00",
  },
};

export const inputsMask = () => {
  const inputsTel = document.querySelectorAll("input[type='tel']");

  inputsTel.forEach((element) => {
    const mask = IMask(element, masks.tel);
  });
};

export const validate = () => {
  const forms = document.querySelectorAll("form");
  let formsErrors = { forms: {}, messages: {} };

  // forms.forEach((form) => {
  //   const inputs = form.querySelectorAll("input");
  //   const textareas = form.querySelectorAll("textarea");
  //   let formErrors = { errors: {}, messages: {} };
  //   inputs.forEach((input) => {
  //     const inputType = input.type;
  //     let errors = [];

  //     input.addEventListener("blur", () => {
  //       if (!checkInput(input)) {
  //         //errors[] = input;
  //         errors.inputs[input.name].message =
  //           "Неккоректное значение, повторите снова";
  //       } else {
  //         delete errors.inputs[input.name];
  //       }
  //     });

  //     if !errors.inputs
  //     formErrors.inputs[input.name] = errors.inputs;
  //     formErrors.messages[input.name] = errors.messages;
  //   });
  // });
};

function checkInput(input: InputElement) {
  const errorClass = "input__has-error";

  if (!patterns[input.type] || patterns[input.type].test(input.value)) {
    input.classList.remove(errorClass);
    return true;
  }

  input.classList.add(errorClass);
  return false;
}

export const setFormsPreventDefault = () => {
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    form.onsubmit = (event) => {
      event.preventDefault();

      if (form.classList.contains("form__has-error")) {
        return;
      }
    };
  });
};

export const modalForm_1 = () => {
  let modalForm = document.querySelector(`#modalForm1`);

  if (modalForm) {
    const formData = Array.from(modalForm.children);
    modalForm.addEventListener(`submit`, (e) => {
      if (!modalForm) {
        return;
      }
      e.preventDefault();

      modalForm.classList.add(`card`);

      const modalTitle = document.createElement("div");
      modalTitle.classList.add("modal-form_title");
      modalTitle.innerHTML = "Спасибо";

      const modalSubtitle = document.createElement("div");
      modalSubtitle.classList.add("modal-form_subtitle");
      modalSubtitle.innerHTML =
        "Наш менеджер свяжется с Вами в течении 15 минут";

      const myButton = document.createElement("button");
      myButton.classList.add("button", "button__centered");
      myButton.innerHTML = "Отправить еще раз";

      restoreForm(modalForm);

      modalForm.appendChild(modalTitle);
      modalForm?.appendChild(modalSubtitle);
      modalForm?.appendChild(myButton);

      myButton.addEventListener("click", (event) => {
        event.preventDefault();

        if (!modalForm) {
          return;
        }

        restoreForm(modalForm);

        Array.from(formData).forEach((element) => {
          modalForm?.appendChild(element);
        });

        modalForm.classList.remove("card");
      });
    });
    addActionsOnInputs(".checkbox-item");
  }
};

function addActionsOnInputs(elements: string) {
  const inputsWrappers = document.querySelectorAll(elements);
  inputsWrappers.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.preventDefault();
      element
        .querySelector("input[type='checkbox']")
        ?.toggleAttribute("checked");
    });
  });
}

function restoreForm(form: HTMLElement) {
  Array.from(form.children).forEach((element) => {
    element.remove();
  });
}
