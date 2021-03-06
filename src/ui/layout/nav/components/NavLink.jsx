import React from 'react'
import styled, { css, ThemeContext } from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { media } from '@src/utils'
import {GlobalStateContext} from '@src/context';

const styles = css`
  text-decoration: none;
  font-size: 0.9em;
  display: block;
  padding: 0 20px;
  position: relative;
  color: ${({ theme }) => theme.color.text};
  //transition: ${({ theme }) => theme.hoverTransition};

  ${media.down.lg} {
    padding: 0 12px;
  }

  &.nav_link--active {
    color: ${({ theme }) => theme.color.text};

    &::before {
      content: '';
      height: 2px;
      background: ${({ theme }) => theme.color.primary};
      position: absolute;
      bottom: 15px;
      left: 10px;
      right: 10px;
    }
  }

  &:hover {
    color: ${({ theme }) => theme.color.primary};
  }
`;

const StyledNavLink = styled(AniLink)`
  ${styles};
  pointer-events: ${({disabled}) => disabled ? 'none' : 'initial'};
`;

const StyledNavAnchor = styled.a`
  ${styles};
`;

export const NavLink = ({ to, href, name, direction }) => {
  const themeContext = React.useContext(ThemeContext);
  const {lastPage} = React.useContext(GlobalStateContext);
  const [isCurrent, setIsCurrent] = React.useState(false);

  React.useEffect(() => {
    if(href) return;
    setIsCurrent(to.replace(/\/+/g, '') === lastPage);
  }, [lastPage]);

  if (href) {
    return (
      <li>
        <StyledNavAnchor href={href} target="_blank">{name}</StyledNavAnchor>
      </li>
    )
  }
  return (
    <li>
      <StyledNavLink
        to={to}
        cover
        direction={direction}
        bg={themeContext.color.primary}
        duration={0.8}
        activeClassName='nav_link--active'
        disabled={isCurrent}
      >
        {name}
      </StyledNavLink>
    </li>
  )
};
