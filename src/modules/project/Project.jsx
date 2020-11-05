import { ProjectDev, ProjectInfo, ProjectHeader, ProjectVideo, ProjectImages } from './'
import { Button, Container, Text } from '@src/ui/components'
import { media } from '@src/utils'
import React from 'react'
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
      <ProjectHeader background={background} title={title} subtitle={subtitle} image={hero} year={year}/>
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
      <Button to='/mywork' text='<< Back' outline='false' direction='left' backbtn='true'/>
    </ProjectContainer>
  )
};
