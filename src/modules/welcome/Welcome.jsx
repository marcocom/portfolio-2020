import React from 'react'
import styled from 'styled-components'

import { Button } from '@src/ui/components'
import { media } from '@src/utils'

const StyledHero = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  padding: 0 50px 0;
  background: ${({ theme }) => theme.color.bg};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  transition: ${({ theme }) => theme.hoverTransition};

  ${media.down.sm} {
    padding: 50px 20px 0;
    margin-bottom: 60px;
  }
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
    font-size: 2em;
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
    font-size: 1em;
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
    margin-bottom: 40px;
  }
  ${media.down.xs} {
    font-size: 1.1em;
    margin-bottom: 40px;
  }
  & p {
    margin-bottom: 10px;
    & i {
      font-size: .8em;
    }
  }

  & a {
    text-decoration: none;
    color: ${({theme}) => theme.color.primary}
  }
`;


export const Welcome = () => (
  <StyledHero>
    <div>
      <Title>
        <p>marco comparato</p>
      </Title>
      <SubTitle>
        <p><span>interactive art</span> and <span>technology</span> and <span>you</span> and <span>me</span></p>
      </SubTitle>
      <BodyText>
        <p>My portfolio is a body of collected interactive works covering my twenty years as an artist and engineer in advertising and technology since 1998.</p>
        <p>From initial concept to final product, my work is the culmination of a lifetime of study, observation, and a great deal of trial and error.</p>
        <p>Please enjoy, and thank you for your interest.</p>
        <br/>
        <p>
          <i>This <a href='https://github.com/marcocom/portfolio-2020'>website's code</a> is built using <a href='https://reactjs.org'>ReactJS</a> with <a href="https://styled-components.com">Styled-Components</a> for light/dark theme support, and <a href='https://gatsbyjs.com'>Gatsby</a> for static-content deployables. I am adding sample images, as well as movie-clips to replace old website-demos, and refining functionality every day. Please excuse the mess.</i>
        </p>
      </BodyText>
      <Button outline='true' text='See my work' to='/mywork' direction='up' />
    </div>
  </StyledHero>
);
