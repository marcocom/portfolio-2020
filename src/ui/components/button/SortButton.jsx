
import React from 'react';
import { IoMdArrowUp, IoMdArrowDown } from 'react-icons/io';
import styled from 'styled-components';
import { GlobalStateContext, GlobalDispatchContext } from '@src/context';
import { GlobalStateActions } from '@src/reducers/reduceGlobal';
import { media } from '@src/utils'

const StyledBtn = styled.button`
  border: none;
  background: none;
  height: 60px;
  width: 250px;
  transition: ${({ theme }) => theme.hoverTransition};
  padding: 0;
  cursor: pointer;
  outline: none;
  display: block;
  position: absolute;
  right: 10px;
  top: 100px;

  & svg {
  display: block;
  float: right;
  margin-right: 10px;
    fill: ${({theme}) => theme.color.textSecondary};
  }

  &:hover {
    color: ${({ theme }) => theme.color.text};


    & svg {
      fill: ${({theme}) => theme.color.primary};
    }
    & .txt {
      transform: translateY(0);
      opacity: 1;
    }
    & .label {
      transform: translateY(-15px);
      opacity: 0;
    }

  }

  & .txt,
   & .label{
    position: absolute;
    width: 200px;
    top: 20px;
    right: 60px;
    pointer-events: none;
    text-align: right;
    opacity: 1;
    color: ${({ theme }) => theme.color.text};
    transition: transform 500ms ease-in-out, opacity 500ms ease-in-out;
  }

  & .txt {
    opacity: 0;
    transform: translateY(15px);
  }

  & .asc {
    font-size: 40px;
    display: ${({ sort }) => (sort === 'asc' ? 'none' : 'block')};
  }
  & .desc {
    font-size: 40px;
    display: ${({ sort }) => (sort === 'desc' ? 'none' : 'block')};
  }

  ${media.down.sm} {
    right: calc(50% - 90px);
    top: 0;
    //left: 50%;
    transform: scale(0.75);
    z-index: 11;
    position: fixed;
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
      <IoMdArrowUp className='desc' /> <IoMdArrowDown className='asc' />
      <span className="label">Sorting Order</span>
      <span className="txt">{workSorting === 'asc' ? 'Ascending ' : 'Descending'} Years</span>
    </StyledBtn>
  )
};
