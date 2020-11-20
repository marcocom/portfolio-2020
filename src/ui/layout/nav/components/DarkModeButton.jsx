import { useTheme } from '@src/context'
import React from 'react'
import { IoMdSunny, IoMdMoon } from 'react-icons/io'
import styled from 'styled-components'

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
    color: ${({ theme }) => theme.color.primary};
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
  return (
    <li>
    <DarkModeBtn onClick={toggle} colorTheme={theme} >
      <IoMdSunny className='sun' /> <IoMdMoon className='moon' />
      <span className='txt'>Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode</span>
    </DarkModeBtn>
    </li>
  )
};
