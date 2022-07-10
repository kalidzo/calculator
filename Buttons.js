import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import TopButtons from "./TopButtons";
import BottomButtons from "./BottomButtons";
import VerticalButtons from "./VerticalButtons";

const Buttons = ( { buttonHandler, backSpaceHandler, equalHandler } ) => {
  const buttons = [
    { text: "7", id: 7 },
    { text: "8", id: 8 },
    { text: "9", id: 9 },
    { text: "4", id: 4 },
    { text: "5", id: 5 },
    { text: "6", id: 6 },
    { text: "1", id: 1 },
    { text: "2", id: 2 },
    { text: "3", id: 3 },
    // { text: "0", id: 0 },
  ];
  return (
    <View style={{ display: "flex", flexDirection: "row" }}>
      <View style={{ display: "flex", flexDirection: "column" }}>
        <TopButtons styles={styles} buttonHandler={buttonHandler} />
        <View style={styles.container}>
          {buttons.map((button) => {
            return (
              <TouchableOpacity key={button.id} style={styles.button} onPressIn={()=>{
                buttonHandler(button.id)
              }}>
                <Text style={{ color: "#ece0c9", fontSize: 40 }}>
                  {button.text}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <BottomButtons styles={styles} buttonHandler={buttonHandler} backSpaceHandler={backSpaceHandler}/>
      </View>
      <VerticalButtons styles={styles} buttonHandler={buttonHandler} equalHandler={equalHandler}/>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    padding: 0,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: 285,
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
    marginTop: 7,
    height: 85,
    width: 85,
    marginVertical: "auto",
    borderRadius: 42.5,
    backgroundColor: "#2e2b32",
  },
});
