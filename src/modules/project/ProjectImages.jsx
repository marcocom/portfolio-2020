import { Text } from '@src/ui/components'
import { media } from '@src/utils'
import React from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'

const StyledHeader = styled.section`
  width: 100%;
  padding-top: 1.5em;
`;
const ColorSection = styled.div`
  margin-top: 10vh;
  width: 100%;
  height: 40vh;
  background: ${({ background }) => background};
  display: grid;
  place-items: center center;

  & img {
    height: 80%;
    width: auto;
  }

  ${media.down.md} {
    height: 35vh;
  }
  ${media.down.sm} {
    height: 25vh;
  }
  ${media.down.xs} {
    height: 30vh;
    & img {
      height: auto;
      width: 80%;
    }
  }
`;

export const ProjectImages = ({ image }) => (
  <StyledHeader>
    <ColorSection background={background}>
      <Fade bottom>
        {images.map(image => <img src={image} alt={title}/>) }
      </Fade>
    </ColorSection>
  </StyledHeader>
);
