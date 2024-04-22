import styled from "styled-components";
import { media } from "../../../style/media";
import { pxToRem } from "../../../lib/general";

export const Banner = styled.section<{ $bg: string }>`
     align-items: end;
     background-image: ${({ $bg }) => `url(${$bg})`};
     background-size: cover;
     background-position: center;
     display: flex;
     height: ${pxToRem(500)};
     border-radius: 14px;
     z-index: -1;

     ${media.sm`
    height: ${pxToRem(250)};
    align-items: end;
    padding-bottom: var(--base);
  `}
`;
