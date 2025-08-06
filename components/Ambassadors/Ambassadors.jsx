import { useEffect, useRef, useState } from "react";
import { SmoothScrollProviderWithouDestroy } from "@/context/scroll";
import { useAppContext } from "@/context/state";
import { useBodyColor } from "@/hooks/useBodyColor";
import { isMobile } from "react-device-detect";
import { AnimatePresence } from "framer-motion";
import { AmbassadorsCom, WrapTypeForm, WrapBtn, Btn } from "./styled";

import Start from "./Start";
import YouWay from "./YouWay";
import GetPaid from "./GetPaid";
import Moves from "./Moves";
import Deal from "./Deal";
import Learn from "./Learn";
import Images from "./Images";
import Perfect from "./Perfect";

import Rights from "../Rights";
import NavigationBottom from "../NavigationBottom";
import ParallaxImages from "../ParallaxImages";

import TypeForm from "../TypeForm";
import Form from "../TypeForm/Form";
import Done from "../TypeForm/Done";
import FormLoading from "../FormLoading";

const images = {
  start: {
    img: {
      path: "ambassadors_new",
      src: "img-20250806-003-d79f1a",
      alt: "RAW Partnership Banner",
    },
  },
  youWay: {
    imgBig: {
      path: "ambassadors_new",
      src: "img-20250806-010-368677",
      alt: "RAW Partnership Banner",
    },
    imgMin: {
      path: "ambassadors_new",
      src: "img-20250806-007-86a151",
      alt: "RAW Partnership Banner",
    },
  },
  getPaid: {
    img: {
      path: "ambassadors_new",
      src: "img-20250806-005-4e9378",
      alt: "RAW Partnership Banner",
    },
  },
  moves: {
    imgBig: {
      path: "ambassadors_new",
      src: "img-20250806-009-0b50a6",
      alt: "RAW Partnership Banner",
    },
    imgMin: {
      path: "ambassadors_new",
      src: "img-20250806-001-510610",
      alt: "RAW Partnership Banner",
    },
  },
  deal: {
    img: {
      path: "ambassadors_new",
      src: "img-20250806-002-c36ea3",
      alt: "RAW Partnership Banner",
    },
  },
  learn: {
    img: {
      path: "ambassadors_new",
      src: "img-20250806-006-f664c7",
      alt: "RAW Partnership Banner",
    },
  },
  images: {
    imgBig: {
      path: "ambassadors_new",
      src: "img-20250806-011-7cd023",
      alt: "RAW Partnership Banner",
    },
    imgMin: {
      path: "ambassadors_new",
      src: "img-20250806-004-2d5921",
      alt: "RAW Partnership Banner",
    },
  },
  perfect: {
    img: {
      path: "ambassadors_new",
      src: "img-20250806-008-87ba54",
      alt: "RAW Partnership Banner",
    },
  },
};

const Ambassadors = ({ data }) => {
  const refContainer = useRef(null);
  const [mobile, setMobile] = useState(false);
  const { formState } = useAppContext();

  const { activeForm, done, sending } = formState;
  const { main, steps, banner, im, parallaxScrollImages } = data;

  useEffect(() => setMobile(isMobile), [isMobile]);

  useBodyColor(activeForm && mobile, "violet", 0);
  useBodyColor(done && mobile, "violet", 0);

  return (
    <>
      <SmoothScrollProviderWithouDestroy refContainer={refContainer}>
        <AmbassadorsCom data-scroll-container ref={refContainer}>
          <Start triger="ambasadorStart" img={images.start.img} />
          <YouWay
            triger="ambasadorYouWay"
            mobile={mobile}
            imgBig={images.youWay.imgBig}
            imgMin={images.youWay.imgMin}
          />
          <GetPaid triger="ambasadorGetPaid" img={images.getPaid.img} />
          <Moves
            triger="ambasadorMoves"
            imgBig={images.moves.imgBig}
            imgMin={images.moves.imgMin}
          />
          <Deal triger="ambasadorDeal" mobile={mobile} img={images.deal.img} />
          <Learn triger="ambasadorLearn" img={images.learn.img} />
          <Images
            triger="ambasadorImages"
            imgBig={images.images.imgBig}
            imgMin={images.images.imgMin}
          />
          <Perfect triger="ambasadorPerfect" img={images.perfect.img} />
          <WrapTypeForm data-scroll-section data-triger="typeForm">
            <TypeForm start={main} steps={steps} />
            <ParallaxImages images={parallaxScrollImages} />
          </WrapTypeForm>
          <div data-scroll-section>
            <Rights dark />
            <NavigationBottom dark />
          </div>
          <WrapBtn data-btn-type-form>
            <Btn
              href="#type-form"
              data-scroll-to
              whileHover={{
                backgroundColor: "var(--color-mauve)",
                cursor: "pointer",
                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 0.9,
                transition: { duration: 0.2 },
              }}
            >
              Apply for free
            </Btn>
          </WrapBtn>
        </AmbassadorsCom>
      </SmoothScrollProviderWithouDestroy>
      <AnimatePresence initial={false}>
        {activeForm && <Form steps={steps} formState={formState} />}
      </AnimatePresence>
      <AnimatePresence initial={false}>{done && <Done />}</AnimatePresence>
      <AnimatePresence initial={false}>
        {sending && <FormLoading color={"violet"} colorLines={"white"} />}
      </AnimatePresence>
    </>
  );
};

export default Ambassadors;
