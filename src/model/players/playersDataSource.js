import * as PlayersApi from '../../services/api/playersApi';

export const loadPlayers = () => {
  return PlayersApi.loadPlayers()
    .then(players => {
      console.log('Players: ', players);
      return players;
    });
};
