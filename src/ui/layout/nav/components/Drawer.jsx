import { DrawerList } from '@src/ui/layout/nav/components'
import { media } from '@src/utils'
import React from 'react'
import styled from 'styled-components'
import {GlobalDispatchContext} from '@src/context';
import {GlobalStateActions} from '@src/reducers/reduceGlobal';

const StyledDrawer = styled.aside`
  position: fixed;
  display: none;
  background-color: ${({ theme }) => theme.color.bg};
  border: ${({ theme }) => theme.color.primary} 8px solid;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
  opacity: 0;
  pointer-events: none;
  //transition: 300ms opacity ease-in-out, ${({ theme }) => theme.hoverTransition};
  justify-content: center;
  align-items: center;

  &.drawer-open {
    opacity: 1;
    display: block;
    pointer-events: all;
  }

  ${media.down.md} {
    display: flex;
  }
`;

const StyledNav = styled.nav`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 0;
`;

export const Drawer = ({ drawerOpen, setDrawerOpen }) => {
  const dispatch = React.useContext(GlobalDispatchContext);
  React.useEffect(() => {
    dispatch({
       type: GlobalStateActions.SET_DRAWER,
       payload: drawerOpen
     });
  }, [drawerOpen]);

  return (
    <StyledDrawer className={drawerOpen ? 'drawer-open' : ''}>
      <StyledNav>
        <DrawerList setDrawerOpen={setDrawerOpen}/>
      </StyledNav>
    </StyledDrawer>
  );
};
