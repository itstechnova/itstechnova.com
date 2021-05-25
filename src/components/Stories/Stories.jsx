import React, { useEffect, useState, useRef, useCallback } from "react";
import styled from "styled-components";

const AUTOPLAY_SLIDE_DURATION = 20000;
const STORIES_LENGTH = 3;


// const ProgressBarTrack = styled.div`
//   flex: 1;
//   height: 5.54px;
//   background: rgba(23, 60, 103, 0.31);
// `;

// // progress is in ms
// const ProgressBarLine = styled.div<{
//   startProgressAt,
//   inView,
//   isHovering,
// }>`
//   width: ${({ startProgressAt }) =>
//     (100 * startProgressAt) / AUTOPLAY_SLIDE_DURATION}%;
//   height: 5.54px;
//   background: ${({ theme }) => theme.globalConstants.color.aquaSecondary};
//   ${({ inView, isHovering, startProgressAt }) =>
//     inView && !isHovering
//       ? `@keyframes progress-${startProgressAt} {
//       from {
//         width: ${(100 * startProgressAt) / AUTOPLAY_SLIDE_DURATION}%;
//       }
//       to {
//         width: 100%;
//       }
//     }
//     animation: ${AUTOPLAY_SLIDE_DURATION - startProgressAt}ms
//       progress-${startProgressAt} linear infinite;
      
//     animation-play-state: running; `
//       : `animation-play-state: paused;`}
//   @media (prefers-reduced-motion) {
//     animation: none;
//   }
// `;

// const NavContainer = styled(Flex)`
//   margin: 20px 0;
//   margin-left: 350px;
//   > :not(:first-child) {
//     margin-left: 36.85px;
//   }
//   ${({ theme }) => theme.mediaQueries.medium`
//     margin-left: 200px;
//     > :not(:first-child) {
//       margin-left: 18px;
//     }
//   `};
//   @media (max-width: 550px) {
//     margin-left: 0;
//     > :not(:first-child) {
//       margin-left: 14px;
//     }
//   }
// `;



// const CarouselItem = styled.div`
//   width: 100%;
//   height: 100%;
//   &:not(:first-child) {
//     margin-left: -100%;
//   }
//   &.carousel-slide * .showcase-text {
//     opacity: 0;
//     transition-duration: 0.7s;
//   }
//   &.carousel-slide * .showcase-logo {
//     opacity: 0;
//     transition-property: all;
//     transition-duration: 0.7s;
//     margin-top: -125px;
//     ${({ theme }) => theme.mediaQueries.tablet`
//       margin-top: -75px;
//     `};
//     @media (max-width: 550px) {
//       margin-top: -50px;
//     }
//   }
//   &.carousel-slide-visible * .showcase-text {
//     opacity: 1;
//     transition-delay: 0.7s;
//   }
//   &.carousel-slide-visible * .showcase-logo {
//     opacity: 1;
//     transition-property: opacity;
//     transition-delay: 0.7s;
//     margin-top: 0;
//   }
//   &.carousel-slide-visible {
//     z-index: 3;
//   }
//   &:focus {
//     outline: none;
//   }
//   &:focus-visible {
//     outline: initial;
//   }
// `;

// const CarouselItemsContainer = styled(Flex)`
//   width: 100%;
//   height: 100%;
//   position: relative;
//   margin-bottom: 50px;
//   ${({ theme }) => theme.mediaQueries.tablet`
//     margin-bottom: 35px;
//   `};
//   @media (max-width: 550px) {
//     margin-bottom: 45px;
//   }
// `;

// const CarouselContainer = styled.div`
//   height: 100%;
//   padding-top: 22px;
//   ${({ theme }) => theme.mediaQueries.medium`
//     padding: 40px 0;
//   `};
//   @media (max-width: 550px) {
//     padding: 30px 0 0 0;
//   }
// `;

// const Container = styled.div``;

// const getNext = (currentSlide) =>
//   (currentSlide + 1) % STORIES_LENGTH;
// const getPrevious = (currentSlide) =>
//   (currentSlide - 1 + STORIES_LENGTH) % STORIES_LENGTH;

function Stories () {
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const [currentProgress, setCurrentProgress] = useState<number>(0);
  // const [autoplayStart, setAutoplayStart] = useState<number>(0);

  // // we have isHoveringBuffer because we need to delay the first rerender of the progress bar
  // const [isHovering, setIsHovering] = useState<boolean>(false);
  // const [isHoveringBuffer, setIsHoveringBuffer] = useState<boolean>(false);

  // const autoplay = useRef<NodeJS.Timeout | null>(null);
  // const handlers = useSwipeable({
  //   onSwipedLeft: () => setCurrentSlide(getNext(currentSlide)),
  //   onSwipedRight: () => setCurrentSlide(getPrevious(currentSlide)),
  // });
  // const [ref, isInView] = useInView();

  // const setAutoplay = useCallback(
  //   (duration) => {
  //     autoplay.current = setTimeout(() => {
  //       setCurrentSlide(getNext);
  //       if (currentProgress !== 0) setCurrentProgress(0);
  //       setAutoplay(AUTOPLAY_SLIDE_DURATION);
  //     }, duration);
  //   },
  //   [currentProgress]
  // );




  return (
    <div>
      
    
    </div>
  );
};

export default Stories;