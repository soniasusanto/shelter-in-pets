import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-react-native";

class TFtest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isTfReady: false
    };
  }

  async componentDidMount() {
    // Wait for tf to be ready.
    await tf.ready();
    // Signal to the app that tensorflow.js can now be used.
    this.setState({
      isTfReady: true
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>tfjs.js is working!</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
});

export default TFtest