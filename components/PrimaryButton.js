 import { View, Text, Pressable } from "react-native";

 PrimaryButton = ({children}) => {
  
  pressHandler = () => {
    console.log('Pressed!');
  }
    return(
      <Pressable onPress={pressHandler}>
        <View>
          <Text>{children}</Text>
        </View>
      </Pressable>

    );
 }

 export default PrimaryButton;
 