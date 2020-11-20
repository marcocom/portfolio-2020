import React from 'react';
import styled from 'styled-components';

import { WorkList } from './';
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

  // Project.jsx dispatches the link-value (scrubbed of slashes) to identify when user returns from browser-redirect to project pages.
  React.useEffect(() => {
    if(lastPage) {
      const lastEl = document.getElementById(lastPage);
      // console.log(`lastPage:${lastPage} ref:`, lastEl);
      lastEl && setTimeout(() => lastEl.scrollIntoView(scrollDetails), 1000);
      // reset lastPage value
    }
    dispatch({type: GlobalStateActions.SET_PAGE, payload: 'mywork'});
  }, []);

  return (
    <StyledWork ref={scrollRef}>
      <Text type='page-heading'>past projects</Text>
      <SortButton/>
      {/*<StyleSubHeading>
        <Text type='page-subheading'>Listed chronologically</Text>
      </StyleSubHeading>*/}
      <Container>
        <WorkList/>
      </Container>
    </StyledWork>
  )
};

