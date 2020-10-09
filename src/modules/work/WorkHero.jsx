import React from 'react'
import styled from 'styled-components'

import { Button } from '@src/ui/components'
import { media } from '@src/utils'

const StyledHero = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  padding: 0 50px;
  background: ${({ theme }) => theme.color.bg};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  transition: ${({ theme }) => theme.hoverTransition};
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.font.cursive};
  font-weight: 200;
  color: ${({ theme }) => theme.color.text};
  font-size: 3.5em;
  margin-bottom: 15px;
  transition: ${({ theme }) => theme.hoverTransition};

  ${media.down.md} {
    font-size: 2.5em;
  }
  ${media.down.sm} {
    font-size: 2em;
  }
  ${media.down.xs} {
    font-size: 1em;
  }
`;

const SubTitle = styled.h3`
  font-family: ${({ theme }) => theme.font.cursive};
  font-weight: 400;
  color: ${({ theme }) => theme.color.text};
  font-size: 2.5em;
  margin-bottom: 20px;
  transition: ${({ theme }) => theme.hoverTransition};

  & span {
    color: ${({ theme }) => theme.color.primary};
    font-family: ${({ theme }) => theme.font.cursive};
    transition: ${({ theme }) => theme.hoverTransition};
    font-weight: 700;
  }

  ${media.down.md} {
    font-size: 1.5em;
  }
  ${media.down.sm} {
    font-size: 1em;
  }
  ${media.down.xs} {
    font-size: 0.7em;
  }
`;

const BodyText = styled.h5`
  font-size: 1.4em;
  display: block;
  margin: 0 auto 80px;
  width: 100%;
  max-width: 600px;


  ${media.down.md} {
    font-size: 1.2em;
  }
  ${media.down.sm} {
    font-size: 1.1em;
  }
  ${media.down.xs} {
    font-size: 1.1em;
  }
  & p {
    margin-bottom: 10px;
  }
`;

const scrollDown = () => {
  document.getElementById('scroll-target').scrollIntoView({
    behavior: 'smooth',
  })
};

export const WorkHero = () => (
  <StyledHero>
    <div>
      <Title>
        <p>marco comparato</p>
      </Title>
      <SubTitle>
        <p><span>interactive art</span> and <span>technology</span> and <span>you</span> and <span>me</span></p>
      </SubTitle>
      <BodyText>
        <p>This website is an off-hours work-in-progress.</p>
        <p>Excuse the mess while i refine its functionality.</p>
        <p>My portfolio is a body of collected interactive works covering over twenty years.</p>
        <p>From initial concept to final product, my work is the culmination of a lifetime of study, observation, and a great deal of trial and error.</p>
        <p>Please enjoy and thank you for your interest.</p>
      </BodyText>
      <Button outline='true' text='See my work' handleClick={scrollDown} direction='up' />
    </div>
  </StyledHero>
);
