import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Medical = () => {
  return (
  <View style={styles.container}>
    <View style={styles.headerContainer}>
    <Text style={styles.headerText}> nQ Medical </Text>
    </View>
    <View style={styles.bodyContainer}>
    <Text style={styles.dataText}> This is where the data goes </Text>
    </View>
  </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    // justifyContent: 'flex-end',
    // paddingLeft: 25,
    // marginBottom: 40
  }
})

export default Medical
