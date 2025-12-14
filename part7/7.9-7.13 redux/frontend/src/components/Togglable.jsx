import { useState, useImperativeHandle, forwardRef } from "react";

const Togglable = forwardRef((props, ref) => {
  const [visibility, setVisibility] = useState(false);

  const stylesVisible = { display: visibility ? "" : "none" };
  const stylesInvisible = { display: visibility ? "none" : "" };

  const toggleVisibility = () => setVisibility(!visibility);

  useImperativeHandle(ref, () => {
    return { toggleVisibility };
  });

  return (
    <div>
      <div style={stylesInvisible}>
        <button onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div style={stylesVisible}>
        {props.children}
        <button onClick={toggleVisibility}>Cancel</button>
      </div>
    </div>
  );
});

export default Togglable;
