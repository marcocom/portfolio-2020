import React from 'react'
import styled from 'styled-components'

import { media } from '@src/utils'

const StyledHeader = styled.header`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.color.bg};
  position: fixed;
  box-shadow: ${({theme}) => theme.shadows.headerShadow};
  z-index: 10;
  transition: ${({ theme }) => theme.hoverTransition};
`;

const HeaderContainer = styled.div`
  width: 100%;
  padding: 0 10px 0 20px;
  height: 100%;
/*
  ${media.down.lg} {
    padding: 0 90px 0 20px;
  }
  ${media.down.md} {
    padding: 0 10px 0 10px;
  }*/
`;

export const Header = ({ children }) => (
  <StyledHeader>
    <HeaderContainer>{children}</HeaderContainer>
  </StyledHeader>
);
