import {Step3Com} from './styled';
import {AnimationPlayer} from "@/components/AnimationPlayer";
import {useRef} from "react";

const Step3 = ({lottie, onChangeStep}) => {
  const lottieRef = useRef(null);

  const changeStep = () => {
    onChangeStep(5);
  };

  function onComplete(event) {
    if (event === 'complete') {
      changeStep();
    }
  }

  function play() {
    lottieRef.current?.play();
  }

  return (
    <Step3Com>
      <div className="player" onClick={play}>
        <AnimationPlayer
          src={lottie}
          ref={ref => lottieRef.current = ref}
          onEvent={onComplete}
          keepLastFrame={true}
          style={{height: '100%', width: '100%'}}
        />
      </div>
    </Step3Com>
  )
};

export default Step3;
