import { StyleSheet, Text, View } from "react-native";
import React, { useState, useRef } from "react";
import { ScrollView } from "react-native";

const Screen = ({ screenItems }) => {
  const [width, setWidth,] = useState()
  const [offset, setOffset] = useState(0);
  const scrollViewRef = useRef();
  const slowlyScrollDown = () => {
    const y = offset + 80;
    scrollViewRef.current.scrollTo({ x: 0, y, animated: false });
    setOffset(y);
    setWidth(screenItems.length*50)
  };
  return (
    <ScrollView
      ref={scrollViewRef}
      style={styles.text}
      onContentSizeChange={() => {
        slowlyScrollDown();
      }}
    >
      <Text
        style={{
          fontSize: 70,
          color: "#ece0c9",
          paddingTop: 200,
          width: "100%",
          textAlign: "right",
          paddingRight: 20,
        }}
      >
        {screenItems.map((element) => {
            return element;
        })}
      </Text>
    </ScrollView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  text: {
    display: "flex",
    width: "100%",
    height: "100%",
    marginTop: "10%",
  },
});
