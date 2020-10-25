import React from "react";
import Seo from "../components/Seo";

import "./menu.scss";

const MenuPage = () => {
  return (
    <>
      <Seo title="Menu" />
      <div className="menus">
        <img src="/menu/draught.png" alt="Draught" />
        <img src="/menu/cocktails.png" alt="Cocktails" />
        <img src="/menu/menu-1.png" alt="Menu 1" />
        <img src="/menu/menu-2.png" alt="Menu 2" />
        <img src="/menu/brunch.png" alt="Brunch" />
        <img src="/menu/sippers.png" alt="Sippers" />
      </div>
    </>
  );
};

export default MenuPage;
