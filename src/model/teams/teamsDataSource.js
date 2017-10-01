import * as TeamsApi from '../../services/api/teamsApi';

export const loadTeams = () => {
  return TeamsApi.loadTeams()
    .then(teams => {
      return teams;
    });
};
