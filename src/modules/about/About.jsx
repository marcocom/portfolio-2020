import React from 'react';
import styled from 'styled-components'

import {AboutIntro, AboutSkills} from './'
import {Container} from '@src/ui/components'

const StyledAbout = styled.section`
  width: 100%;
  padding: 50px 0;
  background: ${({theme}) => theme.color.bg};
  transition: ${({theme}) => theme.hoverTransition};
`;

export const About = () => (
    <StyledAbout>
      <Container>
        <AboutIntro/>
        <AboutSkills/>
        {/*<AboutContact/>*/}
      </Container>
    </StyledAbout>
  );

