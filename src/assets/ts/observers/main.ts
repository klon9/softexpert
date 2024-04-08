import { navObserver } from "./nav.observer";
import { leftSideObserver } from "./left-side.observer";
import { showSections } from "./show-sections.observer";

export const runObserv = () => {
  navObserver();
  leftSideObserver();
  if (window.innerWidth > 320) showSections();
};
