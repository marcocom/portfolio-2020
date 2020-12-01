import React from 'react';
import styled from 'styled-components';

import { WorkList, WorkClients } from './';
import { Container, Text, SortButton } from '@src/ui/components';
import { GlobalStateContext, GlobalDispatchContext } from '@src/context';
import { GlobalStateActions } from '@src/reducers/reduceGlobal';

const StyledWork = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.color.bg};
  transition: ${({ theme }) => theme.hoverTransition};
  text-align: center;

  & button {
    position: relative;
    margin:-3px auto 5px;

  }
`;


const scrollDetails = {
  behavior: 'auto',
  block: 'start',
  inline: 'start',
};


export const Work = () => {

  const { lastPage, drawerVisible } = React.useContext(GlobalStateContext);
  const dispatch  =  React.useContext(GlobalDispatchContext);
  const scrollRef = React.useRef(null);

  const scrollIntoView = (anchorId) => {
    const el = document.getElementById(anchorId);
    // console.log(`scrollIntoView:${anchorId} ref:`, lastEl);
    el && setTimeout(() => el.scrollIntoView(scrollDetails), 1500);
  };

  React.useEffect(() => {
    lastPage && scrollIntoView(lastPage);
    dispatch({type: GlobalStateActions.SET_PAGE, payload: 'mywork'});
  }, []);

  return (
    <StyledWork ref={scrollRef}>
      <WorkClients scrollCall={scrollIntoView}/>
      <Text type='page-heading'>past projects</Text>
      <SortButton/>
      <Container>
        <WorkList/>
      </Container>
    </StyledWork>
  )
};

