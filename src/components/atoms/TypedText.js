import { forwardRef } from "react";

const TypedText = forwardRef((props, ref) => {
  return <h1 {...props} ref={ref} id="typedText"></h1>;
});

export default TypedText;