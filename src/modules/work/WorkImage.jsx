import { media } from '@src/utils'
import React from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'

const ImageContainer = styled.div`
  grid-area: image;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    height: 75%;
  }

  ${media.down.lg} {
    padding: 40px 40px 120px;
    height: auto;

    & img {
      max-height: 300px;
      object-fit: contain;
    }
  }

  ${media.down.md} {
    & img {
      height: auto;
      width: 100%;
      object-fit: contain;
    }
  }
`;

export const WorkImage = ({ image, title }) => (
  <Fade bottom>
    <ImageContainer >
      <img src={image} alt={title} />
    </ImageContainer>
  </Fade>
);