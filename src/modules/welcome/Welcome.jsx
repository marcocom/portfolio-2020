import React from 'react'
import {useTheme} from '@src/context'
import styled from 'styled-components';
import { Button } from '@src/ui/components'
import { media } from '@src/utils'
import {GlobalDispatchContext, GlobalStateContext} from '@src/context';
import {GlobalStateActions} from '@src/reducers';
import {Background} from '@src/ui/layout';
import gsap from 'gsap';

const BackgroundWrap = styled.div`
  display: block;
  position: relative;
  height: calc(100vh - 60px);
  width: 100%;
  overflow: hidden;
`;

const StyledHero = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
  display: block;
  z-index: 2;
  position: absolute;
  padding: 100px 50px 50px;
  //background: ${({ theme }) => theme.color.bg};
  text-align: center;
  //flex-direction: column;
  //justify-content: space-evenly;
  transition: ${({ theme }) => theme.hoverTransition};
  overflow-y: auto;


  ${media.down.sm} {
    padding: 12px 20px 0;
    margin-bottom: 60px;
  }
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.font.body};
  font-weight: 200;
  line-height: 1;
  color: ${({ theme }) => theme.color.text};
  //color: #FFF;
  font-size: 3em;
  letter-spacing: .2em;
  text-transform: lowercase;
  margin-bottom: 5px;
  transition: ${({ theme }) => theme.hoverTransition};

  //text-shadow: ${({currentTheme}) => currentTheme === 'light' ? 'rgba(0, 0, 0, .25) 0 0 6px' : 'none'};
  text-shadow: rgba(0, 0, 0, .25) 0 0 4px;

  ${media.down.md} {
    font-size: 2.5em;
  letter-spacing: .15em;
  }
  ${media.down.sm} {
    font-size: 2em;
  letter-spacing: .1em;
  }
  ${media.down.xs} {
    font-size: 2em;
  letter-spacing: .1em;
  }
`;

const SubTitle = styled.h3`
  font-family: ${({ theme }) => theme.font.body};
  font-weight: 400;
  line-height: 1;
  color: ${({ theme }) => theme.color.text};
  //color: #FFF;
  font-size: 2em;
  margin-bottom: 40px;
  //text-shadow: ${({currentTheme}) => currentTheme === 'light' ? 'rgba(0, 0, 0, .25) 0 0 6px' : 'none'};
  text-shadow: rgba(0, 0, 0, .25) 0 0 2px;

  //animation
  /*
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 2s ease-in ;
*/
  /*

  animation-name: fadein;
  animation-iteration-count: 0;
  animation-timing-function: ease-out;
  animation-duration: 4s;

  @keyframes fadein {
    0% {opacity:0}
    50% {opacity:0; transform:translateY(10px);}
    100% {opacity:1; transform:translateY(0);}
  }
  */



  & span {
    color: ${({ theme }) => theme.color.primary};
    font-family: ${({ theme }) => theme.font.heading};
    //transition: ${({ theme }) => theme.hoverTransition};
    font-weight: 900;
  }

  ${media.down.md} {
    font-size: 1.5em;
  }
  ${media.down.sm} {
    font-size: 1em;
  }
`;

const BodyText = styled.h5`
  font-size: 1.2em;
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  background: ${({theme}) => theme.color.bg};
  padding: 40px 30px 20px;
  position: relative;

  transition: ${({theme}) => theme.hoverTransition};

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
    margin-bottom: 20px;
    & span.subtext {
      font-style: italic;
      font-size: .7em;
      animation: 2s ease 0s normal forwards 1 fadein;
      @keyframes fadein {
        0% {opacity:0;}
        66% {opacity:0;}
        100% {
         opacity:1;
        }
      }

      ${media.down.sm} {
        font-size: .85em;
      }

      & a {
        text-decoration: none;
        color: ${({theme}) => theme.color.primary};
      }

    }
  }

`;

const StyledBtn = styled.div`

  & a {
    margin: 20px auto 40px;
    font-size: initial;
    //border-radius: 12px;
  }
`;

export const Welcome = () => {

  const {theme , toggle} = useTheme();

  const [isNewVisit, setNewVisit] = React.useState(false);

  const setGlobalState = React.useContext(GlobalDispatchContext);
  const {lastPage, themeSaved} = React.useContext(GlobalStateContext);

  const TitleRef = React.useRef(null);
  const SubTitleRef = React.useRef(null);
  const TextBoxRef = React.useRef(null);

  const setPage = () => setGlobalState({type: GlobalStateActions.SET_PAGE, payload: ''});

  const animCompleted = () => {
    console.log(`Welcome : animCompleted lastPage:${lastPage} themeSaved:${themeSaved}`);
    //does not fire when coming from inside the site or user-selected
    (lastPage === '' || !lastPage) && !themeSaved && toggle();
    setPage();
  };

  React.useEffect(() => {
    if(lastPage) {
      setPage();
      return;
    }
    // GSAP animation. more reliable than CSS animation across browsers.
    const animIntro1 = gsap.timeline({onComplete: animCompleted})
    .from(SubTitleRef.current, {
      delay: 0.5,
      duration: 0.75,
      opacity: 0,
      y: -20,
      ease: 'bounce.out',
    })
    .from(TextBoxRef.current, {
      duration: 0.4,
      ease: 'bounce.out',
      y: Math.round(window.innerHeight * .7),
    })
    .from(TitleRef.current, {
      delay: 0.8,
      duration: 1.8,
      opacity: 0,
      ease: 'power3.in',
      x: 10,
    });
  },[]);

  return (
    <BackgroundWrap>
      <StyledHero>
          <Title ref={TitleRef} currentTheme={theme}>
            Marco Comparato
          </Title>
          <SubTitle ref={SubTitleRef} currentTheme={theme}>
            <span>interactive art</span> and <span>technology</span> and <span>you</span> and <span>me</span>
          </SubTitle>
          <BodyText ref={TextBoxRef}>
            <p>My portfolio is a body of collected interactive works covering my twenty years as an artist and engineer in advertising and technology since 1998.</p>
            <p>From initial concept to final product, my work is the culmination of a lifetime of study, observation, and a great deal of trial and error.</p>
            <p>Thanks for stopping by!</p>
            <StyledBtn><Button outline='true' text='View my Work' hovertext='see my past projects' to='/mywork' direction='up' className='cta-btn'/></StyledBtn>
            <p>
              <span className='subtext'><a href='https://github.com/marcocom/portfolio-2020'>This website's code</a> is built using <a href='https://reactjs.org'>ReactJS</a> with <a href="https://styled-components.com">Styled-Components</a> for light/dark theme support, and <a href='https://gatsbyjs.com'>Gatsby</a> for static-content deployables. I am adding more projects and refining functionality every day, so please excuse the mess.</span>
            </p>
          </BodyText>
      </StyledHero>
      <Background />
    </BackgroundWrap>
)};
