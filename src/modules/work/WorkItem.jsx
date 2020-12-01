import { WorkCard, WorkImage } from '@src/modules/work'
import { media } from '@src/utils'
import React, {useEffect, useRef} from 'react';
import styled, { css } from 'styled-components'
import useIntersectionObserver from '../../hooks/useIntersectionAPI';

const evenStyles = css`
  grid-template-columns: 2fr 1fr;
  grid-template-areas: 'image card';

  // background: linear-gradient(
  //   to right,
  //   ${(props) => props.background} 0%,
  //   ${(props) => props.background} 75%,
  //   rgba(0, 0, 0, 0) 75%,
  //   rgba(0, 0, 0, 0) 100%
  // );

`;
const oddStyles = css`
  grid-template-columns: 1fr 2fr;
  grid-template-areas: 'card image';
`;

const StyledWorkItem = styled.li`
  margin-bottom: 90px;
  width: 100%;
  display: grid;
  ${(props) => (props.index % 2 === 0 ? evenStyles : oddStyles)};
  align-items: center;
  border-radius: 2em;

  box-shadow: ${({theme}) => theme.shadows.insetShadow} ;
  background: ${({theme}) => theme.color.imgBg};

  /*background: linear-gradient(
    0deg,
    ${({theme}) => theme.color.imgBg} 0%,
    ${({theme}) => theme.color.imgBg} 100%
   );*/



  ${media.down.lg} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas: 'image' 'card';
    //background: ${(props) => props.background};
    border-radius: 3em;
    margin-top: 0;
    margin-bottom: 100px;
  }
  ${media.down.sm} {
    border-radius: unset;
  }
`;

export const WorkItem = ({ project, index }) => {
  const { title, subtitle, description, link, hero, year, role } = project;
  const elementRef = useRef(null);
  const [inView, entry] = useIntersectionObserver(elementRef, {threshold: 0});

  //log everytime state is updated
  /*
  useEffect(() => {
    if(inView) console.log(`WorkItem:${index} in-view:${inView}`);
  }, [inView]);
  */

  return (
    <StyledWorkItem index={index} ref={elementRef} id={link.replace(/\/+/g, '')}>
      <WorkImage image={hero} title={title} inview={inView} link={link} />
      <WorkCard title={title} subtitle={subtitle} description={description} link={link} year={year} role={role} />
    </StyledWorkItem>
  )
};
