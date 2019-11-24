import ReactDOM from "react-dom";

function TooltipPortal(props) {
  return ReactDOM.createPortal(props.children, document.body);
}

export default TooltipPortal;
