import React from "react";
import Icon from '../FontAwesome/FontAwesome'
import WidgetRow from '../WidgetRow/WidgetRow'
import './widgetcard.scss'

function WidgetCard(props) {
  return (
    <div className="widget">
      <div className="widget-head">
        <span>{props.title}</span>
        <button className="circular-icon-btn">
          <Icon type="solid" classes="fa-search" />
        </button>
      </div>

      <div className="widget-data-list scrollbar1">
        {props.data?.map((item, index) => (
          <WidgetRow obj={item} isBtnVisible={props.isBtnVisible} click={props.click} />
        ))}
      </div>
    </div>
  );
}

export default WidgetCard;
