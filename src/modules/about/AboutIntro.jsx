import React from 'react';
import styled from 'styled-components';
import {GlobalDispatchContext} from '@src/context';
import {GlobalStateActions} from '@src/reducers/reduceGlobal';

import { Card, Text } from '@src/ui/components';
import { media } from '@src/utils';
import gsap from 'gsap';

const StyledAboutIntro = styled.section`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 1fr;
  align-items: flex-end;
  margin: 0 auto 100px;
  grid-template-areas: 'image card';

  ${media.up.lg} {
    margin: 30px auto 50px;
  }

  ${media.down.md} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-template-areas: 'image' 'card';
    grid-gap: 25px;
  }
`;

const AboutCard = styled(Card)`
  width: 95%;
  margin: 0 auto;
  max-width: 850px;
  justify-self: flex-start;
  position: relative;
  left: -25px;
  top: 70px;
  & h2 {
    font-size: 2.5em;
  }
  & h6 {
    font-size: 1.1em;
  }

  & h2, h6 {
    font-family: ${({ theme }) => theme.font.heading};
    font-weight: 400;
    color: ${({ theme }) => theme.color.text};
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
    & h2{
      font-size: 2em;
    }
    & h6 {
      font-size: 1em;
    }
  }
`;

export const AboutIntro = () => {
  const dispatch = React.useContext(GlobalDispatchContext);
  const TitleAnim = React.useRef(null);
  React.useEffect(() => {
    dispatch({type: GlobalStateActions.SET_PAGE, payload: 'about'});
    gsap.from(TitleAnim.current, {
      x:10,
      ease: 'power2.out',
      delay: 0.5,
      duration: 1.75,
      opacity: 0,
    });
  }, []);
  return (
  <StyledAboutIntro>
    <AboutCard>
      <h2 ref={TitleAnim}>
        hello, i'm <span>marco</span>
      </h2>
        <h6>I am a digital artist, web designer, and front-end developer, specializing in the creation of rich, interactive user-experiences. </h6>

        <h6>My creative career began at the world's first large-scale internet agency in 1998, at U.S.Interactive in Los Angeles, where we launched the first websites for Adidas, Lexus, Wide World of Disney, and the Smithsonian-Award winning, <cite>'StarBright'</cite>.
          I then moved to San Francisco in 2001 where I worked in Cupertino, for U.S.Web/CKS for 2 years designing websites rich in animation, interactivity and multimedia &#8212; delivering the original launch sites for Levi's, Docker's, Williams-Sonoma, and JCPenney.</h6>

        <h6>In 2003, I moved to San Diego to do creative direction for a small firm in the real-estate brokerage market and later, moved back to Los Angeles to work at Saatchi & Saatchi and handle Toyota's main website, micro-sites, and digital media for the next 3 years, followed by another 5 years of freelance automotive client work for Nissan, Acura, Scion, and Chrysler/Dodge.</h6>

        <h6>I then moved into video-games for a few years, working with the U.S.Army's <cite>'America's Army'</cite> and <cite>'The Army Experience'</cite> game interfaces, <cite>'The Secret World'</cite>, <cite>'Tony Hawk RIDE'</cite>, <cite>'Darksiders'</cite>, <cite>'RedBull's Soap-Race'</cite> websites, and the in-game menus and clan features of <cite>'Call Of Duty'</cite> at Activision, and finally moving overseas to do some Holland Casino contest-games in Amsterdam.</h6>

        <h6>Since 2014, I moved back from Europe to San Francisco, to work with Accenture, consulting their clients including Disney, Autodesk, Google, YouTube, Intel, Warner Bros Studios, Marriott Hotels, and PizzaHut. </h6>

        <h6>My specialties include; Concepting, User Interface Design, Ad Media, Interactive Touch Displays, Front-end modern code development,
          User-Centric Design and Prototype-driven discovery processes. I strive to always create intelligently unified solutions that deliver
          a brand's message in a playfully engaging and interactive way, defining a customer journey across multiple touch points to deliver a
          cohesive product experience.</h6>

    </AboutCard>
  </StyledAboutIntro>
)};

