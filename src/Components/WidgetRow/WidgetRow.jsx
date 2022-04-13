import React from "react";
import "./widgetrow.scss";
import { Link } from "react-router-dom";

function WidgetCard(props) {
  const template = () => {
    return (
      <div className="widget-data-row">
        <div>
          <img src={props.obj?.image} alt="" />
        </div>
        <span>{props.obj?.name}</span>
        {props.isBtnVisible ? (
          <button onClick={() => props.click()} className="button2">
            <span>+friend</span>
          </button>
        ) : null}
      </div>
    );
  };
  return (
    <>
      {props.obj.to ? <Link to={props.obj.to}>{template()}</Link> : template()}
    </>
  );
}

export default WidgetCard;
