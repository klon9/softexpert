export interface TransformOptions {
  funcName?: "translateX" | "translateY" | "none";
  direction?: 1 | -1;
  funcDuration?: number;
  funcDelay?: number;
  minHeight?: number;
  range?: number;
  units?: "px" | "%" | "vh" | "vw" | "dvh" | "dvw";
}
