/** @format */

import { useRef, useState, useEffect } from "react";
import { SmoothScrollProviderWithouDestroy } from "@/context/scroll";
import { MiniCom, ScrollSectoin, Wrap, Prizes } from "./styled";

import Picture from "../Picture";
import Texts from "./Texts";
import List from "./List";
import Images from "./Images";

const Mini = ({ items }) => {
  const refContainer = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const colors = ["#ebebeb", "#f5e9eb", "#eceeef", "#ececec"];

  useEffect(() => {
    const interval = setInterval(() => setCurrentIndex((prevIndex) => (prevIndex + 1) % 4), 3000);
    return () => clearInterval(interval);
  }, []);

  const getImageSrc = (baseSrc, index) => `${baseSrc}-${index + 1}`;

  return (
    <SmoothScrollProviderWithouDestroy refContainer={refContainer}>
      <MiniCom data-scroll-container ref={refContainer}>
        {items.map(({ id, bg, texts, prizes, list, images }, ind) => (
          <ScrollSectoin data-scroll-section key={id} className={id}>
            <Wrap
              style={{
                backgroundColor: `var(--color-${bg ? bg : "transparent"})`,
              }}
            >
              {texts && <Texts data={texts} />}
              {list && <List data={list} />}
              {prizes && (
                <Prizes>
                  {[0, 1, 2, 3].map((i) => (
                    <Picture
                      key={i}
                      path={prizes.path}
                      src={getImageSrc(prizes.src, i)}
                      alt={prizes.alt}
                      styles={{
                        opacity: i === currentIndex ? 1 : 0,
                        filter: i === currentIndex ? "blur(0px)" : "blur(10px)",
                        transition: "opacity 0.8s ease, filter 0.8s ease",
                        backgroundColor: colors[currentIndex],
                      }}
                    />
                  ))}
                </Prizes>
              )}
              {images && <Images />}
            </Wrap>
          </ScrollSectoin>
        ))}
      </MiniCom>
    </SmoothScrollProviderWithouDestroy>
  );
};

export default Mini;
