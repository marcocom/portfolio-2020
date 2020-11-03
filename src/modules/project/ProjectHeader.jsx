import {Text} from '@src/ui/components'
import {media} from '@src/utils'
import React from 'react'
import Fade from 'react-reveal/Fade'
import styled from 'styled-components'

const StyledHeader = styled.section`
  width: 100%;
  //padding-top: 10vh;
  position: relative;
`;
const ColorSection = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 40vh;
  background: ${({theme}) => theme.color.imgBg};
  display: grid;
  place-items: center center;
  position: relative;
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

const StyledText = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: nowrap;
  width: 100%;
  & h3 {
    width: 100%;
    padding: 10px 0 0 20px;
    display: inline-block;
    line-height: 1;
    margin: 0 10px 0 0;
  }
`;

export const ProjectHeader = ({background, title, subtitle, image}) => (
  <StyledHeader>
    <StyledText>
      <Text type='heading'>{subtitle}</Text>
    </StyledText>
    <ColorSection>
      <Fade bottom>
        <img src={image} alt={title} />
      </Fade>
    </ColorSection>
  </StyledHeader>
);
