import {Button, ButtonWrapper, Step6Com, Wrapper} from './styled';
import React from 'react';

function createMainArray(from, to, numbersPerArray) {
  const totalNumbers = to - from + 1;
  const numberOfSubArrays = Math.ceil(totalNumbers / numbersPerArray);
  const usedNumbers = new Set();

  const mainArray = [];
  for (let i = 0; i < numberOfSubArrays; i++) {
    const currentArray = [];
    while (currentArray.length < numbersPerArray && usedNumbers.size < totalNumbers) {
      const randomNumber = Math.floor(Math.random() * (to - from + 1)) + from;
      if (!usedNumbers.has(randomNumber)) {
        usedNumbers.add(randomNumber);
        currentArray.push(randomNumber);
      }
    }
    mainArray.push(currentArray);
  }

  return mainArray;
}

const imagesIds = createMainArray(1, 193, 10);

const Step6 = ({ user }) => {
  if (imagesIds.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <Step6Com>
      <p>15 {user?.name ? `NOT ${user.name}` : ''} users on RAW for you to date in 2025</p>
      <div className="wrapper-sliders">
        {imagesIds.slice(0, 3).map((idsArray, index) => (
          <Wrapper
            key={index}
            className={index === 1 ? 'second' : ''}
            animate={{x: index % 2 === 0 ? '-100%' : '100%'}}
            transition={{
              duration: 45,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            {idsArray.map((value) => (
              <img key={value} src={`/images/rawexzoo/users/image-${value}.jpg`} alt="User"/>
            ))}
          </Wrapper>
        ))}
      </div>
      <Button>start new love chapter</Button>
    </Step6Com>
  );
};

export default Step6;
