/** @format */

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAppContext } from '@/context/state';
import { useMatchMedia } from '@/hooks/useMatchMedia';

import Desktop from './Desktop';
import Mobile from './Mobile';
import Mini from './Mini';
import SelfieChallenge from './SelfieChallenge';

const itemsMobile = {
  top: [
    {
      id: 1,
      href: '/download',
      name: 'download',
    },
    {
      id: 2,
      href: '/socials',
      name: 'socials',
    },
    {
      id: 3,
      href: '/partnership',
      name: 'PR&PARTNERSHIP',
    },
  ],
  bottom: [
    {
      id: 1,
      href: '/dm-us',
      name: 'dm us',
    },
    {
      id: 2,
      href: '/faq',
      name: 'faq',
    },
    {
      id: 3,
      href: '/terms-conditions',
      name: 'terms & conditions',
    },
    {
      id: 4,
      href: '/guidelines',
      name: 'guidelines',
    },
    // {
    //   id: 5,
    //   href: "/manage-cookies",
    //   name: "manage cookies",
    // },
    {
      id: 6,
      href: '/privacy-policy',
      name: 'privacy policy',
    },
  ],
};

const itemsDesktop = [
  {
    id: 1,
    href: '/',
    name: 'raw',
    position: 'top-left',
  },
  {
    id: 2,
    href: '/download',
    name: 'download',
    position: 'top-right',
  },
  {
    id: 3,
    href: '/socials',
    name: 'socials',
    position: 'bottom-left',
  },
  {
    id: 4,
    href: '/partnership',
    name: 'PR&PARTNERSHIP',
    position: 'bottom-right',
  },
];

const itemsPrizedrop = [
  {
    id: 1,
    href: '/prizedrop',
    name: 'GET RAW AND&nbsp;WIN&nbsp;A&nbsp;CAR',
  },
  {
    id: 2,
    href: '/prizedrop/terms-conditions',
    name: 'Terms & Conditions',
  },
];

const itemsSelfieChallenge = [
  {
    id: 1,
    href: '/selfiechallenge',
    name: 'GET RAW AND WIN $$$',
  },
  {
    id: 2,
    href: '/selfiechallenge/terms-conditions',
    name: 'Terms & Conditions',
  },
];

const Navigation = ({ dark, light, home, type, underline, noDesktop, rights, mini, selfiechallenge }) => {
  const { route } = useRouter();
  const { navIsOpen, setNavIsOpen } = useAppContext();
  const { isMobile } = useMatchMedia();
  const [mobile, setMobile] = useState(false);

  useEffect(() => setMobile(isMobile), [isMobile]);

  useEffect(() => {
    navIsOpen && setNavIsOpen(false);
  }, [route]);

  if (mini) return <Mini items={itemsPrizedrop} navIsOpen={navIsOpen} light={light} pathname={route} rights={rights} />;
  else if (selfiechallenge)
    return <SelfieChallenge items={itemsSelfieChallenge} navIsOpen={navIsOpen} light={light} pathname={route} rights={rights} />;
  else
    return mobile ? (
      <Mobile items={itemsMobile} navIsOpen={navIsOpen} light={light} pathname={route} rights={rights} />
    ) : (
      <Desktop items={itemsDesktop} dark={dark} home={home} pathname={route} type={type} underline={underline} noDesktop={noDesktop} />
    );
};

export default Navigation;
