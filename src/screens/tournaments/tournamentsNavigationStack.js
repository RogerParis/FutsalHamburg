import { StackNavigator } from 'react-navigation';

import TournamentsScreen from './tournamentsScreen';

export const TournamentsNavigationStack = StackNavigator({
  tournaments: {
    screen: TournamentsScreen
  },
  
});
