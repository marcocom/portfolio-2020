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
  height: auto;
  background: ${({theme}) => theme.color.imgBg};
  display: grid;
  place-items: center center;
  position: relative;
  & img {
    height: auto;
    width: 100%;
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
    margin: 0 10px 0 0;
    ${media.down.sm} {
      font-size: 1.2em;
    }
  }
`;

export const ProjectHeader = ({background, title, subtitle, image, year}) => (
  <StyledHeader>
    <StyledText>
      <Text type='heading'>{title} :: {subtitle} :: {year}</Text>
    </StyledText>
    <ColorSection>
      <Fade bottom>
        <img src={image} alt={title} />
      </Fade>
    </ColorSection>
  </StyledHeader>
);
