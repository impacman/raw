/** @format */

import { createContext, useContext, useRef, useState } from "react";
import { useCycle } from "framer-motion";

const AppContext = createContext();

const AppWrapper = ({ children }) => {
  const refFocus = useRef(null);
  const refAnimation = useRef(null);

  const [navIsOpen, setNavIsOpen] = useCycle(false, true);
  const [isVisible, setIsVisible] = useCycle(false, true);

  const [activeForm, setActiveForm] = useState(false);
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const formState = { activeForm, setActiveForm, done, setDone, sending, setSending };

  const [doneContactForm, setDoneContactForm] = useState(false);
  const [sendingContactForm, setSendingContactForm] = useState(false);
  const contactFormState = { doneContactForm, setDoneContactForm, sendingContactForm, setSendingContactForm };

  const [doneMembershipForm, setDoneMembershipForm] = useState(false);
  const [sendingMembershipForm, setSendingMembershipForm] = useState(false);
  const membershipFormState = { doneMembershipForm, setDoneMembershipForm, sendingMembershipForm, setSendingMembershipForm };

  const [doneHeRawForm, setDoneHeRawForm] = useState(false);
  const [sendingHeRawForm, setSendingHeRawForm] = useState(false);
  const heRawFormState = { doneHeRawForm, setDoneHeRawForm, sendingHeRawForm, setSendingHeRawForm };

  const [isAnimatingTaRaw, setIsAnimatingTaRaw] = useState(false);
  const [isRotateTaRaw, setIsRotateTaRaw] = useState(true);
  const [closeEyes, setCloseEyes] = useState(false);

  const [counterClicks, setCounterClicks] = useState(0);

  const pacman = "WEWILLRAWKYOU";

  const shorts = [
    {
      id: 1,
      src: "short-1",
      data: [
        {
          id: 1,
          size: "big",
          alt: "RAW Short Big 1",
        },
        {
          id: 2,
          size: "min",
          alt: "RAW Short Min 1",
        },
      ],
    },
    {
      id: 2,
      src: "short-2",
      data: [
        {
          id: 1,
          size: "big",
          alt: "RAW Short Big 2",
        },
        {
          id: 2,
          size: "min",
          alt: "RAW Short Min 2",
        },
      ],
    },
    {
      id: 3,
      src: "short-3",
      data: [
        {
          id: 1,
          size: "big",
          alt: "RAW Short Big 3",
        },
        {
          id: 2,
          size: "min",
          alt: "RAW Short Min 3",
        },
      ],
    },
    {
      id: 4,
      src: "short-4",
      data: [
        {
          id: 1,
          size: "big",
          alt: "RAW Short Big 4",
        },
        {
          id: 2,
          size: "min",
          alt: "RAW Short Min 4",
        },
      ],
    },
    {
      id: 5,
      src: "short-5",
      data: [
        {
          id: 1,
          size: "big",
          alt: "RAW Short Big 5",
        },
        {
          id: 2,
          size: "min",
          alt: "RAW Short Min 5",
        },
      ],
    },
    {
      id: 6,
      src: "short-6",
      data: [
        {
          id: 1,
          size: "big",
          alt: "RAW Short Big 6",
        },
        {
          id: 2,
          size: "min",
          alt: "RAW Short Min 6",
        },
      ],
    },
    {
      id: 7,
      src: "short-7",
      data: [
        {
          id: 1,
          size: "big",
          alt: "RAW Short Big 7",
        },
        {
          id: 2,
          size: "min",
          alt: "RAW Short Min 7",
        },
      ],
    },
    {
      id: 8,
      src: "short-8",
      data: [
        {
          id: 1,
          size: "big",
          alt: "RAW Short Big 8",
        },
        {
          id: 2,
          size: "min",
          alt: "RAW Short Min 8",
        },
      ],
    },
    {
      id: 9,
      src: "short-9",
      data: [
        {
          id: 1,
          size: "big",
          alt: "RAW Short Big 9",
        },
        {
          id: 2,
          size: "min",
          alt: "RAW Short Min 9",
          mirror: true,
        },
      ],
    },
    {
      id: 10,
      src: "short-10",
      data: [
        {
          id: 1,
          size: "big",
          alt: "RAW Short Big 10",
        },
        {
          id: 2,
          size: "min",
          alt: "RAW Short Min 10",
        },
      ],
    },
  ];

  return (
    <AppContext.Provider
      value={{
        refFocus,
        refAnimation,
        navIsOpen,
        setNavIsOpen,
        isVisible,
        setIsVisible,
        formState,
        contactFormState,
        membershipFormState,
        counterClicks,
        setCounterClicks,
        pacman,
        isAnimatingTaRaw,
        setIsAnimatingTaRaw,
        isRotateTaRaw,
        setIsRotateTaRaw,
        closeEyes,
        setCloseEyes,
        shorts,
        heRawFormState,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

export default AppWrapper;
