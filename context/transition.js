export const transition = ({ property = 'all', duration = 500, timing = 'ease', delay = 0 }) => `
  transition-property: ${property};
  transition-duration: ${duration}ms;
  transition-timing-function: ${timing};
  transition-delay: ${delay}ms;
`;
