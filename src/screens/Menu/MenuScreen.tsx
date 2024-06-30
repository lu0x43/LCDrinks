import React from 'react';
import { View, Text } from 'react-native';

function MenuScreen(): React.JSX.Element {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Menu de Drinks</Text>
    </View>
  );
}

export default MenuScreen;
