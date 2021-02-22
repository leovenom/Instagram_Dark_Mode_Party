import { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import { v4 as uuid } from "uuid";

import Button from "ui/Button";
import Icon from "ui/Icon";
import CustomizedIcon from "ui/Icon/CustomizedIcon";
import Logo from "ui/Logo";

import ResponsiveDropdown from "./ResponsiveDropdown";

import {
  ResponsiveMenuContainer,
  MenuButton,
  SlideMenu,
  MenuList,
  MenuItem,
  ButtonContainer,
  CloseContainer,
} from "./ResponsiveStyledComponents";
import { PierLogo, Divider } from "./styles";

import { MenuType, RoleType, DropdownType, CONSTANTS } from "./types";

interface MenuItemProps {
  name: string;
  role: RoleType;
  linkTo?: string;
  dropdown: DropdownType;
  isActive: boolean;
}

function MenuItemComponent({
  name,
  linkTo,
  role,
  dropdown,
  isActive,
}: MenuItemProps) {
  const { ROLES } = CONSTANTS;

  const [isOpen, toggle] = useState<boolean>(isActive);

  switch (role) {
    case ROLES.DROPDOWN:
      return (
        <>
          <MenuItem opened={isOpen} isActive={isActive}>
            <div onClick={() => toggle(!isOpen)}>
              <span>{name}</span>
              <CustomizedIcon name="thinChevronDown" />
            </div>
            <ResponsiveDropdown isOpen={isOpen} dropdown={dropdown} />
          </MenuItem>
          <Divider />
        </>
      );
    case ROLES.LINK:
      return (
        <>
          <MenuItem isActive={isActive}>
            <Link href={linkTo}>
              <a>
                <span>{name}</span>
              </a>
            </Link>
          </MenuItem>
          <Divider />
        </>
      );
    case ROLES.NEW_TAB_LINK:
      return (
        <>
          <MenuItem isActive={isActive}>
            <a href={linkTo} rel="noopener" target="_blank">
              <span>{name}</span>
            </a>
          </MenuItem>
          <Divider />
        </>
      );
    case ROLES.BUTTON:
      return (
        <ButtonContainer>
          <Button variant="outline">{name}</Button>
        </ButtonContainer>
      );
    default:
      return null;
  }
}

interface Props {
  menuItems: MenuType;
  activePath: string;
  rootPage: string;
  trackPierLogoClick: () => void;
}

function ResponsiveMenu({
  menuItems,
  activePath,
  rootPage,
  trackPierLogoClick,
}: Props) {
  const lastIndex = menuItems.length - 1;

  const [isOpen, toggle] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);

  function openSlideMenu() {
    toggle(true);
    document.body.style.overflow = "hidden";
  }

  function closeSlideMenu() {
    toggle(false);
    document.body.style.overflow = "auto";
  }

  function isLinkEqualsToCurrentPath(linkPath, currentPath, dropdown): boolean {
    if (dropdown)
      return dropdown.filter(({ linkTo }) => linkTo === currentPath).length > 0;

    return linkPath === currentPath;
  }

  return (
    <ResponsiveMenuContainer>
      <Icon name="menu" fill="primary" size={24} onClick={openSlideMenu} />
      <PierLogo>
        <Link href={rootPage || "/"}>
          <a href="/" onClick={trackPierLogoClick} title="Pier Logo">
            <Logo color="secondary" />
          </a>
        </Link>
      </PierLogo>
      <MenuButton>
        <a href="/auth/session/new?step=kind">Login</a>
      </MenuButton>

      <SlideMenu opened={isOpen}>
        <CloseContainer>
          <button aria-label="Fechar menu" onClick={closeSlideMenu}>
            <CustomizedIcon name="thinClose" />
          </button>
        </CloseContainer>
        <MenuList>
          {menuItems.map(function (submenu, i) {
            return (
              <Fragment key={uuid()}>
                {submenu.map(function ({
                  name,
                  linkTo,
                  role,
                  responsiveRole,
                  dropdown,
                }) {
                  const isActive = isLinkEqualsToCurrentPath(
                    linkTo,
                    activePath,
                    dropdown
                  );

                  return (
                    <MenuItemComponent
                      key={name}
                      name={name}
                      linkTo={linkTo}
                      role={responsiveRole || role}
                      dropdown={dropdown}
                      isActive={isActive}
                    />
                  );
                })}
                {lastIndex > i && <Divider full large />}
              </Fragment>
            );
          })}
        </MenuList>
      </SlideMenu>
    </ResponsiveMenuContainer>
  );
}

export default ResponsiveMenu;
