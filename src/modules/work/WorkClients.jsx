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
        grayscale(0);
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

  ${media.down.lg} {
    grid-template-columns: repeat(8, 1fr);
  }
  ${media.down.md} {
    grid-template-columns: repeat(6, 1fr);
    margin: 40px auto 30px;
  }
  ${media.down.sm} {
    grid-template-columns: repeat(5, 1fr);
  }
  ${media.down.xs} {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const WorkClients = ({scrollCall}) => {
  const {theme} = useTheme();
  const clickHandler = (id) => {
    console.log(id);
    scrollCall(id);
  };

  return (
    <StyledGrid>
      {clientList.map((client, index) => (
        <StyledItem onClick={() => clickHandler(client.anchor)} key={index} colorTheme={theme} invert={true}>
          <img src={client.image} alt={client.anchor}/>
        </StyledItem>
      ))}
    </StyledGrid>
  )
};
