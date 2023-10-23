import { View, Text, Button } from "react-native";
import { mainStyle } from "../styles/mainStyle";

const Home = ({ navigation, token, setToken }) => {
  const logout = () => {
    setToken("")
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30, textAlign: "center", margin: 10 }}>
        Home Screen
      </Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
      <View style={{ margin: 10 }}></View>
      <Button title="Log out" onPress={logout} />
    </View>
  );
};

export default Home;
