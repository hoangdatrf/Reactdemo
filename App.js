import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Travel from './navigation/Travel'; 

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Ahihi</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
