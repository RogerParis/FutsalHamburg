import * as TournamentsApi from '../../services/api/tournamentsApi';

export const loadTournaments = () => {
  return TournamentsApi.loadTournaments()
    .then(tournaments => {
      return tournaments;
    });
};
