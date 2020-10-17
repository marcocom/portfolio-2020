import { ProjectDev, ProjectInfo, ProjectHeader, ProjectVideo, ProjectImages } from '@src/modules/project'
import { Button, Container, Text } from '@src/ui/components'
import { media } from '@src/utils'
import {React, useEffect} from 'react'
import styled from 'styled-components'

const ProjectContainer = styled.div`
  background: ${({ theme }) => theme.color.bg};
  transition: ${({ theme }) => theme.hoverTransition};
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

  ${media.down.xs} {
    padding: 0 20px;
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
  } = project;


  useEffect(() => window.scrollTo(0,0));

  return (
    <ProjectContainer>
      <Button to='/' text='<< Back' direction='up'/>
      <ProjectHeader background={background} title={title} subtitle={subtitle} image={hero} />
      <Container>
        <InnerContainer>
          <ProjectInfo
            title={title}
            subtitle={subtitle}
            description={description}
            githubLink={githubLink}
            hostedLink={hostedLink}
          />
          <Text type='heading'>Sample Images</Text>
          {images.length > 0 ?
            <ProjectImages images={images} /> :
            <Text type='subheading'>Coming Soon...</Text>
          }

          {videos.length > 0 &&
            <ProjectVideo video={videos[0]} title={title} />
          }
          <ProjectDev devDesc={devDesc} features={features} />
        </InnerContainer>
      </Container>
      <Button to='/' text='<< Back' direction='up'/>
    </ProjectContainer>
  )
};
