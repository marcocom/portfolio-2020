import React from 'react';
import styled from 'styled-components';

import { WorkList } from './';
import { Container, Text } from '@src/ui/components';
import { GlobalStateContext, GlobalDispatchContext } from '@src/context';
import { GlobalStateActions } from '@src/reducers/reduceGlobal';

const StyledWork = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.color.bg};
  transition: ${({ theme }) => theme.hoverTransition};
`;

const ScrollTarget = styled.div`
  width: 1px;
  height: 1px;
  background: none;
  position: relative;
  top: -60px;
`;

const StyleSubHeading = styled.div`
  font-size: .7em;
  text-transform: lowercase;
  margin:2px 0 10px;
`;

const scrollDetails = {
  behavior: 'auto',
  block: 'start',
  inline: 'start',
};

export const Work = () => {

  const { lastPage } = React.useContext(GlobalStateContext);
  const dispatch  =  React.useContext(GlobalDispatchContext);
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    if(lastPage) {
      const lastEl = document.getElementById(lastPage);
      // console.log(`lastPage:${lastPage} ref:`, lastEl);
      lastEl && setTimeout(() => lastEl.scrollIntoView(scrollDetails), 2000);
      dispatch({ type: GlobalStateActions.CLEAR_PAGE });
    }
  }, []);

  return (
    <StyledWork ref={scrollRef}>
      <Text type='page-heading'>Projects</Text>
      <StyleSubHeading>
        <Text type='page-subheading'>Listed chronologically</Text>
      </StyleSubHeading>
      <Container>
        <WorkList/>
      </Container>
    </StyledWork>
  )
};

