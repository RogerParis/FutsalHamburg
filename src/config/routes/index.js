import React from 'react';
import { StackNavigator, TabNavigator, NavigationActions } from 'react-navigation';

import { colors } from '../../config/styles';
import TabBarButton from '../../components/tabBarButton';
import { TournamentsNavigationStack } from '../../screens/tournaments/tournamentsNavigationStack';
import { ClubNavigationStack } from '../../screens/club/clubNavigationStack';
import { ContactNavigationStack } from '../../screens/contact/contactNavigationStack';

const MainScreen = TabNavigator({
  tournaments: {
    screen: TournamentsNavigationStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <TabBarButton
          image="ios-football"
          color={tintColor}
        />
      ),
    }
  },
  club: {
    screen: ClubNavigationStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <TabBarButton
          image="ios-people"
          color={tintColor}
        />
      ),
    }
  },
  contact: {
    screen: ContactNavigationStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <TabBarButton
          image="ios-contact"
          color={tintColor}
        />
      ),
    }
  },
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: true,
    lazy: true,
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      pressColor: colors.yellow,
      inactiveTintColor: colors.white,
      activeTintColor: colors.yellow,
      indicatorStyle: {
        backgroundColor: colors.yellow,
      },
      style: {
        backgroundColor: colors.black,
      },
    },
    navigationOptions: ({ navigation }) => ({
      tabBarOnPress: (tab, jumpToIndex) => {
        console.log('TAB: ', tab);
        if (tab.focused) { // if tab currently focused tab
          if (tab.route.index !== 0) { // if not on first screen of the StackNavigator in focused tab.
            navigation.dispatch(NavigationActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: tab.route.routes[0].routeName }) // go to first screen of the StackNavigator
              ]
            }));
          }
        } else {
          jumpToIndex(tab.index); // go to another tab (the default behavior)
        }
      }
    }),
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
