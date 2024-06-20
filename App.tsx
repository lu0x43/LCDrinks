import React from 'react';
import { SafeAreaView } from 'react-native';

import { AppTabNav } from './src/routes';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <AppTabNav />
    </SafeAreaView>
  );
}
export default App;
