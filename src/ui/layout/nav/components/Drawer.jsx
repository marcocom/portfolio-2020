import { DrawerList } from './'
import { media } from '@src/utils'
import React from 'react'
import styled from 'styled-components'
import {GlobalDispatchContext} from '@src/context';
import {GlobalStateActions} from '@src/reducers/reduceGlobal';

const StyledDrawer = styled.aside`
--navheight: 60px;
  position: absolute;
  background-color: ${({ theme }) => theme.color.bg};
  border: ${({ theme }) => theme.color.primary} 8px solid;
  top: var(--navheight);
  bottom: 0;
  left: 0;
  width: 100vw;
  height: calc(100vh - var(--navheight));
  transform: translateX(100vw);
  z-index: 3;
  //visibility: hidden;
  pointer-events: none;
  transition: ${({ theme }) => theme.hoverTransition}, transform 1s ease-in-out;
  justify-content: center;
  align-items: center;
    display: flex;

  &.drawer-open {
    //visibility: visible;
    transform: translateX(0);
    pointer-events: all;
  }

  ${media.down.md} {
  }
`;

const StyledNav = styled.nav`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 0;

  position: relative;
  top: 50vh;
  transform: translateY(-50vh);
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
