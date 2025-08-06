/** @format */

import Head from "next/head";

import Wrapper from "@/components/Wrapper";
import Step1 from "@/components/RawExZoo/Step1";
import Step2 from "@/components/RawExZoo/Step2";
import Step3 from "@/components/RawExZoo/Step3";
import { initializeApp } from "firebase/app";
import firebaseConfig from "firebase.json";
import Step5 from "@/components/RawExZoo/Step5";
import Step6 from "@/components/RawExZoo/Step6";
import { useEffect, useRef, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { AnimationPlayer } from "@/components/AnimationPlayer";
import { Avatar, Img } from "@/components/RawExZoo/Step3/styled";
import ResizableText from "@/components/ResizableText";
import rawData from "@/public/images/rawexzoo/data2.json";
import html2canvas from "html2canvas";

const app = initializeApp(firebaseConfig);

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

const RawExZooPage = () => {
  const IMAGE_URLS = [
    "/images/rawexzoo/avatars/donkey.png",
    "/images/rawexzoo/avatars/grasshopper.png",
    "/images/rawexzoo/avatars/grasshopper2.png",
    "/images/rawexzoo/avatars/monkey.png",
    "/images/rawexzoo/avatars/mouse.png",
    "/images/rawexzoo/avatars/pig.png",
    "/images/rawexzoo/avatars/ram.png",
    "/images/rawexzoo/avatars/rooster.png",
    "/images/rawexzoo/avatars/snake1.png",
    "/images/rawexzoo/avatars/snake2.png",
    "/images/rawexzoo/avatars/toad.png",
    "/images/rawexzoo/avatars/ram.png",
    "/images/rawexzoo/avatars/monkey.png",
  ];

  const lottieRef = useRef(null);
  const [isShowPlayer, setIsShowPlayer] = useState(false);
  const [isReadyPlayer, setIsReadyPlayer] = useState(false);
  const [step, setStep] = useState(1);
  const [isReadyUsers, setIsReadyUsers] = useState(false);
  const [user, setUser] = useState(null);
  const [images, setImages] = useState([]);
  const refCenterImage = useRef();
  const [lottie, setLottie] = useState(rawData);
  const [isAllImagesLoaded, setIsAllImagesLoaded] = useState(false);
  const loadedImagesCount = useRef(0);
  const refBaseImages = useRef([]);

  const handleChangeStep = (data) => {
    if (data === 2 || data === 5) {
      playVideoLoader();
    }
    setStep(data);
  };

  const handleChangeUser = (data) => {
    data.image = IMAGE_URLS[data.imageId];
    setUser(data);
  };

  const onEvents = (data) => {
    if (data === "instanceSaved") {
      setIsReadyPlayer(true);
    }
    if (data === "complete") {
      setIsShowPlayer(false);
    }
  };

  function playVideoLoader() {
    setIsShowPlayer(true);
    lottieRef.current?.setSeeker(0);
    lottieRef.current?.play();
  }

  const handleImageLoad = () => {
    loadedImagesCount.current += 1;
    if (loadedImagesCount.current === images.length) {
      setIsAllImagesLoaded(true);
    }
  };

  const handleImages = () => {
    const indexMapping = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let elementsLoaded = 0;
    if (Array.isArray(images) && refBaseImages.current) {
      for (let index = 0; index < images.length; index++) {
        const refElement = refBaseImages.current[index];
        const mappedIndex = indexMapping[index];

        if (refElement && mappedIndex !== undefined) {
          html2canvas(refElement, {
            useCORS: true,
            backgroundColor: null,
          }).then((canvas) => {
            const base64Image = canvas.toDataURL("image/png");
            setLottie((prev) => {
              const updatedData = { ...prev };
              updatedData.assets[mappedIndex].p = base64Image;
              return updatedData;
            });
            elementsLoaded++;
            if (indexMapping.length === elementsLoaded) {
              setIsReadyUsers(true);
            }
          });
        }
      }
    }
  };

  function getRandomElements(arr, count) {
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }

  const renderIcon = () => {
    switch (step) {
      case 1:
      default:
        return <Step1 isReadyUsers={isReadyUsers} onChangeStep={handleChangeStep} />;
      case 2:
        return <Step2 firebaseApp={app} onSubmit={handleImages} onChangeUser={handleChangeUser} onChangeStep={handleChangeStep} />;
      case 3:
        return <Step3 lottie={lottie} images={images} onChangeStep={handleChangeStep} />;
      case 5:
        return <Step5 user={user} onChangeStep={handleChangeStep} />;
      case 6:
        return <Step6 user={user} />;
    }
  };

  const renderAvatar = () => {
    if (!user) return;
    return (
      <Avatar className="main-image" ref={refCenterImage}>
        <Img src={user.image} alt="" />
        <ResizableText text={user.name} containerWidth={200} containerHeight={200} />
      </Avatar>
    );
  };

  const renderUsers = () => {
    if (!images.length) return;
    return (
      <>
        {images.map((value, index) => (
          <Avatar className="sub-image" ref={(el) => (refBaseImages.current[index] = el)} key={index}>
            <Img src={value.image} onLoad={handleImageLoad} alt="" />
            <ResizableText text={value.name} containerWidth={200} containerHeight={200} />
          </Avatar>
        ))}
      </>
    );
  };

  useEffect(() => {
    if (!refCenterImage.current) return;
    html2canvas(refCenterImage.current, {
      useCORS: true,
      backgroundColor: null,
    }).then((canvas) => {
      const base64Image = canvas.toDataURL("image/png");
      setLottie((prev) => {
        const updatedData = { ...prev };
        updatedData.assets[0].p = base64Image;
        return updatedData;
      });
    });
  }, [user]);

  useEffect(() => {
    if (!isAllImagesLoaded) return;
    if (isShowPlayer || step > 1) return;

    setTimeout(() => {
      handleImages();
    }, 100);
  }, [isAllImagesLoaded, isShowPlayer]);

  useEffect(() => {
    const firestore = getFirestore(app);
    const docRef = collection(firestore, "ex-zoo_users");
    getDocs(docRef).then((docSnap) => {
      const users = [];
      getRandomElements(docSnap.docs, 13).forEach((doc) => {
        const docData = doc.data();
        const updatedImage = IMAGE_URLS[docData.imageId];
        if (updatedImage) {
          docData.image = updatedImage;
          users.push(docData);
        }
      });
      setImages(users);
    });
    playVideoLoader();
  }, [app, isReadyPlayer]);

  return (
    <>
      <Head>
        <title>Raw ExZoo</title>
        <meta name="description" content="Find new love, not catfish" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      </Head>
      <div
        style={{
          width: "100%",
          height: "100%",
          minHeight: "100%",
          backgroundColor: "var(--color-violet)",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 450,
            minHeight: "100%",
            fontFamily: "var(--font-podkova), var(--font-default)",
            backgroundColor: "var(--color-transparent)",
            overflow: "hidden !important",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: !isShowPlayer ? "none" : "block",
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: 0,
              zIndex: 2,
              background: "var(--color-violet)",
            }}
          >
            <AnimationPlayer
              ref={(ref) => (lottieRef.current = ref)}
              src="/images/rawexzoo/data.json"
              onEvent={onEvents}
              keepLastFrame={true}
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          {renderIcon()}
          {renderAvatar()}
          {renderUsers()}
        </div>
      </div>
    </>
  );
};

export default RawExZooPage;
