import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import {
  MenuScreen,
  RegisterDrinkScreen,
  StockControlScreen,
} from '../screens';

const Tab = createBottomTabNavigator();

function AppTabNav(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Novo" component={RegisterDrinkScreen} />
        <Tab.Screen name="Cardápio" component={MenuScreen} />
        <Tab.Screen name="Estoque" component={StockControlScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppTabNav;
