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

const toggleFavAction = (episode:IEpisode) => {
  state.favorites.includes(episode) ?
    dispatch({type:'UNFAV', payload: episode}) :
    dispatch({type: 'FAV', payload: episode});
};
const urlAction = (url: string) => window.open(url, '_blank');

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
    </div>
  )
};

export default VideoList;
