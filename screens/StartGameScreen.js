import { TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

StartGameScreen = () => {

    return(
        <View>
            <TextInput />
            <PrimaryButton  text={'Your course goal!'}></PrimaryButton>
            <PrimaryButton  placeholder='Your course goal!'>Confirm</PrimaryButton>
        </View>
    );

}

export default StartGameScreen;

