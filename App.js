import React from 'react'
import { StyleSheet, Text, View, Animated } from 'react-native'
import Medical from './components/ViewScore'

export default class App extends React.Component {
  state = {
    isLoading: true
  }

  render() {
    const { isLoading } = this.state
    return (
      <View style={styles.container}>
        {isLoading ? (
          <Medical />
        ) : (
          <View>
            <Text>nQ Medical</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
