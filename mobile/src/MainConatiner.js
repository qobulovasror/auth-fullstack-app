import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Setting from "./screens/Setting";

const Stack = createNativeStackNavigator();

function MainContainer({ setToken, token }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => <Home {...props} setToken={setToken} token={token} />}
        </Stack.Screen>
        <Stack.Screen name="Details" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
