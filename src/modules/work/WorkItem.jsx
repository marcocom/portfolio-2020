import { WorkCard, WorkImage } from '@src/modules/work'
import { media } from '@src/utils'
import React from 'react'
import styled, { css } from 'styled-components'

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

const StyledWorkItem = styled.article`
  margin-bottom: 90px;
  width: 100%;
  display: grid;
  ${(props) => (props.index % 2 === 0 ? evenStyles : oddStyles)};
  align-items: center;
  border-radius: 2em;
  background: ${({theme}) => theme.color.imgBg};

  /*background: linear-gradient(
    0deg,
    ${({theme}) => theme.color.imgBg} 0%,
    ${({theme}) => theme.color.imgBg} 100%
   );*/


  ${media.down.xs} {
    border-radius: unset;
  }

  ${media.down.lg} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas: 'image' 'card';
    //background: ${(props) => props.background};
    border-radius: 3em;
    margin-top: 0;
    margin-bottom: 20vh;
  }
`;

export const WorkItem = ({ project, index }) => {
  const { title, subtitle, description, link, hero, year, background } = project;

  return (
    <StyledWorkItem index={index}>
      <WorkImage image={hero} title={title} />
      <WorkCard title={title} subtitle={subtitle} description={description} link={link} year={year}/>
    </StyledWorkItem>
  )
};
