import * as firebase from 'firebase';
import { snapshotToArray } from '../../lib/converter';

export const loadPlayers = () => {
  return firebase.database().ref('/players').once('value')
  .then((snapshot) => {
    return snapshotToArray(snapshot);
  });
};
