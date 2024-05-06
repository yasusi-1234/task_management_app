import { css, keyframes } from "styled-components";

const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeIn = css`
    animation: ${fadeInAnimation} 0.5s ease-in-out;
`

export { fadeIn };