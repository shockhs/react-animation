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
  bottom: 0;
`;

const breatheAnimation = keyframes`
    0% { 
      transform: translate(100px);
    }
    10% {
      transform: translate(80px, -15px);
    }
    20% {
      transform: translate(60px, -10px);
    }
    30% {
      transform: translate(40p, -20px);
    }
    40% {
      transform: translate(20px, -20px) rotateZ(-22deg);
    }
    50% { 
      transform: translate(0, -15px);
    }
    51% { 
      transform: translate(0, -15px) rotateY(180deg);
    }
    60% { 
      transform: translate(20px, -14px) rotateY(180deg) rotateZ(-22deg);
    }
    70% { 
      transform: translate(40px, -10px) rotateY(180deg);
    }
    80% { 
      transform: translate(60px, -5px) rotateY(180deg) rotateZ(-22deg);
    }
    90% { 
      transform: translate(80px, -15px) rotateY(180deg);
    }
    99% { 
      transform: translate(100px) rotateY(180deg) rotateZ(-22deg);
    }
    100% { 
      transform: translate(100px);
    }
`;

export const SAnimatedFish = styled.img`
  position: absolute;
  z-index: 1;
  bottom: 35%;
  left: 100px;
  width: 60px;
  height: auto;
  animation: ${breatheAnimation} 40s cubic-bezier(0.9, 1, 0.3, 0.75) 0s infinite normal;
`;
