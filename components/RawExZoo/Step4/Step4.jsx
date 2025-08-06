import {Avatar, Step4Com} from './styled';
import ResizableText from "@/components/ResizableText";

const Step4 = ({images, user}) => {
    return (
    <Step4Com>
      <div className="wrapper rotate">
        {images.map((image, index) => (
          <Avatar key={index} className={`image img${index}`}>
            <img src={image.image} alt=""/>
            <ResizableText
              text={image.name}
              containerWidth={image.size}
              containerHeight={image.size}
            />
          </Avatar>
        ))}
      </div>
      <Avatar className="center-image">
        <img src={user.image} alt=""/>
        <ResizableText
          text={user.name + "!"}
          containerWidth={140}
          containerHeight={140}
        />
      </Avatar>
    </Step4Com>
  );
};

export default Step4;
