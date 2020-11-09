import React from 'react'
import { ProjectDev, ProjectInfo, ProjectHeader, ProjectVideo, ProjectImages } from './'
import { Button, Container, Text } from '@src/ui/components'
import { media } from '@src/utils'
import styled from 'styled-components'

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
    description,
    hero,
    images,
    githubLink,
    hostedLink,
    videos,
    devDesc,
    features,
    year,
  } = project;


  // useEffect(() => window.scrollTo(0,0));

  return (
    <ProjectContainer>
      <Button to='/mywork' text='<< Back' outline='false' direction='left' backbtn='true'/>
      <ProjectHeader background={background}
                     title={title}
                     subtitle={subtitle}
                     hero={hero}
                     images={images}
                     year={year}/>
      <Container>
        <InnerContainer>
          {videos.length &&
          <ProjectVideo videos={videos} />
          }
          <ProjectDev devDesc={devDesc} features={features} />
          <ProjectInfo githubLink={githubLink} hostedLink={hostedLink} hero={hero} />
        </InnerContainer>
      </Container>
      <Button to='/mywork' text='<< Back' outline='false' direction='left' backbtn='true'/>
    </ProjectContainer>
  )
};
