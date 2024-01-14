import React from "react";

const BurgerMenu = ({ open, setOpen }) => {
  return (
    open && (
      <div className="menu-items">
        <li>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#gallery" onClick={() => setOpen(false)}>
            Gallery
          </a>
        </li>
        <li>
          <a href="#folklore" onClick={() => setOpen(false)}>
            Reviews
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>
        </li>
        <li>
          <a href="#information" onClick={() => setOpen(false)}>
            Information
          </a>
        </li>
      </div>
    )
  );
};

export default BurgerMenu;
