/** @format */

import Link from "next/link";
import pagesColors from "@/context/color.utils";
import { AnimatePresence, motion } from "framer-motion";
import { MobileCom, Wrapper, BottomItem } from "./styled";
import Rights from "@/components/Rights";

const Mobile = ({ items, navIsOpen, light, pathname, rights }) => (
  <AnimatePresence initial={false}>
    {navIsOpen && (
      <MobileCom
        initial={{
          height: 0,
        }}
        animate={{
          height: "auto",
          display: "flex",
        }}
        exit={{
          height: 0,
        }}
        transition={{
          duration: 0.3,
        }}
        style={
          light && {
            backgroundColor: "var(--color-violet)",
          }
        }
        className={"navigation"}
      >
        {items.top.map(({ id, href, name }) => (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 1,
                delay: 0.3,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.2,
                delay: 0,
              },
            }}
            key={id}
          >
            <Link href={href} data-tap-color={pagesColors[pathname].color} passHref className={pathname === href ? "active-mobile" : ""}>
              {name}
            </Link>
          </motion.div>
        ))}
        {items.bottom && (
          <Wrapper>
            {items.bottom.map(({ id, href, name }) => (
              <BottomItem
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 1,
                    delay: 0.3,
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.2,
                    delay: 0,
                  },
                }}
                key={id}
              >
                <Link href={href} passHref className={pathname === href ? "active-mobile" : ""}>
                  {name}
                </Link>
              </BottomItem>
            ))}
          </Wrapper>
        )}
        {rights && <Rights />}
      </MobileCom>
    )}
  </AnimatePresence>
);

export default Mobile;
