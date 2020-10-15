import React from 'react'
import styled from 'styled-components'
import {Text} from '@src/ui/components'

const VideoContainer = styled.section`
  width: 100%;
  display: grid;
  place-items: center center;
  margin: 60px auto 0;

  & img {
    max-height: 82vh;
  }
`;

export const ProjectVideo = ({ video, title }) => (
  <VideoContainer>
    <Text style='Subheading'>Demo Video:</Text>
    <img src={video} alt={title} />
  </VideoContainer>
);
