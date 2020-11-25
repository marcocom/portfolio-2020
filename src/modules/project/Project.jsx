import React from 'react';
import { ProjectDev, ProjectInfo, ProjectHeader, ProjectVideo } from './';
import { Button, Container } from '@src/ui/components';
import { media } from '@src/utils';
import styled from 'styled-components';
import { GlobalDispatchContext } from '@src/context';
import { GlobalStateActions } from '@src/reducers/reduceGlobal'

const ProjectContainer = styled.div`
  background: ${({ theme }) => theme.color.bg};
  transition: ${({ theme }) => theme.hoverTransition};
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 10px auto;
  ${media.down.md} {
    width: 90%;
  }
`;



export const Project = ({ project }) => {
  const {
    title,
    subtitle,
    background,
    hero,
    role,
    link,
    images,
    githubLink,
    hostedLink,
    videos,
    devDesc,
    features,
    year,
  } = project;


  React.useEffect(() => window.scrollTo(0,0), []);

  const dispatch = React.useContext(GlobalDispatchContext);

  React.useEffect(() => dispatch({
       type: GlobalStateActions.SET_PAGE,
       payload: link.replace(/\/+/g, '')
     }), []);


  return (
    <ProjectContainer>
      <Button to='/mywork' text='<< Back' hovertext='My Work' outline='false' direction='left' backbtn='true'/>
      <ProjectHeader background={background}
                     title={title}
                     subtitle={subtitle}
                     hero={hero}
                     images={images}
                     year={year}/>
      <Container>
        <InnerContainer>
          { videos.length > 0 &&
          <ProjectVideo videos={videos} />
          }
          <ProjectDev devDesc={devDesc} role={role} features={features} />
          <ProjectInfo githubLink={githubLink} hostedLink={hostedLink} hero={hero} />
        </InnerContainer>
      </Container>
      <Button to='/mywork' text='<< Back' hovertext='My Work' outline='false' direction='left' backbtn='true'/>
    </ProjectContainer>
  )
};
