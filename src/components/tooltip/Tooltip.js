import React, { useRef, useState } from "react";

import TooltipPortal from "./TooltipPortal";

function Tooltip(props) {
  //ref to the DOM element that will trigger the tooltip
  const triggerRef = useRef(null);

  //state
  const [visible, setVisible] = useState(false);
  const [styleTooltip, setStyleTooltip] = useState(false);

  function showTooltip() {
    if (triggerRef && triggerRef.current) {
      getPosition(triggerRef.current);
    }
    setVisible(true);
  }

  function hideTooltip() {
    return setVisible(false);
  }

  function getPosition(triggerRef) {
    //get position and size of triggerRef
    const generalStyle = {
      position: "absolute",
      background: "gray",
      width: "80%"
    };

    //get scroll position
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;

    var vHeight = window.innerHeight;
    var bodyHeight = document.body.clientHeight;

    const { left, top, height, bottom } = triggerRef.getBoundingClientRect();

    // by default display below the element
    let tooltipTop = top + height + scrollY;
    let tooltipBottom = null;

    // if there is no room for the tooltip to show below
    // DISCLAIMER: This is not a scalable solution
    // to really find if the tooltip fits we must first render it
    // get its height and check it here instead of the hard-coded value
    if (vHeight - bottom < 40) {
      tooltipTop = null;
      tooltipBottom = bodyHeight - (top + scrollY);
    }

    const newLeft = scrollX + left;
    setStyleTooltip({
      left: newLeft,
      top: tooltipTop,
      bottom: tooltipBottom,
      ...generalStyle
    });
  }

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
