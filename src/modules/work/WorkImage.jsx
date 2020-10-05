import { media } from '@src/utils'
import React from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'

const ImageContainer = styled.div`
  grid-area: image;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    height: 80%;
  }

  ${media.down.lg} {
    padding: 40px 40px 120px;
    height: auto;

    & img {
      max-height: 500px;
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
`

export const WorkImage = ({ background, image, title }) => (
  <Fade bottom>
    <ImageContainer background={background}>
      <img src={image} alt={title} />
    </ImageContainer>
  </Fade>
)
