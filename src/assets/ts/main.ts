import "../scss/main.scss";
import "./components/sliders";
import "./components/header";
import "./components/modal";
import { preloader } from "./components/preloader";
import {
  inputsMask,
  validate,
  setFormsPreventDefault,
} from "./components/form";

import { runObserv } from "./observers/main";

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    preloader();
    setFormsPreventDefault();
    inputsMask();
    validate();
  
    runObserv();
  }, 4500);
});
