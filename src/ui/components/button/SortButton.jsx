
import React from 'react';
import { IoMdArrowRoundUp, IoMdArrowRoundDown } from 'react-icons/io';
import styled from 'styled-components';
import { GlobalStateContext, GlobalDispatchContext } from '@src/context';
import { GlobalStateActions } from '@src/reducers/reduceGlobal';
import { media } from '@src/utils'

const StyledBtn = styled.button`
  border: none;
  background: none;
  transition: ${({ theme }) => theme.hoverTransition};
  padding: 0;
  cursor: pointer;
  outline: none;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: relative;
  margin: 6px auto 5px;
  float: right;

  & svg {
    display: block;
    margin-top: 3px;
    fill: ${({theme}) => theme.color.primary};
  }

  &:hover {
    .txt{
      color: ${({theme}) => theme.color.text};
    }

    & svg {
      fill: ${({theme}) => theme.color.text};
    }
  }

  & .txt {
    position: relative;
    top: 2px;
    font-size: 1.3em;
    width: auto;
    text-align: center;
    white-space: nowrap;
    opacity: 1;
    margin: 0 10px;
    color: ${({ theme }) => theme.color.primaryDarkened};
  }

  & .txt {
    text-transform: lowercase;
  }

  & .asc {
    font-size: 24px;
    display: ${({sort}) => (sort === 'desc' ? 'none' : 'block')};
  }
  & .desc {
    font-size: 24px;
    display: ${({sort}) => (sort === 'asc' ? 'none' : 'block')};
  }

  ${media.down.sm} {
    //left: 50%;
    //transform: scale(0.75);
    display: flex;
    float: none;
    & .txt {
      font-size: 1em;
      top: 4px;
    }

    &:hover {
      & .txt {
        color: ${({theme}) => theme.color.primary}; //needed for touch-release issue

      }
      & svg {
        fill: ${({theme}) => theme.color.primary};
      }
    }
  }

`;

export const SortButton = () => {
  const { workSorting } = React.useContext(GlobalStateContext);
  const dispatch = React.useContext(GlobalDispatchContext);

  const toggle = () => {
    dispatch({ type: GlobalStateActions.TOGGLE_SORTING });
    console.log('TOGGLE SORTING :', workSorting);
  };

  return (
    <StyledBtn onClick={toggle} sort={workSorting}>
      <IoMdArrowRoundUp className='asc'/> <IoMdArrowRoundDown className='desc'/>
      <span className="txt">Sorted by: {workSorting === 'asc' ? 'Ascending ' : 'Descending'} years</span>
      <IoMdArrowRoundUp className='asc' /> <IoMdArrowRoundDown className='desc' />
    </StyledBtn>
  )
};
