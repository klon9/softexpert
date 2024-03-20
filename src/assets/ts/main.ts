import "../scss/main.scss";
import "./components/sliders";
import "./components/header";
import "./components/modal";
import {
  inputsMask,
  validate,
  setFormsPreventDefault,
} from "./components/form";

document.addEventListener("DOMContentLoaded", () => {
  setFormsPreventDefault();
  inputsMask();
  validate();
});
