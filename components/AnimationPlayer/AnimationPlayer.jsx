import { Player } from '@lottiefiles/react-lottie-player';
import { forwardRef } from 'react';

const AnimationPlayer = forwardRef((props, ref) => {
  return <Player {...props} ref={ref} />;
});

export default AnimationPlayer;
