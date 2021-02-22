import { useState, useEffect } from "react";
import * as React from "react";

import { generalTracker } from "helpers/mixpanelTracker";
import { NavBar } from "./styles";
import Menu from "./Menu";
import ResponsiveMenu from "./ResponsiveMenu";

import { MenuType } from "./types";

interface Props {
  transparent?: boolean;
  children?: React.ReactNode;
  menuItems: MenuType;
  fixed?: boolean;
  rootPage?: string;
}

const trackPierLogoClick = () =>
  generalTracker.track("Navbar Pier Logo Clicked");

const Header: React.FC<Props> = ({
  menuItems,
  fixed,
  rootPage,
}): JSX.Element => {
  const [activePath, setActivePath] = useState("");

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  return (
    <NavBar transparent={false} fixed={fixed}>
      <ResponsiveMenu
        activePath={activePath}
        menuItems={menuItems}
        rootPage={rootPage || "/"}
        trackPierLogoClick={trackPierLogoClick}
      />

      <Menu
        activePath={activePath}
        menuItems={menuItems}
        rootPage={rootPage || "/"}
        trackPierLogoClick={trackPierLogoClick}
      />
    </NavBar>
  );
};

export default Header;
