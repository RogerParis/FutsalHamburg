import * as TeamsApi from '../../services/api/teamsApi';
import { coachFromApi } from '../coaches';
import { playerFromApi } from '../players';

export const loadTeams = () => {
  return TeamsApi.loadTeams()
    .then(teams => {
      return teams;
    });
};

export const loadTeamStaff = (key) => {
  return TeamsApi.loadTeamStaff(key)
    .then(coaches => {
      return coaches.map(coach => coachFromApi(coach));
    });
};

export const loadTeamPlayers = (key) => {
  return TeamsApi.loadTeamPlayers(key)
    .then(players => {
      return players.map(player => playerFromApi(player));
    });
};
