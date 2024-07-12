import IMask from "imask";

export const inputsMask = () => {
  const inputsTel = document.querySelectorAll("input[type='tel']");

  inputsTel.forEach((element: any) => {
    IMask(element, masks.tel);
  });
};

const masks = {
  tel: {
    mask: "+{7}(000)000-00-00",
  },
};

// export const validate = () => {
//   const inputs = document.querySelectorAll("input, textarea");

//   inputs.forEach((input: any) => {
//     input.addEventListener("blur", (event: Event) => {
//       event.preventDefault();

//       validateInput(input, patterns.get(input.type));
//     });

//     input.addEventListener("input", (event: Event) => {
//       event.preventDefault();
//       let testedValue = input.value;
//       setTimeout(() => {
//         if (testedValue == input.value) {
//           validateInput(input, patterns.get(input.type));
//         }
//       }, 600);
//     });
//   });
// };

// export const setFormsPreventDefault = () => {
//   const forms = document.querySelectorAll("form");
//   forms.forEach((form) => {
//     if (form.id == "myForm_3") {
//       addActionsOnInputs(".checkbox-item");
//     }

//     form.addEventListener("submit", (event) => {
//       event.preventDefault();
//       !testInputs(form);
//       // if (!testInputs(form)) {
//       //   actionForm(form, false);
//       // } else {
//       //   actionForm(form, true);
//       // }
//     });
//   });
// };

// function testInputs(form: HTMLFormElement) {
//   let formIsValid = true;
//   form.querySelectorAll("input, textarea").forEach((input: any) => {
//     if (!validateInput(input, patterns.get(input.type))) {
//       formIsValid = false;
//     }
//   });
//   return formIsValid;
// }

// function validateInput(input: HTMLFormElement, pattern: RegExp | undefined) {
//   if (input.type == "submit") return true;
//   const errorClass = "input__has-error";
//   const form = input.form;
//   let formId = undefined;
//   if (form) formId = input.form.id;

//   if (pattern && !pattern.test(input.value)) {
//     input.classList.add(errorClass);
//     return false;
//   }

//   if (formId) {
//     if (requiredInputs.get("forms")?.get(formId)?.includes(input.name)) {
//       if (input.name.includes("[]")) {
//         if (!form.querySelector(`input[name='${input["name"]}']:checked`)) {
//           input.classList.add(errorClass);
//           return false;
//         }
//       } else if ((input.type == "checkbox" && !input.checked) || !input.value) {
//         input.classList.add(errorClass);
//         return false;
//       }
//     }
//   }

//   input.classList.remove(errorClass);
//   return true;
// }

// function addActionsOnInputs(elements: string) {
//   const inputsWrappers = document.querySelectorAll(elements);
//   inputsWrappers.forEach((element) => {
//     element.addEventListener("click", (event) => {
//       event.preventDefault();
//       element
//         .querySelector("input[type='checkbox']")
//         ?.toggleAttribute("checked");
//     });
//   });
// }

// function restoreForm(form: HTMLFormElement | false) {
//   if (form)
//     Array.from(form.children).forEach((element) => {
//       element.remove();
//     });
// }

// restoreForm(false);

// function actionForm(form: any, isValid: boolean) {
//   if (!isValid) return false;
//   if (form.id == "myForm_3") {
//     actionOnMyForm_3(form);
//     const modal = document.querySelector(".modal.active");
//     if (modal) modal.classList.remove("active");
//   } else {
//     showMessage();
//   }
//   form.reset();
//   return true;
// }

// function actionOnMyForm_3(form: HTMLFormElement) {
//   const formData = Array.from(form.children);
//   form.classList.add("card");

//   const modalTitle = document.createElement("div");
//   modalTitle.classList.add("modal-form_title");
//   modalTitle.innerHTML = "Спасибо";

//   const modalSubtitle = document.createElement("div");
//   modalSubtitle.classList.add("modal-form_subtitle");
//   modalSubtitle.innerHTML = "Наш менеджер свяжется с Вами в течении 15 минут";

//   const myButton = document.createElement("button");
//   myButton.classList.add("button", "button__centered");
//   myButton.innerHTML = "Отправить еще раз";

//   restoreForm(form);

//   form.appendChild(modalTitle);
//   form.appendChild(modalSubtitle);
//   form.appendChild(myButton);

//   myButton.addEventListener("click", (event) => {
//     event.preventDefault();

//     if (!form) {
//       return;
//     }

//     restoreForm(form);

//     Array.from(formData).forEach((element) => {
//       form.appendChild(element);
//     });

//     form.classList.remove("card");
//   });
//   addActionsOnInputs(".checkbox-item");
// }

// function showMessage(
//   title: string = "Спасибо!",
//   subtitle: string = "Наш менеджер свяжется с Вами в течении 15 минут"
// ) {
//   if (title == "false") return;

//   const messager = document.querySelector("#messager");
//   if (!messager) return false;
//   messager.classList.add("active");

//   const messagerWrapper = messager.querySelector(".message-wrapper");

//   const closeBtn = messager.querySelector('[data-role="hideMessage"]');
//   if (closeBtn)
//     closeBtn.addEventListener("click", (event) => {
//       event.preventDefault();
//       hideMessage();
//     });

//   const messagerTitle = messager.querySelector(".message-title");
//   if (messagerTitle) messagerTitle.textContent = title;

//   const messagerText = messager.querySelector(".message-text");
//   if (messagerText) messagerText.textContent = subtitle;

//   setTimeout(() => {
//     messager.classList.add("visible");
//     if (messagerWrapper) messagerWrapper.classList.add("active");
//   }, 300);
// }

// function hideMessage() {
//   const messager = document.querySelector("#messager");
//   if (messager) {
//     const messagerWrapper = messager.querySelector(".message-wrapper");
//     messager.classList.remove("visible");
//     setTimeout(() => {
//       messager.classList.remove("active");
//     }, 300);

//     if (messagerWrapper) {
//       messagerWrapper.classList.remove("active");
//     }
//     return true;
//   }
//   return false;
// }

// const patterns = new Map([
//   ["tel", /^\+\d{1}\(\d{3}\)\d{3}-\d{2}-\d{2}$/],
//   ["email", /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/],
// ]);

// const requiredInputs = new Map([
//   [
//     "forms",
//     new Map([
//       ["myForm_1", ["person_name", "person_phone", "privacy-politics"]],
//       ["myForm_2", ["person_name", "person_phone", "privacy-politics"]],
//       ["myForm_3", ["person_email", "person_phone", "privacy-politics"]],
//       [
//         "cf7-3",
//         [
//           "services[]",
//           "person_name",
//           "person_phone",
//           "person_email",
//           "privacy-politics",
//         ],
//       ],
//       ["simple_cf7-1", ["person_name", "person_phone", "privacy-politics"]],
//       ["simple_cf7-2", ["person_name", "person_phone", "privacy-politics"]],
//     ]),
//   ],
// ]);
