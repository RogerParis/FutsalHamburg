import { StackNavigator, TabNavigator } from 'react-navigation';

import { colors } from '../../config/styles';
import TabBar from '../../components/tabBar';
import { TableNavigationStack } from '../../screens/table/tableNavigationStack';
import { TeamNavigationStack } from '../../screens/team/teamNavigationStack';
import { ContactNavigationStack } from '../../screens/contact/contactNavigationStack';

const MainScreen = TabNavigator({
  table: {
    screen: TableNavigationStack,
  },
  team: {
    screen: TeamNavigationStack,
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