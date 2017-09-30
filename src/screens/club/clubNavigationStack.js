import { StackNavigator } from 'react-navigation';

import ClubScreen from './clubScreen';

export const ClubNavigationStack = StackNavigator({
  club: {
    screen: ClubScreen
  },
  
});
