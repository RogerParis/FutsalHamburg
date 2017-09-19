import { StackNavigator } from 'react-navigation';

import ContactScreen from './contactScreen';

export const ContactNavigationStack = StackNavigator({
  contact: {
    screen: ContactScreen
  },
  
});
