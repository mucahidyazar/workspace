import {
  GET_GAMES,
  GET_TOP_GAMES,
  GET_BEST_OFFER_GAMES,
  GET_MOST_PLAYED_GAMES
} from '../types';
import GamesData from '../../dummy/games';

const top3Games = GamesData.sort((a, b) => {
  if (a.ordered * a.played * a.point > b.ordered * b.played * b.point) {
    return -1
  } else {
    return 1
  }
});

const initialState = {
  games: GamesData,
  topGames: [top3Games[0], top3Games[1], top3Games[2]],
  bestOfferGames: GamesData.sort((a, b) => {
    if (a.price / a.promotion > b.price / b.promotion) {
      return 1
    } else {
      return -1
    }
  }),
  mostPlayedGames: GamesData.sort((a, b) => {
    if (a.played > b.played) {
      return -1
    } else {
      return 1
    }
  })
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default mainReducer;