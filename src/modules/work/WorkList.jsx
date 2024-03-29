import React from 'react'

import { projectList } from '@src/data';
import {IoMdSearch, IoMdClose} from 'react-icons/io';
import { WorkItem } from './';
import styled, {css} from 'styled-components';
import { GlobalStateContext, GlobalDispatchContext } from '@src/context';
import {GlobalStateActions} from '@src/reducers';
import {SortButton} from '@src/ui/components';
import {media} from '@src/utils';

const StyledSearchDiv = styled.div`
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
  & input {
    padding: 0 40px 0 0;
    background: ${({theme}) => theme.color.bgCard};
    display: block;
    width: 100%;
    height: 35px;
    border-radius: 20px;
    border: none;
    box-shadow: ${({theme}) => theme.shadows.insetShadow};
    color: ${({theme}) => theme.color.primary};
    font-size: 1em;
    text-indent: 1em;
    text-align: left;
    pointer-events: all;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    & :focus {
      outline: none;
      border: 1px solid ${({theme}) => theme.color.primary};
    }
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

    & input {
      border: 1px solid ${({theme}) => theme.color.primary};
    }
  }
`;

const StyledUL = styled.ul`
  padding: 0;
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
    // alphebetical
    // .sort((a, b) => (workSorting === 'asc' ? a.title - b.title : b.title - a.title));
    // chronological
    .sort((a, b) => (workSorting === 'asc' ? a.year - b.year : b.year - a.year));
  };

  const inputProps = {
    placeholder: "Search by Title, Description, Year",
    value: searchFilterString,
    onChange: searchInputHandler,
  };
  return (
    <>

      <StyledSearchDiv>
        <input onChange={searchInputHandler} maxLength="20"
               type="text"
               value={searchFilterString}
               placeholder="Search by Title, Description, Year" />
        {/*<AutoSuggest inputProps={inputProps}
                     suggestions={projectList} alwaysRenderSuggestions={true} />*/}
        {
          searchFilterString ?
            <IoMdClose onClick={searchCloseHandler} className="close-btn" /> :
            <IoMdSearch />
        }
      </StyledSearchDiv>
      <SortButton />
      <StyledUL>
      {
        filterSortData().map((project, index) => (
            <WorkItem project={project} index={index} key={project.title}/>
          ))
      }
      </StyledUL>
    </>
  )
};
