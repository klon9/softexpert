import "../scss/main.scss";
// import "../scss-websfx/theme.scss";
import "./components/sliders";
import { headerActions } from "./components/header";
import "./components/modal";
import { preloader } from "./components/preloader";
import { getCookie, setCookie } from "./cookie";
import {
  inputsMask,
  //validate,
  //setFormsPreventDefault,
} from "./components/form";
import { buildNavItems } from "./observers/nav.observer";
import { runObserv } from "./observers/main";
import { buttonsAction } from "./components/buttons";

document.addEventListener("DOMContentLoaded", () => {
  if (!getCookie("is_visited_page")) {
    //setFormsPreventDefault();
    inputsMask();
    buildNavItems();
    //validate();

    setTimeout(() => {
      headerActions();
      runObserv();
      preloader();
      buttonsAction();
    }, 4500);
    setCookie("is_visited_page", "true");
  } else {
    preloader();
    inputsMask();
    buildNavItems();
    headerActions();
    runObserv();
    buttonsAction();
  }
});
