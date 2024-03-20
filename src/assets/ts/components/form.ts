import IMask, { InputElement, InputMaskElement } from "imask";

export const inputsMask = () => {
  const inputsTel = document.querySelectorAll("input[type='tel']");

  inputsTel.forEach((element: any) => {
    const mask = IMask(element, masks.tel);
  });
};

export const validate = () => {
  const inputs = document.querySelectorAll("input, textarea");

  inputs.forEach((input: any) => {
    input.addEventListener("blur", (event: Event) => {
      event.preventDefault();

      validateInput(input, patterns.get(input.type));
    });

    input.addEventListener("input", (event: Event) => {
      event.preventDefault();
      let testedValue = input.value;
      setTimeout(() => {
        if (testedValue == input.value) {
          validateInput(input, patterns.get(input.type));
        }
      }, 600);
    });
  });
};

export const setFormsPreventDefault = () => {
  const forms = document.querySelectorAll("form");
  forms.forEach((form) => {
    if (form.id == "myForm_3") {
      addActionsOnInputs(".checkbox-item");
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!testInputs(form)) actionForm(form, false);
      else {
        actionForm(form, true);
      }
    });
  });
};

function testInputs(form: HTMLFormElement) {
  let formIsValid = true;
  form.querySelectorAll("input, textarea").forEach((input: any) => {
    if (!validateInput(input, patterns.get(input.type))) formIsValid = false;
  });
  return formIsValid;
}

function validateInput(input: InputElement, pattern: RegExp | undefined) {
  const errorClass = "input__has-error";

  if (pattern && !pattern.test(input.value)) {
    input.classList.add(errorClass);
    return false;
  }
  input.classList.remove(errorClass);
  return true;
}

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

function restoreForm(form: HTMLFormElement) {
  Array.from(form.children).forEach((element) => {
    element.remove();
  });
}

function actionForm(form: HTMLFormElement, isValid: boolean) {
  if (!isValid) return false;
  if (form.id == "myForm_3") {
    actionOnMyForm_3(form);
  } else {
    alert("Форма отправлена");
  }
  return true;
}

function actionOnMyForm_3(form: HTMLFormElement) {
  const formData = Array.from(form.children);
  form.classList.add("card");

  const modalTitle = document.createElement("div");
  modalTitle.classList.add("modal-form_title");
  modalTitle.innerHTML = "Спасибо";

  const modalSubtitle = document.createElement("div");
  modalSubtitle.classList.add("modal-form_subtitle");
  modalSubtitle.innerHTML = "Наш менеджер свяжется с Вами в течении 15 минут";

  const myButton = document.createElement("button");
  myButton.classList.add("button", "button__centered");
  myButton.innerHTML = "Отправить еще раз";

  restoreForm(form);

  form.appendChild(modalTitle);
  form.appendChild(modalSubtitle);
  form.appendChild(myButton);

  myButton.addEventListener("click", (event) => {
    event.preventDefault();

    if (!form) {
      return;
    }

    restoreForm(form);

    Array.from(formData).forEach((element) => {
      form.appendChild(element);
    });

    //form.reset();

    form.classList.remove("card");
  });
  addActionsOnInputs(".checkbox-item");
}

const patterns = new Map([
  ["tel", /^\+\d{1}\(\d{3}\)\d{3}-\d{2}-\d{2}$/],
  ["email", /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/],
]);

const masks = {
  tel: {
    mask: "+{7}(000)000-00-00",
  },
};
