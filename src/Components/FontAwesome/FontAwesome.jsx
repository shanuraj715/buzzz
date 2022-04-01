import React from "react";

function FontAwesome(props) {
  const getStyle = () => {
    let obj = {
      "--fa-primary-color": props.color1 ? props.color1 : "#353b48",
      "--fa-secondary-color": props.color2 ? props.color2 : "#f5f6fa",
      "--fa-secondary-opacity": props.color2_opacity
        ? props.color2_opacity
        : "1.0",
    };
    return obj;
  };

  return (
    <>
      {props.type ? (
        <>
          {props.type === "solid" ? (
            <i className={`fas ${props.classes}`}></i>
          ) : null}

          {props.type === "regular" ? (
            <i className={`far ${props.classes}`}></i>
          ) : null}

          {props.type === "light" ? (
            <i className={`fal ${props.classes}`}></i>
          ) : null}

          {props.type === "duotone" ? (
            <i className={`fad ${props.classes}`} style={getStyle()}></i>
          ) : null}

          {props.type === "brands" ? (
            <i className={`fab ${props.classes}`}></i>
          ) : null}
        </>
      ) : null}
    </>
  );
}

export default FontAwesome;
