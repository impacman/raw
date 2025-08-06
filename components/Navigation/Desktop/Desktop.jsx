/** @format */

import Link from "next/link";
import pagesColors from "@/context/color.utils";
import { DesktopCom, Item } from "./styled";

const Desktop = ({ items, dark, home, pathname, type, underline, noDesktop }) =>
  !noDesktop ? (
    <DesktopCom styledDark={dark} className={type ? `navigation navigation--${type}` : "navigation"}>
      {items.map(({ id, href, name, position }) => (
        <Item
          key={id}
          className={`${position} ${name === "raw" && !home ? "hidden" : ""} ${pathname === href ? "active-desktop" : ""}`}
          data-hover-color={`${pagesColors[pathname]?.colorInvert}`}
        >
          <Link href={href} passHref className={underline ? "isUnderline" : null}>
            {name}
          </Link>
        </Item>
      ))}
    </DesktopCom>
  ) : null;

export default Desktop;
