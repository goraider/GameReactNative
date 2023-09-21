 import { View, Text, Pressable, StyleSheet } from "react-native";

 PrimaryButton = ({children, onPress}) => {
  
  pressHandler = () => {
    console.log('Pressed to Button!');
  }
    return(
      <View style={styles.buttonOuterContainer}>
        <Pressable 
            style={({ pressed }) =>
              pressed
              ? [ styles.buttonInnerContainer, styles.pressed ]
              :   styles.buttonInnerContainer 
            }
            onPress={onPress}
            android_ripple={{color: '#640233'}}
        >
          
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
      </View>

    );
 }
 
 export default PrimaryButton;

 const styles =  StyleSheet.create({

  buttonOuterContainer:{
    borderRadius: 28,
    margin: 4,
    overflow:'hidden'
  },
  buttonInnerContainer:{
    backgroundColor:'#4b1a21',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2
  },
  buttonText:{
    color: 'white',
    textAlign:'center'
  },
  pressed:{
    opacity: 0.75
  }
 })

 