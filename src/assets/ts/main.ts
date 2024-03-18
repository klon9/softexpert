import "../scss/main.scss";
import "./components/sliders";
import "./components/header";
import "./components/modal";
import {
  setFormsPreventDefault,
  inputsMask,
  validate,
  modalForm_1,
} from "./components/form";

document.addEventListener("DOMContentLoaded", () => {
  setFormsPreventDefault();
  inputsMask();
  validate();
  modalForm_1();
});
