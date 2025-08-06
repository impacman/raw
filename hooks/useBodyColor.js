import { useEffect } from 'react';

export const useBodyColor = (active, color, time) => {
  useEffect(() => {
    if (active) {
      document.body.style.transition = `background-color ${time * 3}ms ease 0s`;
      setTimeout(() => (document.body.style.backgroundColor = `var(--color-${color})`), time);
    } else {
      document.body.style.backgroundColor = '';
      setTimeout(() => (document.body.style.transition = ''), time);
    }
  }, [active]);
};
