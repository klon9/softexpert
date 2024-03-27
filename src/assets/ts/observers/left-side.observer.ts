export const leftSideObserver = () => {
  if (leftSideWrapper) {
    let leftSideChildren = leftSideWrapper.querySelector(
      ".main_left-side_item.not-active"
    );
    const timeToStart = 1000;
    const timePerStep = 75;
    const options = {
        threshold: 0.65,
    };
    const observerCollback = (entries: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("not-active");

          setTimeout(() => {
            showElements(leftSideChildren, timePerStep);
          }, timeToStart);
        }
      });
    };

    const observer = new IntersectionObserver(observerCollback, options);
    observer.observe(leftSideWrapper);
  }
};

const leftSideWrapper = document.querySelector("#left-side");

function showElements(leftSideChildren: any, time: number) {
  if (leftSideChildren) {
    setTimeout(() => {
      leftSideChildren.classList.remove("not-active");
      leftSideChildren = leftSideWrapper?.querySelector(
        ".main_left-side_item.not-active"
      );
      showElements(leftSideChildren, time);
    }, time);
  }
}
