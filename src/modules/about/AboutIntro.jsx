import React from 'react'
import styled from 'styled-components'

import { Card, Text } from '@src/ui/components'
import { media } from '@src/utils'

const StyledAboutIntro = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 1fr;
  align-items: flex-end;
  margin: 30px auto 100px;
  grid-template-areas: 'image card';

  ${media.down.lg} {
    margin: 30px auto 50px;
  }

  ${media.down.md} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: 'image' 'card';
    grid-gap: 25px;
  }
`;

const AboutImage = styled.img`
  max-width: 500px;
  position: relative;
  justify-self: flex-end;
  grid-area: image;
  right: -25px;

  ${media.down.lg} {
    max-width: 400px;
    align-self: center;
    right: 0;
  }
  ${media.down.md} {
    justify-self: center;
    max-width: 300px;
  }
`;

const AboutCard = styled(Card)`
  width: 100%;
  max-width: 850px;
  justify-self: flex-start;
  position: relative;
  left: -25px;
  top: 50px;

  & h2, h2 p {
    font-family: ${({ theme }) => theme.font.cursive};
    font-weight: 400;
    color: ${({ theme }) => theme.color.text};
    font-size: 3em;
    margin: 6px 0 20px;

    & span {
      color: ${({ theme }) => theme.color.primary};
    }
  }

  ${media.down.lg} {
    left: 0;
    top: 0;

    & h2 {
      font-size: 2.8em;
    }
  }

  ${media.down.md} {
    justify-self: center;
  }

  ${media.down.sm} {
    & h2, h2 p {
      font-size: 2.5em;
    }
  }
`;

export const AboutIntro = () => (
  <StyledAboutIntro>
    <AboutCard>
      <h2>
        hello, i'm <span>marco</span>
      </h2>
      <Text>
        <p>I am a digital artist, web designer, and front-end developer, specializing in the creation of interactive rich user-experiences that seek to deliver a brand message in a fun and engaging way. </p>
      </Text>
      <Text>
        <p>My career began at the first large-scale internet company in 1998, at U.S.Interactive in Los Angeles where we launched Adidas, NFL, and much more. I then proceeded to San Francisco where I worked at Apple in Cupertino, for CKS Partners for 2 years with a specialization in designing websites and animating in Flash and multimedia and actionscript programming.</p>
      </Text>
      <Text>
        <p>Upon closure of CKS, I moved to San Diego to do creative direction for a small firm in the real-estate brokerage market and after one year, moved back to Los Angeles to work at Saatchi & Saatchi and handle Toyota for the next 3 years, followed by another 5 years of automotive-work for Nissan, Acura, Scion, and Chrysler/Dodge</p>
      </Text>
      <Text><p>My specialties include: Concepting, Digital Design, Ad Media, Interactive Touch Displays, Front-end code development in HTML/CSS, UX Design and Animation.</p>
      </Text>
    </AboutCard>
  </StyledAboutIntro>
);

export default AboutIntro
