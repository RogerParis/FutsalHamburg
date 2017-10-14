import * as firebase from 'firebase';
import { snapshotToArray } from '../../lib/converter';

export const loadCoaches = () => {
  return firebase.database().ref('/coaches').once('value')
  .then((snapshot) => {
    return snapshotToArray(snapshot);
  });
};
