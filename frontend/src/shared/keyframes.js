import { keyframes } from "styled-components";

export const slideInTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }
  20% {
    opacity: 1;
    transform: translateY(0px);
  }
  85% {
    opacity: 1;
    transform: translateY(0px);
  }
  100% {
    opacity: 0;
    transform: translateY(-10px);
  }
`;

export const spin = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

export const slightRotate = keyframes`
    0% {
      -webkit-transform: rotate(0deg);
    }
    50% {
      -webkit-transform: rotate(35deg);
    }
    100% {
      -webkit-transform: rotate(-35deg);
    }
  `;

export const animationFrames = keyframes`
    0% {
      transform: translate(0px, 0px);
    }
    100% {
      transform: translate(-50px, -50px);
    }
    `;

export const heartBeat = keyframes`
    0% {
      transform: scale(1);
    }

    14% {
      transform: scale(1.3);
    }

    28% {
      transform: scale(1);
    }

    42% {
      transform: scale(1.3);
    }

    70% {
      transform: scale(1);
    }
    `;

export const bounce = keyframes`
    from,
    20%,
    53%,
    to {
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: translate3d(0, 0, 0);
    }

    40%,
    43% {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      transform: translate3d(0, -30px, 0) scaleY(1.1);
    }

    70% {
      animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
      transform: translate3d(0, -15px, 0) scaleY(1.05);
    }

    80% {
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: translate3d(0, 0, 0) scaleY(0.95);
    }

    90% {
      transform: translate3d(0, -4px, 0) scaleY(1.02);
    }
    `;

export const rubberBand = keyframes`
    from {
      transform: scale3d(1, 1, 1);
    }
  
    30% {
      transform: scale3d(1.25, 0.75, 1);
    }
  
    40% {
      transform: scale3d(0.75, 1.25, 1);
    }
  
    50% {
      transform: scale3d(1.15, 0.85, 1);
    }
  
    65% {
      transform: scale3d(0.95, 1.05, 1);
    }
  
    75% {
      transform: scale3d(1.05, 0.95, 1);
    }
  
    to {
      transform: scale3d(1, 1, 1);
    }
  `;

export const jello = keyframes`
    from,
    11.1%,
    to {
      transform: translate3d(0, 0, 0);
    }
  
    22.2% {
      transform: skewX(-12.5deg) skewY(-12.5deg);
    }
  
    33.3% {
      transform: skewX(6.25deg) skewY(6.25deg);
    }
  
    44.4% {
      transform: skewX(-3.125deg) skewY(-3.125deg);
    }
  
    55.5% {
      transform: skewX(1.5625deg) skewY(1.5625deg);
    }
  
    66.6% {
      transform: skewX(-0.78125deg) skewY(-0.78125deg);
    }
  
    77.7% {
      transform: skewX(0.390625deg) skewY(0.390625deg);
    }
  
    88.8% {
      transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    }
  `;

export const shakeY = keyframes`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -3px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 3px, 0);
  }
`;

export const hinge = keyframes`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;

export const shakeX = keyframes`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-5px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(5px, 0, 0);
  }
`;
