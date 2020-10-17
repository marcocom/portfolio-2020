import React from 'react'
import styled from 'styled-components'

import { WorkList } from '@src/modules/work'
import { Container, Text } from '@src/ui/components'
import {media} from '../../utils';

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

const StyleSubHeading = styled.h5`
  font-size: .7em;
  text-transform: lowercase;
  margin:2px 0 10px;
`;

export const Work = () => {
  return (
    <StyledWork>
      <ScrollTarget id='scroll-target'/>
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
