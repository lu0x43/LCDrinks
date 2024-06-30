import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { AppTabNav } from './src/routes';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <AppTabNav />
    </SafeAreaView>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
