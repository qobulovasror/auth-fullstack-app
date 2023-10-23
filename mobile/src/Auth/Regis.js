import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from "react-native";
import { regisStyle } from "../styles/auth";
import Icon from "react-native-vector-icons/AntDesign";

const Regis = (props) => {
  const { setSwapWin, setToken, token } = props;
  return (
    <View style={regisStyle.container}>
      <TouchableOpacity
        style={{ padding: 20, width: 70 }}
        onPress={() => setSwapWin("")}
      >
        <Icon name="arrowleft" size={25} color={"#fff"} />
      </TouchableOpacity>
      <ScrollView>
        <Image
            source={require("../../assets/regis.png")}
            style={{ width: 120, height: 120, marginHorizontal: "33%" }}
        />
        <Text
            style={{
            fontSize: 40,
            color: "#fff",
            textAlign: "center",
            marginTop: 20,
            }}
        >
            Sing UP
        </Text>
        <View style={regisStyle.form}>
            <TextInput
            style={regisStyle.input}
            placeholder="Name"
            placeholderTextColor={"#fff"}
            //   value={userData.name}
            //   onChangeText={(val) => setUserData({ ...userData, name: val })}
            />
            <TextInput
            style={regisStyle.input}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor={"#fff"}
            //   value={userData.email}
            //   onChangeText={(val) => setUserData({ ...userData, email: val })}
            />
            <TextInput
            style={regisStyle.input}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor={"#fff"}
            //   value={userData.password}
            //   onChangeText={(val) => setUserData({ ...userData, password: val })}
            />
        </View>
        <TouchableOpacity style={regisStyle.btn}>
            <Text style={regisStyle.btnText}>Sign up</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Regis;
