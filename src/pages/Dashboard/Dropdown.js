import React, { useRef, useEffect } from 'react';
import { startTransition } from 'react';
import { ReactComponent as Arrow } from "../../assets/images/dropdown-arrow.svg";

export const DropDown = ({ dropDown, setDropDown, clickHandler }) => {
  const ref = useRef();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setDropDown((pre) => ({ ...pre, open: false }));
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);

  const handleClick = (value) => {
    startTransition(() => {
      setDropDown({ open: false, text: value });
    });
    clickHandler && clickHandler();
  };

  return (
    <div className="custom-type-select">
      <div
        className="select-type-dropdown"
        ref={ref}
        onClick={(event) => {
          event.stopPropagation();
          setDropDown((pre) => ({ ...pre, open: !dropDown.open }));
        }}
      >
        <span> {capitalizeFunc(dropDown.text)}</span>
        <Arrow
          style={{
            transform: dropDown.open ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </div>
      <ul
        style={{ display: dropDown.open ? "block" : "none" }}
        className="select-dropdown-ul"
      >
        <li
          onClick={() => handleClick("January")}
          className={dropDown.text === "January" ? "active" : ""}
        >
          January
        </li>
        <li
          onClick={() => handleClick("February")}
          className={dropDown.text === "February" ? "active" : ""}
        >
          February
        </li>
        <li
          onClick={() => handleClick("March")}
          className={dropDown.text === "March" ? "active" : ""}
        >
          March
        </li>
        <li
          onClick={() => handleClick("April")}
          className={dropDown.text === "April" ? "active" : ""}
        >
          April
        </li>
        <li
          onClick={() => handleClick("May")}
          className={dropDown.text === "May" ? "active" : ""}
        >
          May
        </li>
        <li
          onClick={() => handleClick("June")}
          className={dropDown.text === "June" ? "active" : ""}
        >
          June
        </li>
        <li
          onClick={() => handleClick("July")}
          className={dropDown.text === "July" ? "active" : ""}
        >
          July
        </li>
        <li
          onClick={() => handleClick("August")}
          className={dropDown.text === "August" ? "active" : ""}
        >
          August
        </li>
        <li
          onClick={() => handleClick("September")}
          className={dropDown.text === "September" ? "active" : ""}
        >
          September
        </li>
        <li
          onClick={() => handleClick("October")}
          className={dropDown.text === "October" ? "active" : ""}
        >
          October
        </li>
        <li
          onClick={() => handleClick("November")}
          className={dropDown.text === "November" ? "active" : ""}
        >
          November
        </li>
        <li
          onClick={() => handleClick("December")}
          className={dropDown.text === "December" ? "active" : ""}
        >
          December
        </li>
      </ul>
    </div>
  );
};

export const capitalizeFunc = (value) => {
  if (!value) {
    return null;
  }

  const arr = value?.split(" ");
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const capitalizeStr = arr.join(" ");

  return capitalizeStr;
};
