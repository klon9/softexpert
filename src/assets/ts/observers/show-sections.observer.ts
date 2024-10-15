import { isString } from "imask/esm/core/utils";
import { TransformOptions } from "../interfaces";

export const showSections = () => {
  tryTransformElement(".main-promo_description", {});
  tryTransformElement(".main-promo_image", {
    funcName: "translateX",
    direction: -1,
  });

  tryTransformElement(".main_right-side_wrapper", {
    funcName: "none",
    direction: -1,
  });

  tryTransformElement(".main-slider_swiper", {});
  tryTransformElement(".section__statistics .main-block-decor", {});
  tryTransformElement(".section__statistics .main-section_content-wrapper", {
    funcName: "translateX",
    direction: -1,
  });
  tryTransformElement(".section__get-started h2", {});
  tryTransformElement(".section__get-started .grid__type-2", {
    funcName: "translateY",
    direction: -1,
  });
  tryTransformElement(".section__get-started #myForm_1", {
    funcName: "translateY",
    direction: -1,
  });
  tryTransformElement(".section__services h2", {});
  tryTransformElements(".section__services .grid_element", {});
  tryTransformElement(".section__services .text-block", {
    funcName: "translateX",
    direction: -1,
  });
  tryTransformElement(".section__cases h2", {
    funcName: "translateY",
  });

  tryTransformElements(
    ".section__cases .grid_element-wrapper:nth-child(2n + 1)",
    {}
  );
  tryTransformElements(".section-our-team h2", {});
  tryTransformElements(".section-our-team .grid_element", {});
  tryTransformElements(".section__cases .grid_element-wrapper:nth-child(2n)", {
    funcName: "translateX",
    direction: -1,
  });
  tryTransformElement("#myForm_2", {
    funcName: "translateY",
    direction: -1,
  });
  tryTransformElement(".section__our-services h2", {
    funcName: "translateY",
    direction: -1,
  });
  tryTransformElement(".section__our-services .main-section_description", {
    funcName: "translateY",
    direction: -1,
  });
  tryTransformElements(
    ".section__our-services .grid_element:nth-child(2n + 1)",
    {}
  );
  tryTransformElements(".section__our-services .grid_element:nth-child(2n)", {
    funcName: "translateX",
    direction: -1,
  });
  tryTransformElement(".section__stages h2", {
    funcName: "translateY",
  });
  tryTransformElements(
    ".section__stages .grid_element:not(:nth-child(n + 5))",
    {}
  );
  tryTransformElements(".section__stages .grid_element:nth-child(n+5)", {
    funcName: "translateX",
    direction: -1,
  });

  tryTransformElement(".section__reviews h2", {
    funcName: "translateY",
    direction: -1,
  });
  tryTransformElement(".section__reviews .slider-reviews", {
    funcName: "translateY",
    direction: -1,
  });
  tryTransformElement(".section__reviews .main-section_part-2", {
    funcName: "translateY",
    direction: -1,
  });
};

function tryTransformElements(selector: string, options: TransformOptions) {
  const elements = document.querySelectorAll(selector);
  if (elements.length) {
    for (let i = 0; i <= elements.length; i++) {
      tryTransformElement(elements[i], options);
    }
  }
}

function tryTransformElement(
  selector: string | Element,
  options: TransformOptions
) {
  if (!selector) return;

  let element;
  if (isString(selector)) {
    element = document.querySelector(selector);
  } else {
    element = selector;
  }
  if (element) transform(element, options);
}

function transform(
  element: Element,
  {
    funcName = "translateX",
    direction = 1,
    funcDuration = 1000,
    funcDelay = 300,
    minHeight = 200,
    range = -100,
    units = "px",
  }: TransformOptions
) {
  if (!element) return;

  let styleString = "opacity: 0;";
  if (funcName != "none") {
    styleString += `transform:${funcName}(${range * direction}${units});`;
  }

  element.setAttribute("style", styleString);

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
