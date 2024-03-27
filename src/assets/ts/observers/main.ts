import { navObserver } from "./nav.observer";
import { leftSideObserver } from "./left-side.observer";

export const runObserv = () => {
  navObserver();
  leftSideObserver();
};
