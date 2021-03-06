import React from 'react'

import { clientList } from '@src/data';
import styled from 'styled-components';
import {media} from '@src/utils';
import {useTheme} from '@src/context'

const StyledItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: all;
  cursor: pointer;
  background-color: ${({theme}) => theme.color.imgBg};

  box-shadow: ${({theme}) => theme.shadows.insetShadow};
  border-radius: 6px;
  padding: 10px;

  & img {
    height: 45px;
    filter: ${({colorTheme, invert}) => (colorTheme === 'dark' && invert ? 'invert(1)' : '')}
      grayscale(100%);
    //transition: 150ms filter linear;

    ${media.down.md} {
      filter: ${({colorTheme, invert}) => (colorTheme === 'dark' && invert ? 'invert(1)' : '')}
        grayscale(100%);
    }
    ${media.down.xs} {
      height: 35px;
    }
  }

  &:hover {
    & img {
      filter: invert(0) grayscale(0);
    }
  }
`;


const StyledGrid = styled.div`
  width: 90%;
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-gap: 30px;
  margin: 40px auto;
  background: ${({theme}) => theme.color.bg};
  transition: ${({theme}) => theme.hoverTransition};


  ${media.down.lg} {
    grid-template-columns: repeat(8, 1fr);
  }
  ${media.down.md} {
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 20px;
    margin: 10px auto 30px;
  }
  ${media.down.sm} {
    grid-gap: 10px;
    grid-template-columns: repeat(5, 1fr);
  }
  ${media.down.xs} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const WorkClients = ({scrollCall, searchCall}) => {
  const {theme} = useTheme();
  const clickHandler = (id, meta) => {
    // console.log(id);
    searchCall(meta);
    scrollCall(id);
  };

  return (
    <StyledGrid>
      {
        clientList.map((client, index) => (
          <StyledItem onClick={() => clickHandler(client.id, client.meta)} key={index} colorTheme={theme} invert={true}>
            <img src={client.image} alt={client.id}/>
          </StyledItem>
        ))
      }
    </StyledGrid>
  )
};
