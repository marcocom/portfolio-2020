import React from 'react'
import styled from 'styled-components'

import { media } from '@src/utils'

const StyledFooter = styled.footer`
  margin: 0;
  width: 100%;
  background: transparent;
  transition: ${({ theme }) => theme.hoverTransition};
  display: flex;
  justify-content: space-evenly;
  padding: 1em;
  color: ${({ theme }) => theme.color.text};
  text-align: center;

  position: absolute;
  bottom: 0;
  z-index: 2;

  ${media.down.md} {
    flex-direction: column;
  }
`;

export const Footer = () => (
  <StyledFooter>
    <h5>
      <span>© Marco Comparato {new Date().getFullYear()} &#8212; All rights reserved.</span>
    </h5>
  </StyledFooter>
);
