import React from "react";
import "./widgetrow.scss";

function WidgetCard(props) {
  return (
    <>
      <div className="widget-data-row">
        <div>
          <img src={props.obj?.image} alt="" />
        </div>
        <span>{props.obj?.name}</span>
        {props.isBtnVisible ? <button onClick={() => props.click()} className='button2'><span>+friend</span></button> : null}
      </div>
    </>
  );
}

export default WidgetCard;
