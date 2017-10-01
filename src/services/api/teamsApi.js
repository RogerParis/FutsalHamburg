import * as firebase from 'firebase';
import { snapshotToArray } from '../../lib/converter';

export const loadTeams = () => {
  return firebase.database().ref('/teams').once('value')
  .then((snapshot) => {
    return snapshotToArray(snapshot);
  });
};

export const loadCoachingStaff = (key) => {
  return firebase.database().ref(`/coaches/${key}`).once('value')
  .then((snapshot) => {
    return snapshotToArray(snapshot);
  });
};

export const loadPlayers = (key) => {
  return firebase.database().ref(`/players/${key}`).once('value')
  .then((snapshot) => {
    return snapshotToArray(snapshot);
  });
};
