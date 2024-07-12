import { isString } from "imask/esm/core/utils";

export const showSections = () => {
  tryTransformElement(".main-promo_description");
  tryTransformElement(".main-promo_image", "slickX", -1);
  tryTransformElement(".main_right-side_wrapper", "none", -1);

  tryTransformElement(".main-slider_swiper");
  tryTransformElement(".section__statistics .main-block-decor");
  tryTransformElement(
    ".section__statistics .main-section_content-wrapper",
    "slickX",
    -1
  );
  tryTransformElement(".section__get-started h2");
  tryTransformElement(".section__get-started .grid__type-2", "slickY", -1);
  tryTransformElement(".section__get-started #myForm_1", "slickY", -1);
  tryTransformElement(".section__services h2");
  tryTransformElements(".section__services .grid_element");
  tryTransformElement(".section__services .text-block", "slickX", -1);
  tryTransformElement(".section__cases h2", "slickY");
  tryTransformElements(".section__cases .grid_element-wrapper:nth-child(2n + 1)");
  tryTransformElements(".section-our-team h2");
  tryTransformElements(".section-our-team .grid_element");
  tryTransformElements(
    ".section__cases .grid_element-wrapper:nth-child(2n)",
    "slickX",
    -1
  );
  tryTransformElement("#myForm_2", "slickY", -1);
  tryTransformElement(".section__our-services h2", "slickY", -1);
  tryTransformElement(
    ".section__our-services .main-section_description",
    "slickY",
    -1
  );
  tryTransformElements(
    ".section__our-services .grid_element:nth-child(2n + 1)"
  );
  tryTransformElements(
    ".section__our-services .grid_element:nth-child(2n)",
    "slickX",
    -1
  );
  tryTransformElement(".section__stages h2", "slickY");
  tryTransformElements(".section__stages .grid_element:not(:nth-child(n + 5))");
  tryTransformElements(
    ".section__stages .grid_element:nth-child(n+5)",
    "slickX",
    -1
  );

  tryTransformElement(".section__reviews h2", "slickY", -1);
  tryTransformElement(".section__reviews .slider-reviews", "slickY", -1);
  tryTransformElement(".section__reviews .main-section_part-2", "slickY", -1);
};

function tryTransformElements(selector: string, ...options: any) {
  const elements = document.querySelectorAll(selector);
  if (elements.length) {
    for (let i = 0; i <= elements.length; i++) {
      tryTransformElement(elements[i], ...options);
    }
  }
}

function tryTransformElement(selector: string | Element, ...options: any) {
  if (!selector) return;

  let element;
  if (isString(selector)) {
    element = document.querySelector(selector);
  } else {
    element = selector;
  }
  if (element) transform(element, ...options);
}

function transform(
  element: Element,
  funcName = "slickX",
  direction = 1,
  funcDuration = 1000,
  funcDelay = 300,
  minHeight = 200,
  range = -100,
  units = "px"
) {
  if (!element) return;

  const types = new Map([
    ["slickX", "translateX"],
    ["slickY", "translateY"],
    ["none", "none"],
  ]);

  element.setAttribute(
    "style",
    `transform:${types.get(funcName)}(${range * direction}${units});
      opacity: 0;`
  );

  const elementObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.setAttribute(
              "style",
              ` transform: none; transition:${funcDuration}ms;`
            );

            setTimeout(() => {
              entry.target.removeAttribute("style");
            }, funcDuration);
          }, funcDelay);
        }
      });
    },
    {
      threshold: minHeight / document.body.clientHeight,
    }
  );

  elementObserver.observe(element);
}
