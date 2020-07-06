import React, {FunctionComponent, ReducerAction, useEffect, useReducer, useState} from 'react';
import {IEpisode, Store} from './Store'
import videoListReducer from './reducer';
import './style.css'


const VideoList:FunctionComponent = (props):JSX.Element => {
  const {state, dispatch} = React.useContext(Store);

  useEffect(() => {
    if(!state.episodes.length)
      fetchDataAction();
  }, []);

const fetchDataAction = async () => {
  const url = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
  const data = await fetch(url);
  const dataJSON = await data.json();
  return dispatch({
    type: 'FETCH_DATA',
    payload: dataJSON._embedded.episodes
  })
};

//experiments
const countreducer = (state = 0, action:ReducerAction<any>) => {
  console.log(action);

  switch (action) {
    case 'ADD':
      return state+1;
    case 'SUB':
      return state-1;
    case 'RES':
      return state=0;
    default:
      return state;
  }
};
const [simplecount, modCount] = useState(0);
const [reducercount, changeCount] = useReducer(countreducer, 0);

return (
    <div className="component-container">
      <h1>Episodes</h1>
      <p>pick your favorite</p>
      {console.log('store:', state)}
      <main style={{display: 'flex', flexDirection:'row', flexWrap: 'wrap'}}>
        {
          state.episodes.map((episode:IEpisode) => {
            return (
              <section key={episode.id} style={{display: 'block', marginRight: '10px'}}>
                <img src={episode.image.medium} alt={episode.name}/>
                <h4>{episode.name}</h4>
                <p>
                  Season: {episode.season} Number: {episode.number}
                </p>
                <button onClick={() => dispatch({type:'FAV', payload:episode })}>Favorite</button>
              </section>
            )
          })
        }
      </main>

      <h6>reducer test</h6>
      <div>count:{reducercount}</div>
      <button onClick={() => changeCount('ADD')}>+</button>
      <button onClick={() => changeCount('SUB')}>-</button>
      <button onClick={() => changeCount('RES')}>reset</button>

    </div>
  )
};

export default VideoList;
