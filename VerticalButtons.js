import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const VerticalButtons = ({ buttonHandler, equalHandler}) => {
  const buttons = [
    { text: "÷", id: "÷", color: "#cea041", backgroundColor: "#3c3940" },
    { text: "×", id: "×", color: "#cea041", backgroundColor: "#3c3940" },
    { text: "-", id: "-", color: "#cea041", backgroundColor: "#3c3940" },
    { text: "+", id: "+", color: "#cea041", backgroundColor: "#3c3940" },
    { text: "=", id: "=", color: "#ffe68e", backgroundColor: "#fff" },
  ];
  return (
    <View style={styles.container}>
      {buttons.map((button) => {
        if (button.backgroundColor === "#3c3940") {
          return (
            <TouchableOpacity key={button.id} style={styles.button} onPressIn={()=>{
              buttonHandler(button.id)
            }}>
              <Text style={{ color: button.color, fontSize: 40 }}>
                {button.text}
              </Text>
            </TouchableOpacity>
          );
        }else{
            return (
                <TouchableOpacity key={button.id} style={styles.equal} onPress={()=>{
                  // buttonHandler(button.id)
                  equalHandler()
                }}>
                  <Text style={{ color: button.color, fontSize: 40 }}>
                    {button.text}
                  </Text>
                </TouchableOpacity>
              );
        }
      })}
    </View>
  );
};

export default VerticalButtons;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    // justifyContent:"flex-start"
    // flexWrap: "wrap",
    width: "20%",
    // height:"75%",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // marginLeft: 5,
    marginTop: 7,
    height: 85,
    width: 85,
    // marginVertical: "auto",
    borderRadius: 42.5,
    backgroundColor: "#2e2b32",
  },
  equal:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // marginLeft: 5,
    marginTop: 7,
    height: 85,
    width: 85,
    // marginVertical: "auto",
    borderRadius: 42.5,
    backgroundColor: "#eea70d",
  }
});
