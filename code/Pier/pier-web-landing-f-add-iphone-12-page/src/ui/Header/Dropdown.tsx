import { Fragment } from "react";
import Link from "next/link";
import { v4 as uuid } from "uuid";

import CustomizedIcon from "ui/Icon/CustomizedIcon";

import { DropdownMenu, DropdownItem } from "./DesktopStyledComponents";
import { Divider } from "./styles";
import { DropdownType } from "./types";

interface Props {
  dropdown: DropdownType;
}

function Dropdown({ dropdown }: Props) {
  const lastIndex = dropdown.length - 1;

  return (
    <DropdownMenu>
      {dropdown.map(function ({ name, linkTo }, index) {
        return (
          <Fragment key={linkTo}>
            <Link href={linkTo}>
              <a>
                <DropdownItem>
                  <span>{name}</span>
                  <CustomizedIcon name="thinChevronDown" />
                </DropdownItem>
              </a>
            </Link>
            {lastIndex > index && <Divider full />}
          </Fragment>
        );
      })}
    </DropdownMenu>
  );
}

export default Dropdown;
