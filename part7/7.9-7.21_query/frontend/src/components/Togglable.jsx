import { useState, useImperativeHandle, forwardRef } from "react";
import { Button } from "react-bootstrap";

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
        <Button variant="light" onClick={toggleVisibility}>{props.buttonLabel}</Button>
      </div>
      <div style={stylesVisible}>
        {props.children}
        <Button variant="secondary" onClick={toggleVisibility}>Cancel</Button>
      </div>
    </div>
  );
});

export default Togglable;
