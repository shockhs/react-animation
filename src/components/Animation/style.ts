import styled, { keyframes } from "styled-components";

export const SContainer = styled.div`
  position: relative;
  width: 320px;
  height: 480px;
`;

export const SBackground = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: -20px;
`;

const breatheAnimation = keyframes`
  0% { transform: translate(-30px, -10px); }
  25% { transform: translate(50px, 25px); }
  50% { transform: translate(100px, -25px); }
  75% { transform: translate(30px, -25px); }
  100% { transform: translate(-30px, -10px); }
`;

export const SAnimatedFish = styled.img`
  position: absolute;
  z-index: 1;
  bottom: 35%;
  left: 100px;
  width: 60px;
  height: auto;
  animation: ${breatheAnimation} 10s cubic-bezier(0.9, 1, 0.3, 0.75) 0s infinite;
`;
