import { StackNavigator } from 'react-navigation';

import TeamScreen from './teamScreen';

export const TeamNavigationStack = StackNavigator({
  team: {
    screen: TeamScreen
  },
  
});
