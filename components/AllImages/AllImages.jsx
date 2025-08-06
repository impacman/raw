import { useAppContext } from '@/context/state';
import { AllImagesCom } from './styled';
import Picture from '../Picture';

const AllImages = () => {
  const { shorts } = useAppContext();

  return (
    <AllImagesCom>
      {shorts.flatMap(({ id: imageId, src, data }) =>
        data.map(({ id: dataId, size, alt, mirror }) => {
          const srcSuffix = size === 'big' ? '-big' : '-min';
          return <Picture key={`${imageId}-${dataId}`} path="shorts" src={`${src}${srcSuffix}`} alt={alt} mirror={mirror} />;
        })
      )}
    </AllImagesCom>
  );
};

export default AllImages;
