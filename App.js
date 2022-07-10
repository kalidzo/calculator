import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Buttons from "./Buttons";
import Screen from "./Screen";
// import { useState } from 'react';
import { ThingsProvider } from "./thingsContext";

export default function App() {
  const [screenItems, setScreenItems] = useState([]);
  const buttonHandler = (newItem) => {
    let lelement = screenItems[screenItems.length - 1]; // last element of array
    if(((newItem == "+" || newItem == "-" || newItem=="÷" || newItem=="×"|| newItem==".") && (lelement=="+" ||lelement== "-" ||lelement== "÷" ||lelement=="×" || lelement=="."))){
      setScreenItems(screenItems);
    } else if((newItem=="0" && lelement=="÷")||(newItem=="." && screenItems.length==0)){
      setScreenItems(screenItems)
    }
    else{
      setScreenItems([...screenItems, newItem]);
      console.log(true);
    }
    
    // setScreenItems([eval(text)])
  };
  const clearScreenItems = () => {
    setScreenItems([]);
  };
  const backSpaceHandler = () => {
    let array = [...screenItems]; // make a separate copy of the array

    array.splice(-1, 1);
    setScreenItems(array);
  };
  const equalHandler = () => {
    let text = ''
    for (let index = 0; index < screenItems.length; index++) {
      let element = screenItems[index];
      if (element == '÷') {
        element = '/'
      } else if (element == '×'){
        element = '*'
      }
      text += element
    }
    setScreenItems([eval(text)])
  }
  return (
    <View style={styles.container}>
      <View style={styles.screen}>
        <Screen screenItems={screenItems} />
      </View>
      <View style={styles.buttons}>
        <ThingsProvider value={clearScreenItems}>
            <Buttons buttonHandler={buttonHandler} backSpaceHandler={backSpaceHandler} equalHandler={equalHandler} />
        </ThingsProvider>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // display: "flex",
    flex:1,
    flexDirection: "column",
    backgroundColor: "#242227",
    alignItems: "center",
  },
  screen: {
    position: "relative",
    top: 0,
    height: "40%",
    width: "100%",
  },
  buttons: {
    backgroundColor: "#242227",
    borderTopColor: "#3c3940",
    borderTopWidth: 0.5,
    height: "60%",
    width: "90%",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingTop: 10,
  },
});
