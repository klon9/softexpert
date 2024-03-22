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
      if (!testInputs(form)) {
        actionForm(form, false);
      } else {
        actionForm(form, true);
      }
    });
  });
};

function testInputs(form: HTMLFormElement) {
  let formIsValid = true;
  form.querySelectorAll("input, textarea").forEach((input: any) => {
    if (!validateInput(input, patterns.get(input.type))) {
      formIsValid = false;
    }
  });
  return formIsValid;
}

function validateInput(input: InputElement | any, pattern: RegExp | undefined) {
  if (input.type == "submit") return true;
  const errorClass = "input__has-error";
  const formId = input.form?.id;

  if (pattern && !pattern.test(input.value)) {
    input.classList.add(errorClass);
    return false;
  }

  if (formId) {
    if (requiredInputs.get("forms")?.get(formId)?.includes(input.name)) {
      if ((input.type == "checkbox" && !input.checked) || !input.value) {
        input.classList.add(errorClass);
        return false;
      }
    }
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
    showMessage();
  }
  form.reset();
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

    form.classList.remove("card");
  });
  addActionsOnInputs(".checkbox-item");
}

function showMessage(
  title: string = "Спасибо!",
  subtitle: string = "Наш менеджер свяжется с Вами в течении 15 минут"
) {
  const message = document.createElement("div");
  message.classList.add("message");

  const messageWrapper = document.createElement("div");
  messageWrapper.classList.add("message-wrapper");
  messageWrapper.classList.add("card-element");

  const closeBtn = document.createElement("div");
  closeBtn.classList.add("button");
  closeBtn.classList.add("button__close");
  closeBtn.setAttribute("data-role", "hideMessage");
  closeBtn.onclick = (event) => {
    event.preventDefault();
    hideMessage();
  };

  const messageTitle = document.createElement("div");
  messageTitle.classList.add("message-title");
  messageTitle.textContent = title;

  const messageText = document.createElement("div");
  messageText.classList.add("message-text");
  messageText.textContent = subtitle;

  message.append(messageWrapper);
  messageWrapper.append(messageTitle, messageText, closeBtn);

  document.querySelector("body")?.appendChild(message);

  setTimeout(() => {
    message.classList.add("active");
    messageWrapper.classList.add("active");
  }, 300);
}

function hideMessage() {
  const message = document.querySelector(".message");
  if (message) {
    const messageWrapper = message.querySelector(".message-wrapper");
    message.classList.remove("active");
    if (messageWrapper) {
      messageWrapper.classList.remove("active");

      setTimeout(() => {
        message.remove();
      }, 300);
      return true;
    }
    message.remove();
  }

  return false;
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

const requiredInputs = new Map([
  [
    "forms",
    new Map([
      ["myForm_1", ["name", "phone", "privacy-politics"]],
      ["myForm_2", ["name", "phone", "privacy-politics"]],
      ["myForm_3", ["email", "phone", "privacy-politics"]],
    ]),
  ],
]);
