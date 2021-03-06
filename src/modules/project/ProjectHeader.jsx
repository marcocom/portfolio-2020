import {Text} from '@src/ui/components'
import {media} from '@src/utils'
import React from 'react'
import styled from 'styled-components'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';

const StyledHeader = styled.section`
  width: 100%;
  position: relative;
  ${media.down.sm}{
    margin-top: 10px
  }
`;
const ColorSection = styled.div`
  margin-top: 10px;
  padding: 10px 50px;
  width: 100%;
  height: auto;
  background: ${({theme}) => theme.color.imgBg};
  display: grid;
  place-items: center center;
  position: relative;
  ${media.down.md} {
    padding: 0;
  }

  & .carousel-root {
    width: 100%;
    max-width: 1100px;

    ${media.down.sm} {
      width: 100vw;
      max-width: 100%;
    }
  }
  & .carousel {
    & .slide {
      background: ${({theme}) => theme.color.imgBg} !important;
    }
  }

`;

const StyledText = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: nowrap;
  width: 100%;
  & h3 {
    width: 100%;
    text-align: center;
    padding: 10px 0 0 20px;
    display: inline-block;
    line-height: 1.1;
    margin: 0 auto;
    ${media.down.sm} {
      font-size: 1.2em;
      padding: 0 10px;
    }
  }
`;
const getConfigurableProps = () => ({
  showArrows: true,
  showStatus: true,
  showIndicators: true,
  infiniteLoop: true,
  showThumbs: true,
  useKeyboardArrows: false,
  autoPlay: false,
  stopOnHover: true,
  swipeable: true,
  dynamicHeight: true,
  emulateTouch: true,
  thumbWidth: 120,
  selectedItem: 0,
  interval: 8000,
  transitionTime: 700,
  swipeScrollTolerance: 5,
});


export const ProjectHeader = ({background, title, subtitle, images, year}) => (
    <StyledHeader>
      <StyledText>
        <Text type='heading'>{title} {subtitle} {year}</Text>
      </StyledText>
      <ColorSection>

        <Carousel {...getConfigurableProps()}>
          {
            images.map((image, i) => <div key={i}><img src={image} alt={title}/></div>)
          }
        </Carousel>

      </ColorSection>
    </StyledHeader>
  );
