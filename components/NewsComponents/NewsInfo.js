import React from "react";
import { Text, View, StyleSheet } from "react-native";

function NewsInfo(props) {
  return (
    <View>
      <Text style={styles.title}>{props.info.title}</Text>
      <Text style={styles.description}>{props.info.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "#0bab64",
  },
  description: {
    fontSize: 10,
    color: "#0bab64",
  },
});

export default NewsInfo;
