import React from 'react';


function Circular(props) {
  return (
    <>
      <div className="circular-div">
          <img src={props.img} alt="" />
          <span>{props.text}</span>
        </div>
    </>
  );
}

export default Circular;
