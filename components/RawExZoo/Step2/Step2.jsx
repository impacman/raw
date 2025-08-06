import {Button, Content, Input, Step2Com} from './styled';
import {useRef, useState} from "react";
import {AnimationPlayer} from "@/components/AnimationPlayer";
import {addDoc, collection, getFirestore} from 'firebase/firestore';
import Icons from "@/components/RawExZoo/Step5/Icons";

const Step2 = ({app, onChangeUser, onChangeStep}) => {
  const lottieRef = useRef(null);
  const [className, setClassName] = useState(null);
  const [name, setNameData] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBouncing, setIsBouncing] = useState(false);

  function onComplete(event) {
    if (event === 'complete') {
      changeStep();
    }
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setNameData(value);
  };

  const handleClick = () => {
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const firestore = getFirestore(app);
      const user = {
        name: name,
        imageId: getRandomNumber(),
        createdAt: formatDateToISOString()
      };
      onChangeUser(user);
      const docRef = collection(firestore, 'ex-zoo_users');
      const docSnap = await addDoc(docRef, user);
      if (!docSnap.id) {
        throw new Error('Failed to send message.');
      }

      lottieRef.current?.play();
      setClassName('fade-out');

    } catch (error) {
      alert(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const changeStep = () => {
    onChangeStep(3);
  };

  function getRandomNumber() {
    return Math.floor(Math.random() * 11);
  }

  function formatDateToISOString() {
    const date = new Date();

    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');

    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}:${milliseconds}Z`;
  }

  return (
    <Step2Com>
      <Content onSubmit={handleSubmit} className={className}>
        <Input type="text" placeholder="Enter your ex name..." maxLength="10" value={name} onChange={handleChange}/>
        <Button type="submit" onClick={handleClick} className={isBouncing ? 'shrink' : ''} disabled={isSubmitting}>
          {isSubmitting ? <Icons type="loader"/> : 'Go'}
        </Button>
      </Content>
      <div className="player">
        <AnimationPlayer
          src="/images/rawexzoo/data.json"
          ref={ref => lottieRef.current = ref}
          onEvent={onComplete}
          className="zoom-out"
          style={{ height: '100%', width: '100%' }}
        />
      </div>
    </Step2Com>
  );
};

export default Step2;
