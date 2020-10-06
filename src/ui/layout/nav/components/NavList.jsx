import React from 'react'
import styled from 'styled-components'

import { DarkModeButton, NavLink, SocialLinks } from '@src/ui/layout/nav/components'
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

export const NavList = () => (
  <StyledNavList>
    <NavLink to='/' name='Creations' direction='right' />
    <NavLink to='/about/' name='About' direction='left' />
    <NavLink href='mailto:marcocom@gmail.com' name='Email' target='_blank' />
    <SocialLinks />
    <DarkModeButton />
  </StyledNavList>
);
