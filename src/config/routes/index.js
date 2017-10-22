import { StackNavigator, TabNavigator } from 'react-navigation';

import { colors } from '../../config/styles';
import TabBar from '../../components/tabBar';
import { TournamentsNavigationStack } from '../../screens/tournaments/tournamentsNavigationStack';
import { ClubNavigationStack } from '../../screens/club/clubNavigationStack';
import { ContactNavigationStack } from '../../screens/contact/contactNavigationStack';

const MainScreen = TabNavigator({
  tournaments: {
    screen: TournamentsNavigationStack,
  },
  club: {
    screen: ClubNavigationStack,
  },
  contact: {
    screen: ContactNavigationStack,
  },
}, {
    tabBarComponent: TabBar,
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    lazy: true,
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      pressColor: colors.yellow,
      indicatorStyle: {
        backgroundColor: colors.yellow,
      },
      style: {
        backgroundColor: colors.black,
      },
    }
  });

// In this MainStack should be all modal screens that cover the whole screen
export const MainStack = StackNavigator({
  main: {
    screen: MainScreen
  },
}, {
    mode: 'modal',
    headerMode: 'none',
  });