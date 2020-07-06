import React, {FunctionComponent, ReducerAction, useEffect, useReducer, useState} from 'react';
import {Store} from './Store'
import {IEpisode, IEpisodeAction, IFetchAction} from './model'
import './style.css'


const VideoList:FunctionComponent = ():JSX.Element => {
  const {state, dispatch} = React.useContext(Store);

  useEffect(() => {
    if(!state.episodes.length) fetchDataAction();
  }, []);

const fetchDataAction = async () => {
  const url = 'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';
  const data = await fetch(url);
  const dataJSON = await data.json();
  return dispatch<IFetchAction>({
    type: 'FETCH_DATA',
    payload: dataJSON._embedded.episodes
  })
};

const [filtered, setFilter] = useState(false);

const toggleFavAction = (episode:IEpisode):IEpisodeAction => {
  state.favorites.includes(episode) ?
    dispatch({type:'UNFAV', payload: episode}) :
    dispatch({type: 'FAV', payload: episode});
};
const urlAction = (url: string) => window.open(url, '_blank');

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
      <button onClick={() => setFilter(!filtered)}>{filtered ? `UnFilter Favs` : `Filter Favs`}</button>
      <main style={{display: 'flex', flexDirection:'row', flexWrap: 'wrap'}}>
        {
          state[!filtered ? 'episodes' : 'favorites'].map((episode:IEpisode):JSX.Element => {
            return (
              <section key={episode.id} style={{display: 'block', marginRight: '10px'}}>
                <a onClick={() => urlAction(episode.url)}><img src={episode.image.medium} alt={episode.name}/>
                  <h4>{episode.name}</h4></a>
                <p>
                  Season: {episode.season} Number: {episode.number}
                </p>
                <button onClick={() => toggleFavAction(episode)}>Favorite</button>
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
