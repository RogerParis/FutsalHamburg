import * as TeamsApi from '../../services/api/teamsApi';
import { coachFromApi } from '../coaches';
import { playerFromApi } from '../players';

export const loadTeams = () => {
  return TeamsApi.loadTeams()
    .then(teams => {
      return teams;
    });
};

export const loadCoachingStaff = (key) => {
  return TeamsApi.loadCoachingStaff(key)
    .then(coaches => {
      return coaches.map(coach => coachFromApi(coach));
    });
};

export const loadPlayers = (key) => {
  return TeamsApi.loadPlayers(key)
    .then(players => {
      return players.map(player => playerFromApi(player));
    });
};
