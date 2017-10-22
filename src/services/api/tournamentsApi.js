import * as firebase from 'firebase';
import { snapshotToArray } from '../../lib/converter';

export const loadTournaments = () => {
  return firebase.database().ref('/tournaments').once('value')
  .then((snapshot) => {
    return snapshotToArray(snapshot);
  });
};
