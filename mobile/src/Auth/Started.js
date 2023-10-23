import { Text, ImageBackground, Image, TouchableOpacity } from "react-native";
import { startedStyle } from "../styles/auth";

const Started = ({setSwapWin}) => {
  return (
    <ImageBackground
      style={startedStyle.backImg}
      source={require("../../assets/startedBg.png")}
    >
      <Image
        style={startedStyle.img}
        source={require("../../assets/securetyIMG.png")}
      />
      <Text style={startedStyle.text}>Authentication app</Text>
      <TouchableOpacity style={startedStyle.btn1} onPress={()=>setSwapWin('login')}>
        <Text style={startedStyle.btnText}>Log in</Text>
      </TouchableOpacity>
      <TouchableOpacity style={startedStyle.btn2} onPress={()=>setSwapWin('regis')}>
        <Text style={[startedStyle.btnText, { color: "#fff" }]}>Sing up</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Started;
