import {Text} from '@src/ui/components'
import {media} from '@src/utils'
import React from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'

const StyledHeader = styled.section`
  width: 100%;
  padding-top: 10vh;
`;
const ColorSection = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 40vh;
  background: ${({theme}) => theme.color.imgBg};
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

export const ProjectHeader = ({background, title, subtitle, image}) => (
  <StyledHeader>
    <Text type='page-heading'>{title}</Text>
    <Text type='page-subheading'>{subtitle}</Text>
    <ColorSection>
      <Fade bottom>
        <img src={image} alt={title} />
      </Fade>
    </ColorSection>
  </StyledHeader>
);
