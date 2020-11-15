import React from 'react'
import styled from 'styled-components'
import {Text} from '@src/ui/components'
import ReactPlayer from 'react-player';

const VideoContainerStyle = styled.section`
  width: 100%;
  margin: 20px 0;
  //display: grid;
  //place-items: center center;
`;

const VideoListStyle = styled.ul`
  width: 100%;
  display: flex;
  flex-flow: nowrap;
  flex-direction: row;
  list-style: none;
  overflow-x: auto;
  overflow-y: hidden;
  & li {
    display: inline-block;
    margin: 0 5px 0 0;

    & .vimeo {
      margin: 0 auto;
      max-width: 400px;
    }
  }
`;
const carouselProps = () => ({
  showArrows: true,
  showStatus: true,
  showIndicators: false,
  infiniteLoop: true,
  showThumbs: false,
  useKeyboardArrows: false,
  autoPlay: true,
  stopOnHover: true,
  swipeable: true,
  dynamicHeight: true,
  emulateTouch: true,
  thumbWidth: 150,
  selectedItem: 0,
  interval: 4000,
  transitionTime: 700,
  swipeScrollTolerance: 5,
});
const playerConfig = {
  light: true,
  playing: false,

  vimeo: {
    frameborder: 0,
    allowfullscreen: true,
    maxwidth: 600,
  }
};
const pluralize = (count) => count > 1 ? 's' : '';

export const ProjectVideo = ({ videos }) => (
  <VideoContainerStyle>
    <Text type='heading'>{`Demo Video${pluralize(videos.length)}:`}</Text>
    <VideoListStyle>
      {
        videos.map((video, i) => <li key={i}><ReactPlayer url={video} config={playerConfig}/></li>)
      }
    </VideoListStyle>

  </VideoContainerStyle>
);
