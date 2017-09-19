import { StackNavigator } from 'react-navigation';

import TableScreen from './tableScreen';

export const TableNavigationStack = StackNavigator({
  table: {
    screen: TableScreen
  },
  
});
