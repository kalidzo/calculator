import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, {useContext} from "react";

const BottomButtons = ({ styles, buttonHandler, backSpaceHandler }) => {
  const buttons = [
    { text: ".", id: "." },
    { text: "0", id: "0" },
    { text: "b", id: "b" },
    // {text:"÷", id:"÷"},
  ];
  return (
    <View style={styles.container}>
      {buttons.map((button) => {
        if (button.id == "b") {
          return (
            <TouchableOpacity key={button.id} style={styles.button} onPressIn={()=>{
                backSpaceHandler()
            }}>
              <Image
                style={{ width: 40, height: 40 }}
                source={require("./images/back.png")}
              />
            </TouchableOpacity>
          );
        } else {
          return (
            <TouchableOpacity
              key={button.id}
              style={styles.button}
              onPressIn={() => {
                buttonHandler(button.id);
              }}
            >
              <Text style={{ color: "#ece0c9", fontSize: 40 }}>
                {button.text}
              </Text>
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );
};

export default BottomButtons;
