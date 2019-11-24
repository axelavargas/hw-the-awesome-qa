import React, { useRef, useState, useEffect } from "react";

import TooltipPortal from "./TooltipPortal";

function Tooltip(props) {
  //ref to the DOM element that will trigger the tooltip
  const triggerRef = useRef(null);

  //state
  const [visible, setVisible] = useState(false);
  const [styleTooltip, setStyleTooltip] = useState(false);

  function showTooltip() {
    return setVisible(true);
  }

  function hideTooltip() {
    return setVisible(false);
  }

  function getPosition(triggerRef) {
    //get position and size of triggerRef
    const generalStyle = {
      position: "absolute",
      background: "gray"
    };
    const { left, right, top } = triggerRef.getBoundingClientRect();
    const newLeft = left + (right - 10);
    const newTop = top;
    setStyleTooltip({ left: newLeft, top: newTop, ...generalStyle });
  }

  useEffect(() => {
    if (triggerRef && triggerRef.current) {
      getPosition(triggerRef.current);
    }
  }, [triggerRef]);

  //display tooltip using the Tooltip Portal
  return (
    <span
      ref={triggerRef}
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {props.children}

      {/* only show when is visible */}
      {visible ? (
        <TooltipPortal>
          <div style={styleTooltip}>{props.text}</div>
        </TooltipPortal>
      ) : null}
    </span>
  );
}

export default Tooltip;
