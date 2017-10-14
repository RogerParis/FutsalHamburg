import * as CoachesApi from '../../services/api/coachesApi';

export const loadCoaches = () => {
  return CoachesApi.loadCoaches()
    .then(coaches => {
      return coaches;
    });
};
