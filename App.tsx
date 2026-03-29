import React from "react"
import {
    View,
    Text,
    Button
} from "react-native"

function App(){
    return(
            <View>
            <Text>hellow world</Text>
            <Text>hellow world</Text>
            <Text>hellow world</Text>
            <Text>hellow world</Text>
            <Button 
                    title="Press Me" 
                    onPress={() => console.log('Button 1 pressed')} 
                />
            </View>

           
            
    )
}

export default App 