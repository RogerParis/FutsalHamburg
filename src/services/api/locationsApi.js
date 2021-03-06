import * as firebase from 'firebase';
import { snapshotToArray } from '../../lib/converter';

export const loadLocations = () => {
  return firebase.database().ref('/locations').once('value')
  .then((snapshot) => {
    return snapshotToArray(snapshot);
  });
};
