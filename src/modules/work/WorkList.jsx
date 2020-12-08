import React from 'react'

import { projectList } from '@src/data';
import {IoMdSearch, IoMdClose} from 'react-icons/io';
import { WorkItem } from './';
import styled from 'styled-components';
import { GlobalStateContext, GlobalDispatchContext } from '@src/context';
import {GlobalStateActions} from '@src/reducers';
import {SortButton} from '@src/ui/components';
import {media} from '@src/utils';



const StyledSearchInput = styled.div`
  display: inline-flex;
  flex-direction: row;
  position: relative;
  height: 40px;
  width: 350px;
  margin: 0 0 26px 0;
  float: left;


  & svg {
    height: 25px;
    width: 25px;
    display: inline-block;
    right: 10px;
    top: 5px;
    position: absolute;
    color: ${({theme}) => theme.color.text};
    cursor: pointer;
  }
  & :hover, & :focus-within {
   & svg {
      color: ${({theme}) => theme.color.primary};
   }
  }

  ${media.down.sm} {
    display: flex;
    width: 96%;
    float: none;

    margin: 10px auto 5px;
  }
`;

const StyledInput = styled.input`
  padding: 0 40px 0 0;
  background: ${({theme}) => theme.color.bgCard};
  display: block;
  width: 100%;
  border-radius: 20px;
  border: none;
  box-shadow: ${({theme}) => theme.shadows.insetShadow};
  color: ${({theme}) => theme.color.primary};
  font-size: 1em;
  text-indent: 1em;
  text-align: left;
  pointer-events: all;
  & :focus {
    outline: none;
    border: 1px solid ${({theme}) => theme.color.primary};
  }
`;
export const WorkList = () => {
  const { workSorting, searchFilterString } = React.useContext(GlobalStateContext);

  const dispatch = React.useContext(GlobalDispatchContext);

  const searchInputHandler = (e) => {
    const txt = e.currentTarget.value;
    dispatch({type: GlobalStateActions.SEARCH_INPUT, payload:txt});
  };
  const searchCloseHandler = (e) => {
    dispatch({type: GlobalStateActions.SEARCH_INPUT, payload: ''});
  };
  const filterSortData = () => {
    const tester = new RegExp(searchFilterString, 'ig');

    return [...projectList]
    .filter(obj => !searchFilterString.length ? true : // if no search string exists, filter none.
      ( //filter conditions
        obj.title.match(tester) ||
        obj.subtitle.match(tester) ||
        obj.year.toString() === searchFilterString
      )
    )
    .sort((a, b) => (workSorting === 'asc' ? a.year - b.year : b.year - a.year));

  };

  return (
    <>
      <StyledSearchInput>
        <StyledInput onChange={searchInputHandler} max-length="20" value={searchFilterString} placeholder="Search by Title, Description, Year"/>
        {
          searchFilterString ? <IoMdClose onClick={searchCloseHandler} className="close-btn" /> : <IoMdSearch />
        }
      </StyledSearchInput>
      <SortButton />
      {
        filterSortData().map((project, index) => (
            <WorkItem project={project} index={index} key={project.title}/>
          ))
      }
    </>
  )
};
