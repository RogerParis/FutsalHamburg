import * as firebase from 'firebase';

export const loadLocations = () => {
  return firebase.database().ref('/locations').once('value')
  .then((snapshot) => {
    return snapshot.val();
  });
};
