import { useTheme } from '@src/context'
import React from 'react'
import { IoMdSunny, IoMdMoon } from 'react-icons/io'
import styled from 'styled-components'
import {GlobalDispatchContext} from '@src/context'
import {GlobalStateActions} from '@src/reducers';

const DarkModeBtn = styled.button`
  border: none;
  background: none;
  height: 60px;
  transition: ${({ theme }) => theme.hoverTransition};
  padding: 0 15px;
  cursor: pointer;
  outline: none;
  position: relative;

  & svg {
    //fill: ${({theme}) => theme.color.primary};
  }

  & span {
    position: absolute;
    width: 200px;
    top: 70px;
    right: 15px;
    text-align: right;
    pointer-events: none;
    color: ${({ theme, colorTheme }) => colorTheme === 'light' ? theme.color.primary : theme.color.text};
    transform: translateY(10px);
    opacity: 0;
    transition: transform 1100ms ease-out, opacity 200ms ease-in-out;
  }


  & .sun {
    font-size: 22px;
    display: ${({ colorTheme }) => (colorTheme === 'light' ? 'none' : 'block')};
  }
  & .moon {
    font-size: 22px;
    display: ${({ colorTheme }) => (colorTheme === 'dark' ? 'none' : 'block')};
  }
  &:hover {
    & svg {
      fill: ${({theme}) => theme.color.primary};
    }

    & span {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const DarkModeButton = () => {
  const { theme, toggle } = useTheme();
  const dispatch = React.useContext(GlobalDispatchContext);
  const toggleTheme = () => {
    toggle();
    dispatch({type: GlobalStateActions.THEME_SAVED});
  };
  return (
    <li>
    <DarkModeBtn onClick={toggleTheme} colorTheme={theme} >
      <IoMdSunny className='sun' /> <IoMdMoon className='moon' />
      <span className='txt'>Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode</span>
    </DarkModeBtn>
    </li>
  )
};
