import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import RootNavigator from 'navigators/root';

const theme = {
  ...DefaultTheme,
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <RootNavigator />
    </PaperProvider>
  );
};

export default App;
