import { Text, View, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'

import ThingsContext from './thingsContext'


const TopButtons = ( {styles, buttonHandler} ) => {
    const buttons = [
        {text:"C", id:"c", color:"#ba6735"},
        {text:"(", id:"(", color:"#cea041"},
        {text:")", id:")", color:"#cea041"},
        // {text:"÷", id:"÷"},
    ]
    const clearScreenItems = useContext(ThingsContext)

  return (
    <View style={styles.container}>
         {buttons.map(button =>{
          if(button.id ==="c"){
            return <TouchableOpacity key={button.id} style={styles.button} onPressIn={()=>{
              clearScreenItems()
            }}>
            <Text style={{color:button.color,fontSize:40}}>
                {button.text}
            </Text>
        </TouchableOpacity>
          }else{
            return <TouchableOpacity key={button.id} style={styles.button} onPressIn={()=>{
              buttonHandler(button.id)
            }}>
            <Text style={{color:button.color,fontSize:40}}>
                {button.text}
            </Text>
        </TouchableOpacity>
          }
        
      })}
    </View>
  )
}

export default TopButtons
