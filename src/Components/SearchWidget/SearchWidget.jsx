import React, { useState } from "react";
import "./searchwidget.scss";
import Icon from "../FontAwesome/FontAwesome";
import WidgetRow from "../WidgetRow/WidgetRow";
import config from "../../config.json";
import toast from "react-hot-toast";

function SearchWidget() {
  const [results, setResults] = useState([]);
  const [text, setText] = useState("");

  const changeHandler = (str) => {
    setResults([]);
    setText(str);
  };

  const search = () => {
    if (text.length <= 2) {
      toast.error("Please type some more characters");
      return;
    }
    fetch(`${config.API_URL}search/${text}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.status) {
          throw new Error("");
        }
        return res.json();
      })
      .then((json) => {
        console.log(json);
        if (json.status) {
          const data = json.data.map((item) => {
            return {
              name: item.fname + " " + item.lname,
              image: item.image,
              to: `/profile/view/${item.userId}`,
            };
          });
          console.log(data);
          setResults(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="search-widget">
      <div className="search-inp-cont">
        <input
          type="text"
          className="search-inp"
          placeholder="Search people..."
          value={text}
          onChange={(e) => changeHandler(e.target.value)}
        />
        <button className="circular-icon-btn search-wid-btn" onClick={search}>
          <Icon type="solid" classes="fa-search" />
        </button>
      </div>
      {results.length > 0 ? (
        <div className="widget-data-list scrollbar1">
          {results.map((item, index) => {
            return (
              <WidgetRow
                key={index}
                obj={item}
                isBtnVisible={false}
                click={() => {}}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default SearchWidget;
