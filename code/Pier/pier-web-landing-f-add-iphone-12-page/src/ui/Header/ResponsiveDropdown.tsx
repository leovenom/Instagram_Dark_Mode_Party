import { Fragment } from "react";
import Link from "next/link";

import {
  ResponsiveDropdownList,
  DropdownItem,
} from "./ResponsiveStyledComponents";
import { Divider } from "./styles";

import { DropdownType } from "./types";

interface Props {
  dropdown: DropdownType;
  isOpen: boolean;
}

function ResponsiveDropdown({ dropdown, isOpen }: Props) {
  const lastIndex = dropdown.length - 1;

  return (
    <ResponsiveDropdownList opened={isOpen}>
      {dropdown.map(function ({ name, linkTo }, index) {
        return (
          <Fragment key={linkTo}>
            <DropdownItem>
              <Link href={linkTo}>
                <a>{name}</a>
              </Link>
            </DropdownItem>
            {lastIndex > index && <Divider full />}
          </Fragment>
        );
      })}
    </ResponsiveDropdownList>
  );
}

export default ResponsiveDropdown;
