import React from "react";

import "./BtnThemeStyle.css";
import MoonIcon from "../Icon/MoonIcon";
import SunIcon from "../Icon/SunIcon";

const BtnTheme = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  const ToggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={ToggleTheme}
          className="inp"
        />
        <MoonIcon className={"moon-icon"}/>
        <SunIcon className={"sun-icon"}/>
        <span className="toggle"></span>
      </label>

    </div>
  );
};

export default BtnTheme;
