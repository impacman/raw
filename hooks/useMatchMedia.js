import { useState, useLayoutEffect } from 'react';

const queries = ['(max-width: 576px)', '(max-width: 991px)', '(min-width: 992px)'];

export const useMatchMedia = () => {
  if (typeof window === 'undefined') return false;

  const mediaQueyLists = queries.map((query) => matchMedia(query));

  const getValue = () => mediaQueyLists.map((mq) => mq.matches);

  const [values, setValues] = useState(getValue);

  useLayoutEffect(() => {
    const handler = () => setValues(getValue);

    mediaQueyLists.forEach((mq) => mq.addEventListener('change', handler));

    return () => mediaQueyLists.forEach((mq) => mq.removeEventListener('change', handler));
  });

  return ['isMinMobile', 'isMobile', 'isDesktop'].reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: values[index],
    }),
    {}
  );
};
