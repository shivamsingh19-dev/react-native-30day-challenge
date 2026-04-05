import React, {useState,JSX} from 'react'

import {
    View,
    Text,
    StyleSheet,
    useColorScheme,
    Button
} from 'react-native'

function AppPro():JSX.Element{
  const [message, setMessage] = useState("");

  const handlePress = ()=>{
    const nextText = message === "Hello ! 👋" ? "Goodbye! ✌️" : "Hello! 👋";
    setMessage(nextText)
  }
return(
<View style ={styles.container}>
  <Text>{message}</Text>
  <Button
       title ="Click Me"
      onPress ={handlePress}
        />
</View>
)
}

const styles = StyleSheet.create({
  container:{
    flex :1, 
    alignItems : "center",
    justifyContent :'center',
    backgroundColor : 'purple'
  },
  
  
});

export default AppPro