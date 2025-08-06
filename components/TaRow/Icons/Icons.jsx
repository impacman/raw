import { IconsCom, IconsComPrediction, TL, TLP, TR, TRP, BL, BLP, BR, BRP } from './styled';

import Lightning from '@/components/SVG/TaRaw/Lightning';
import Heart from '@/components/SVG/TaRaw/Heart';
import Star from '@/components/SVG/TaRaw/Star';
import Reload from '@/components/SVG/TaRaw/Reload';

const Icons = ({ loadingState, prediction, color }) => {
  const Tag = prediction ? IconsComPrediction : IconsCom;
  const PosTL = prediction ? TLP : TL;
  const PosTR = prediction ? TRP : TR;
  const PosBL = prediction ? BLP : BL;
  const PosBR = prediction ? BRP : BR;

  return (
    <Tag>
      <PosTL $styledRotate={!loadingState ? true : false}>
        <Lightning loadingState={loadingState} prediction={prediction} color={color} />
      </PosTL>
      <PosTR>
        <Heart loadingState={loadingState} prediction={prediction} color={color} />
      </PosTR>
      <PosBL $styledRotate={!loadingState ? true : false}>
        <Star loadingState={loadingState} prediction={prediction} color={color} />
      </PosBL>
      <PosBR $styledRotate={!loadingState ? true : false}>
        <Reload loadingState={loadingState} prediction={prediction} color={color} />
      </PosBR>
    </Tag>
  );
};

export default Icons;
