export interface IState {
  episodes: IEpisode[],
  favorites: IEpisode[],
  text: string
}

export interface IFetchAction {
  type: 'FETCH_DATA',
  payload: IEpisode[],
}
export interface IEpisodeAction {
  type: 'FAV' | 'UNFAV',
  payload: IEpisode
}

export interface IEpisode {
  airdate: string
  airstamp: string
  airtime: string
  id: number
  image: {
    medium: string
    original: string
  }
  name: string
  number: number
  runtime: number
  season: number
  summary: string
  url: string
  _links: {
    self: {
      href: string
    }
  }
}
