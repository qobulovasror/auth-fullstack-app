import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, ActivityIndicator } from "react-native";
import { loginStyle } from "../styles/auth";
import Icon from "react-native-vector-icons/AntDesign";

const Login = (props) => {
  const { setSwapWin, setToken } = props;
  const [protsess, setProtsess] = useState(false)
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const submitHandler = async () => {
    if (!emailIsValid(userData.email)) {
      alert("Email xato kiritilgan");
      return;
    }
    if (userData.password.length < 6) {
      alert("Parol 6 ta belgidan kam");
      return;
    }
    setProtsess(true)
    
    // try {
    //   const res = await fetch(
    //     "https://word-memorization.onrender.com/api/auth/",
    //     {
    //       method: "post",
    //       headers: {
    //         "Content-Type": "application/json",
    //         "Access-Control-Allow-Origin": "*",
    //         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    //       },
    //       body: JSON.stringify({
    //         email: userData.email.toLowerCase(),
    //         password: userData.password,
    //       }),
    //     }
    //   );
    //   if (res.status == 200) {
    //     res.json().then((data) => {
    //       setTokenToDB("wordMemorizationAuthToken", data.authToken);
    //       setToken(data);
    //       setProtsess(false)
    //     });
    //   } else {
    //     res.json().then((err) => alert("Xatolik: " + err.error));
    //     setProtsess(false)
    //   }
    // } catch (error) {
    //   alert(error);
    //   setProtsess(false)
    // }    
  };
  return (
    <View style={loginStyle.container}>
      <TouchableOpacity
        style={{ padding: 20, width: 70 }}
        onPress={() => setSwapWin("")}
      >
        <Icon name="arrowleft" size={25} color={"#fff"} />
      </TouchableOpacity>
      {protsess && (
        <View style={loginStyle.modalProgress}>
          <Text style={{ fontSize: 27, textAlign: "center", marginBottom: 30 }}>
            Iltimos kuring
          </Text>
          <ActivityIndicator size={"large"} color="#00f" />
        </View>
      )}
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
            Sing In
        </Text>
        <View style={loginStyle.form}>
            <TextInput
            style={loginStyle.input}
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor={"#fff"}
              value={userData.email}
              onChangeText={(val) => setUserData({ ...userData, email: val })}
            />
            <TextInput
            style={loginStyle.input}
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor={"#fff"}
              value={userData.password}
              onChangeText={(val) => setUserData({ ...userData, password: val })}
            />
        </View>
        <TouchableOpacity style={loginStyle.btn} onPress={submitHandler}>
            <Text style={loginStyle.btnText}>Sign in</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Login;
