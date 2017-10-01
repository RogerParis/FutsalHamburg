import * as firebase from 'firebase';
import { snapshotToArray } from '../../lib/converter';

export const loadTeams = () => {
  return firebase.database().ref('/teams').once('value')
  .then((snapshot) => {
    return snapshotToArray(snapshot);
  });
};
