import {Bottom, Btn, Content, Step1Com} from './styled';
import {useEffect, useState} from "react";

const Step1 = ({isReadyUsers, onChangeStep}) => {
  const [img1Classes, setImg1Classes] = useState(['img1']);
  const [img2Classes, setImg2Classes] = useState(['img2']);
  const [img6Classes, setImg6Classes] = useState(['img6']);
  const [img7Classes, setImg7Classes] = useState(['img7']);
  const [img8Classes, setImg8Classes] = useState(['img8']);

  useEffect(() => {
    setTimeout(() => {
        setImg1Classes(prev => [...prev, 'slide-in-left']);
        setImg2Classes(prev => [...prev, 'slide-in-right']);
        setImg7Classes(prev => [...prev, 'bounce']);
        setImg6Classes(prev => [...prev, 'bounce']);
        setImg8Classes(prev => [...prev, 'bounce']);
    }, 2100);
  }, []);

  const changeStep = () => {
    onChangeStep(2);
  };

  return (
    <Step1Com>
      <img src="/images/rawexzoo/img1.png" className={img1Classes.join(' ')} alt=""/>
      <img src="/images/rawexzoo/img2.png" className={img2Classes.join(' ')} alt=""/>
      <Content>
        <img src="/images/rawexzoo/img7.png" className={img7Classes.join(' ')} alt=""/>
        <Bottom>
          <h1>
            WELCOME <br/> TO THE <br/> RAW EXZOO
            <img src="/images/rawexzoo/img6.png" className={img6Classes.join(' ')} alt=""/>
          </h1>
          <Btn style={{opacity: isReadyUsers ? 1 : 0.8}} onClick={changeStep} disabled={!isReadyUsers}>
            {!isReadyUsers ? "Loading..." : "Tap to unleash your ex"}
          </Btn>
          <img src="/images/rawexzoo/img8.png" className={img8Classes.join(' ')} alt=""/>
        </Bottom>
      </Content>
    </Step1Com>
  );
};

export default Step1;
