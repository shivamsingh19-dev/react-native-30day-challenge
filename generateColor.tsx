import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';

const App = () => {

  // State banaya hai - background color store karne ke liye
  const [randomBackground, setRandomBackground] = useState('#ffffff');

  // Naya random color banane wala function
  const generateColor = () => {

    // Ye string mein sab hex codes hain (0-9 aur A-F)
    const hexRange = "0123456789ABCDEF";

    // Color string ko # se start karte hain
    let color = '#';

    // 6 baar loop chalega kyunki hex color mein 6 digits hote hain
    for (let i = 0; i < 6; i++) {
      
      // Random number 0 se 15 ke beech mein nikaal rahe hain
      const randomIndex = Math.floor(Math.random() * 16);
      
      // Random character pick karke color mein add kar rahe hain
      color += hexRange[randomIndex];
    }

    // Naya color state mein set kar diya - isse screen change hogi
    setRandomBackground(color);
  };

  return (
    <>
      {/* Status bar ka color bhi background ke hisaab se change hoga */}
      <StatusBar backgroundColor={randomBackground} barStyle="dark-content" />

      {/* Main container View */}
      <View style={[styles.container, { backgroundColor: randomBackground }]}>

        {/* Click karne wala button */}
        <TouchableOpacity onPress={generateColor} activeOpacity={0.7}>

          {/* Button ka andar ka design */}
          <View style={styles.actionBtn}>
            
            {/* Button ke andar ka text */}
            <Text style={styles.actionBtnTxt}>Press Me!</Text>

          </View>

        </TouchableOpacity>

      </View>
    </>
  );
};

// Styles define kar rahe hain
const styles = StyleSheet.create({
  container: {
    flex: 1,                    // pura screen cover karega
    justifyContent: 'center',   // center mein vertically
    alignItems: 'center',       // center mein horizontally
  },
  actionBtn: {
    backgroundColor: '#000',    // button ka background black
    paddingHorizontal: 30,      // left-right padding
    paddingVertical: 15,        // up-down padding
    borderRadius: 10,           // corners round kiye
  },
  actionBtnTxt: {
    color: '#fff',              // text ka color white
    fontSize: 18,               // text ka size
    fontWeight: 'bold',         // text bold
  },
});

export default App;
