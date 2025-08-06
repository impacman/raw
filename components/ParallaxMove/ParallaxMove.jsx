import { ParallaxMoveCom, Wrapper } from './styled';

const ParallaxMove = ({ children, bias, speed }) => (
  <ParallaxMoveCom>
    <Wrapper
      animate={{
        x: bias ? `-${bias}%` : '-100%',
      }}
      transition={{
        duration: speed ? speed : 20,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'reverse',
      }}
    >
      {children}
    </Wrapper>
  </ParallaxMoveCom>
);

export default ParallaxMove;
