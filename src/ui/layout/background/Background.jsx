import React from 'react';
import styled from 'styled-components';
import {useTheme} from '@src/context';
import { media } from '@src/utils';

const StyledBackground = styled.div`
  margin: 0;
  padding: 0;

  //background-image: url(${({theme}) => theme.color.backgroundImage}) ;
  background-image: url('/nyc-transition.jpg');
  background-size: cover;
  background-repeat: no-repeat;

  background-position: ${({currentTheme}) => currentTheme === 'light' ? '100% 0' : '0 0'};

  transition: background-position 3000ms ease-in-out;

  width: 100vw;
  height: calc(100vh - 60px);

  display: block;
  position: absolute;
  z-index: 1;

  //filter: saturate(0%);

  animation: 3s ease 0s normal forwards 1 fadein;
  @keyframes fadein {
    0% {opacity:0;}
    66% {opacity:0;}
    100% {
     opacity:1;

    }
  }

  ${media.orientation.landscape} {
    //display: none;
    height: calc(120vh - 60px);
    width: 120vw;
  }


`;


export const Background = () => {
  const {theme} = useTheme();

  return <StyledBackground currentTheme={theme}/>;
};
