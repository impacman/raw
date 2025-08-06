import {Avatar, Content, Link, Share, Step5Com} from './styled';
import Icons from "@/components/RawExZoo/Step5/Icons";
import ResizableText from "@/components/ResizableText";
import {shareOnMobile} from "react-mobile-share";
import {toPng} from "html-to-image";
import React, {useEffect, useRef, useState} from "react";

const Step5 = ({user, onChangeStep}) => {
  const refShare = useRef();
  const [randomItemList, setRandomItemList] = useState([]);
  const [randomItemSubTitle, setRandomItemSubTitle] = useState('');
  const subTitleList = [
    'Drop your ex. Love on RAW',
    'Release ex & move on RAW',
    'Leave ex - love next on RAW',
    'Let ex go & have great love again on RAW',
    'Bye-bye ex, hello new real love on RAW',
    'Free yourself. Find love on RAW',
    'Let ex go. Get love on RAW'
  ];
  const list = [
    ['Delete all sad playlists', 'Block first, ask questions never', 'Get absolutely iconic', 'Date someone extraordinary'],
    ['Live rent-free in their regrets', 'Ban entire species of ex', 'Turn heartbreak into confetti', 'Find love that makes history'],
    ['Get unreasonably hot', 'Develop taste for smarts', 'Become allergic to nonsense', 'Find love worth the wild'],
    ['Exit the clown convention', 'Retire from fixing people', 'Achieve hot girl summer status', 'Find someone with brain cells'],
    ['Manifest maximum cuteness', 'Dodge red flags professionally', 'Ban drama from timeline', 'Find someone extra RAWsome'],
    ['Glow up threateningly', 'Master toxic positivity', 'Become suspiciously successful', 'Find love that makes sense'],
    ['Master main character energy', 'Dump all emotional garbage', 'Live life on spicy mode', 'Date someone worth my habitat'],
    ['Always be THAT girl', 'Done with lukewarm ANYTHING', 'Live MY hottest revenge era', 'Date someone who puts ME first'],
    ['Delete all 3am contacts', 'Speedrun personal growth', 'Upgrade my mating standards', 'Collect dates like candy'],
    ['Keep my standards high', 'Ban entire species of stupid', 'Find love just to flex', 'Make romance books look basic'],
    ['Make happiness look too easy', 'Evict idiots from my circle', 'Become extremely good at life', 'Find love with actual adults']
  ];

  const changeStep = () => {
    onChangeStep(6);
  };

  const generateShareImage = async (ref) => {
    try {
      await toPng(ref);
      await toPng(ref);
      await toPng(ref);
      return await toPng(ref);
    } catch (error) {
      console.error("Error when creating an image:", error);
    }
  };

  const share = async () => {
    const shareBase64 = await generateShareImage(refShare.current);
    shareOnMobile({
      title: `${getRandomItem(subTitleList)} https://get.raw.app/tocf/app`,
      images: [shareBase64]
    });
  };

  function getRandomItem(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  useEffect(() => {
    setRandomItemList(getRandomItem(list));
    setRandomItemSubTitle(getRandomItem(subTitleList));
  }, []);
  if (!randomItemList.length || !randomItemSubTitle) {
    return <div>Loading...</div>;
  }

  return (
    <Step5Com>
      <h1>today I’m</h1>
      <p className="second-text">saying goodbye to my ex</p>
      <div className="wrapper">
        <Avatar>
          {user?.image ? <img src={user.image} alt=""/> : null}
          <ResizableText
            text={user?.name || ''}
            containerWidth={270}
            containerHeight={270}
            maxFontSize={100}
          />
        </Avatar>
      </div>
      <Content>
        <p>MY 2025 MANIFESTO</p>
        <ul className="text-list">
          {randomItemList.map((item, index) =>
            index !== 3 ? (
              <li key={index}>{item}</li>
            ) : (
              <li key={index} className="share">
                {item}
                <button onClick={share}>
                  <Icons type="icon6"/>
                </button>
              </li>
            )
          )}
        </ul>
      </Content>
      <Link onClick={changeStep}>find new love instead &gt;&gt;&gt;</Link>

      <Share ref={refShare}>
        <h1>today I’m</h1>
        <p className="second-text">saying goodbye to my ex</p>
        <div className="wrapper">
          <Avatar>
            {user?.image ? <img src={user.image} alt=""/> : null}
            <ResizableText
              text={user?.name || ''}
              containerWidth={270}
              containerHeight={270}
              maxFontSize={100}
            />
          </Avatar>
        </div>
        <Content>
          <p>MY 2025 MANIFESTO</p>
          <ul className="text-list">
            {randomItemList.map((item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
        </Content>
        <img src="/images/rawexzoo/logo.png" className="logo" alt=""/>
      </Share>
    </Step5Com>
  )
};

export default Step5;
