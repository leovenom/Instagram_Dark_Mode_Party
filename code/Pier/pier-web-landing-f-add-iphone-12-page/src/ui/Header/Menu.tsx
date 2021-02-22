import Link from "next/link";
import { v4 as uuid } from "uuid";

import Button from "ui/Button";
import CustomizedIcon from "ui/Icon/CustomizedIcon";
import Logo from "ui/Logo";

import Dropdown from "./Dropdown";
import MenuShoppingCart from "./MenuShoppingCart";
import {
  FlexContainer,
  MenuList,
  MenuItem,
  HoverDecorator,
  ButtonContainer,
} from "./DesktopStyledComponents";
import { PierLogo } from "./styles";
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

  switch (role) {
    case ROLES.DROPDOWN:
      return (
        <MenuItem isActive={isActive}>
          <div>
            <span>{name}</span>
            <CustomizedIcon name="thinChevronDown" />
          </div>
          <Dropdown dropdown={dropdown} />
        </MenuItem>
      );
    case ROLES.LINK:
      return (
        <Link href={linkTo}>
          <a>
            <MenuItem isActive={isActive}>
              <span>{name}</span>
              <HoverDecorator className="decorator" />
            </MenuItem>
          </a>
        </Link>
      );
    case ROLES.NEW_TAB_LINK:
      return (
        <a href={linkTo} rel="noopener noreferrer" target="_blank">
          <MenuItem isActive={isActive}>
            <span>{name}</span>
            <HoverDecorator className="decorator" />
          </MenuItem>
        </a>
      );
    case ROLES.BUTTON:
      return (
        <ButtonContainer>
          <Link href={linkTo}>
            <a>
              <Button variant="secondary" size="small">
                {name}
              </Button>
            </a>
          </Link>
        </ButtonContainer>
      );
    default:
      return null;
  }
}

interface Props {
  rootPage: string;
  trackPierLogoClick: () => void;
  activePath: string;
  menuItems: MenuType;
}

function Menu({ rootPage, trackPierLogoClick, activePath, menuItems }: Props) {
  const [leftMenu, rightMenu] = menuItems;

  function isLinkEqualsToCurrentPath(linkPath, currentPath, dropdown): boolean {
    if (dropdown)
      return dropdown.filter(({ linkTo }) => linkTo === currentPath).length > 0;

    return linkPath === currentPath;
  }

  return (
    <>
      <PierLogo>
        <Link href={rootPage || "/"}>
          <a href="/" onClick={trackPierLogoClick} title="Pier Logo">
            <Logo color="secondary" />
          </a>
        </Link>
      </PierLogo>
      <FlexContainer>
        <MenuList>
          {leftMenu.map(function ({ name, linkTo, role, dropdown }) {
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
                role={role}
                dropdown={dropdown}
                isActive={isActive}
              />
            );
          })}
        </MenuList>
      </FlexContainer>
      <FlexContainer>
        <MenuList>
          {rightMenu.map(function ({ name, linkTo, role, dropdown }) {
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
                role={role}
                dropdown={dropdown}
                isActive={isActive}
              />
            );
          })}
        </MenuList>
        <MenuShoppingCart />
      </FlexContainer>
    </>
  );
}

export default Menu;
