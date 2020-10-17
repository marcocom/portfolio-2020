import React, {useEffect} from 'react';
import styled from 'styled-components'

import { AboutContact, AboutIntro, AboutSkills } from '@src/modules/about'
import { Container } from '@src/ui/components'
import { Layout } from '@src/ui/layout'

const StyledAbout = styled.section`
  width: 100%;
  background: ${({ theme }) => theme.color.bg};
  transition: ${({ theme }) => theme.hoverTransition};
`;

const PageContent = () => {

  useEffect(() => window.scrollTo(0, 0));
  return (
    <Layout pageTitle='About'>
      <StyledAbout>
        <Container>
          <AboutIntro />
          <AboutSkills />
          <AboutContact />
        </Container>
      </StyledAbout>
    </Layout>
  )
};

export default PageContent;
