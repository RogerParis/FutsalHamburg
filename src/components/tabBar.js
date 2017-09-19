import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TabBarBottom, NavigationActions } from 'react-navigation';

import { colors } from '../config/styles';

import TabBarButton from './tabBarButton';

class TabBar extends TabBarBottom {
  onTabBarButtonPressed(index, routeName) {
    const { navigation, navigationState, jumpToIndex } = this.props;
    if (navigationState.index === index) {
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName })
        ]
      });
      navigation.dispatch(resetAction);
    } else {
      jumpToIndex(index);
    }
  }

  render() {
    const { navigation, navigationState, style } = this.props;
    return (
      <View style={[styles.tabBarContainer, style]}>
        <TabBarButton
          image={navigationState.index === 0 ? 'ios-football' : 'ios-football-outline'}
          onPress={() => this.onTabBarButtonPressed(0, 'table')}
        />
        <TabBarButton
          image={navigationState.index === 1 ? 'ios-people' : 'ios-people-outline'}
          onPress={() => this.onTabBarButtonPressed(1, 'team')}
        />
        <TabBarButton
          image={navigationState.index === 2 ? 'ios-contact' : 'ios-contact-outline'}
          onPress={() => this.onTabBarButtonPressed(2, 'contact')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabBarContainer: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.black
  },
});

export default TabBar;
