import React from 'react';
import { View, StatusBar } from 'react-native';

import { colors } from '../../config/styles';

export function screenContaining(ScreenComponent, params = {}) {
  const containingParams = {
    ...params,
  };

  const WrappedScreen = (props) => {
    return (
      <View style={[{ flex: 1 }, props.style]}>
        <StatusBar
          barStyle={'light-content'}
        />
        <ScreenComponent {...props} />
      </View>
    );
  };

  const wrappedScreenNavigationOption = {
    headerStyle: { backgroundColor: colors.black },
    headerTitleStyle: { color: colors.yellow },
    headerBackTitleStyle: { color: 'transparent' },
  };

  if (typeof ScreenComponent.navigationOptions === 'function') {
    WrappedScreen.navigationOptions = (navigationOptionsParams) => ({
      ...wrappedScreenNavigationOption,
      ...ScreenComponent.navigationOptions(navigationOptionsParams)
    });
  } else {
    WrappedScreen.navigationOptions = {
      ...wrappedScreenNavigationOption,
      ...ScreenComponent.navigationOptions
    };
  }

  return WrappedScreen;
}
