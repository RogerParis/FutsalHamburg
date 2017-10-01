import { StackNavigator } from 'react-navigation';

import ClubScreen from './clubScreen';
import TeamScreen from '../team/teamScreen';

export const ClubNavigationStack = StackNavigator({
  club: {
    screen: ClubScreen
  },
  team: {
    screen: TeamScreen
  }
});
