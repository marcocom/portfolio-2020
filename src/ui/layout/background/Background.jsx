import React, {useContext} from 'react';
import styled, {ThemeContext} from 'styled-components'

import { media } from '@src/utils'

const StyledBackground = styled.div`
  margin: 0;
  padding: 0;

  background-image: url(${({theme}) => theme.color.backgroundImage}) ;
  background-size: cover;
  background-repeat: repeat;

  width: 100vw;
  height: 100vh;

  display: block;
  position: fixed;


  ${media.down.sm} {
    display: none;
  }
`;


export const Background = () => {
  const themeContext = useContext(ThemeContext);
  return <StyledBackground theme={themeContext}/>;
};
