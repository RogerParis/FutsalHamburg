import * as PlayersApi from '../../services/api/playersApi';

export const loadPlayers = () => {
  return PlayersApi.loadPlayers()
    .then(players => {
      return players;
    });
};
