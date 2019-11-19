import React from 'react';
import {StyleSheet, View, StatusBar, Platform} from 'react-native';
import {Provider} from 'react-redux';
import {ApplicationProvider} from 'react-native-ui-kitten';
import {mapping, light as lightTheme} from '@eva-design/eva';
import './i18n';
import AppNavigator from './src/navigation/AppNavigator';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </View>
      </ApplicationProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
