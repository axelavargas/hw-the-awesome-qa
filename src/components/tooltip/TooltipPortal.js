import { useEffect } from "react";
import ReactDOM from "react-dom";

function TooltipPortal(props) {
  //element that will contain the tooltip
  const el = document.createElement("div");

  useEffect(() => {
    el.className = "tooltip-body-container";
    //Can be optimized checking if hidden/show instead of append/remove
    //only adding the element if is not there already
    document.body.appendChild(el);
    //Function to clean the element
    return () => {
      document.body.removeChild(el);
    };
  }, [el]);

  return ReactDOM.createPortal(props.children, el);
}

export default TooltipPortal;
