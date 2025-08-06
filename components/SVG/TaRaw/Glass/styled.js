import styled from 'styled-components';
import { vhd, vwm } from '@/context/pxConvert';

export const GlassCom = styled.svg`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: block;

  @media only screen and (min-width: 576px) {
    width: ${vhd(250)};
    height: ${vhd(182)};
    top: ${vhd(134)};
  }

  @media only screen and (max-width: 575px) {
    width: ${vwm(148)};
    height: ${vwm(110)};
    top: ${vwm(78)};
  }
`;
