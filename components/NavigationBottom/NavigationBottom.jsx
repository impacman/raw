/** @format */

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useMatchMedia } from "@/hooks/useMatchMedia";
import Link from "next/link";
import pagesColors from "@/context/color.utils";
import { BottomPosition, NormalPosition, Item } from "./styled";

import EffectFade from "../EffectFade";

export const NavigationBottomItems = [
  {
    id: 1,
    href: "/socials",
    name: "socials",
    noActive: true,
  },
  {
    id: 2,
    href: "/faq",
    name: "faq",
  },
  {
    id: 3,
    href: "/dm-us",
    name: "dm us",
  },
  {
    id: 4,
    href: "/guidelines",
    name: "guidelines",
  },
  {
    id: 5,
    href: "/terms-conditions",
    name: "terms&conditions",
  },
  {
    id: 6,
    href: "/privacy-policy",
    name: "privacy policy",
  },
  // {
  //   id: 7,
  //   href: '/manage-cookies',
  //   name: 'manage cookies',
  //   popup: true,
  // },
  {
    id: 8,
    href: "/partnership",
    name: "PR&PARTNERSHIP",
    noActive: true,
  },
];

const NavigationBottom = ({ mainPage, dark, posStatic }) => {
  const { pathname } = useRouter();
  const { isMobile } = useMatchMedia();
  const [mobile, setMobile] = useState(false);

  useEffect(() => setMobile(isMobile), [isMobile]);

  if (mobile) return null;

  if (mainPage) {
    return (
      <NormalPosition className={"navigation"}>
        {NavigationBottomItems.map(({ id, href, name, noActive }) => {
          if (noActive) {
            return null;
          } else {
            return (
              <EffectFade key={id} link href={href}>
                {name}
              </EffectFade>
            );
          }
        })}
      </NormalPosition>
    );
  } else {
    return (
      <BottomPosition styledDark={dark} styledPosStatic={posStatic} className={"navigation"}>
        {NavigationBottomItems.map(({ id, href, name, noActive }) => (
          <Item
            className={`${noActive ? "no-active" : ""} ${pathname === href ? "active-bottom" : ""}`}
            key={id}
            whileHover={{
              color: `var(--color-${pagesColors[pathname].colorHoverBottomNav})`,
              cursor: "pointer",
              transition: {
                duration: 0.2,
              },
            }}
          >
            <Link key={id} href={href} passHref>
              {name}
            </Link>
          </Item>
        ))}
      </BottomPosition>
    );
  }
};

export default NavigationBottom;
