import React from "react"
import {
    View,
    Text,
    Button,
    StyleSheet,
} from "react-native"



function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>My first app</Text>
            <Text style ={styles.paragraph}>my name : shivamsingh</Text>
            <Text>building a saas app</Text>
            
            <Button 
                title="Press Me" 
                onPress={() => alert('hi there')}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        fontSize: 30,
        fontWeight: "bold"
    },
    paragraph:{
        fontSize:20,
        margin: 10 
    }
});
export default App