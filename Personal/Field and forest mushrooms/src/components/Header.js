import React from "react";
import MultiLingualContent from "../languages/MultiLingualContent";
import headerBg from "../assets/images/main.jpg";

const Header = () => {
  return (
    <header id="header">
      <img src={headerBg} class="bg-img" alt="mushroom" />
      <h1>
        <MultiLingualContent contentID="header1" />
      </h1>
      <h1 className="header-logo">
        <MultiLingualContent contentID="logo" />
      </h1>
    </header>
  );
};

export default Header;
