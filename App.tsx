import React from 'react';
import { SafeAreaView } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { HomeScreen } from './src/screens';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </SafeAreaView>
  );
}
export default App;
