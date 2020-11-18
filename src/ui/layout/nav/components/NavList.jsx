import React from 'react'
import styled from 'styled-components'

import { DarkModeButton, NavLink, SocialLinks } from './'
import { media } from '@src/utils'

const StyledNavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;

  ${media.down.md} {
    display: none;
  }

  & li {
    line-height: 60px;
  }
`;

export const NavList = () => {
  return (
    <StyledNavList>
      <NavLink to='/' name='Home' direction='down' />
      <NavLink to='/mywork' name='My Work' direction='up'/>
      <NavLink to='/about/' name='About' direction='left' />
      <NavLink href='mailto:marcocom@gmail.com' name='Email' />
      <SocialLinks />
      <DarkModeButton />
    </StyledNavList>
  )
};

