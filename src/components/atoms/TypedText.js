import { forwardRef } from "react";

const TypedText = forwardRef(({ text }, ref) => (
  <h1 ref={ref} id="typedText">
    {text}
  </h1>
));

// Asigna un displayName
TypedText.displayName = "TypedText";

export default TypedText;
