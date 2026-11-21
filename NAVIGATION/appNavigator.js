import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import marathonRoutes from "./routes";w

//Screen Imports
import { CreateMarathonScreen } from "../SCREENS/CreateMarathonScreen";
import { LoginScreen } from "../SCREENS/LoginScreen";
import { SettingScreen } from "../SCREENS/SettingScreen";
import { ViewMarathonScreen } from "../SCREENS/ViewMarathonScreen";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Login"
      >
        <Stack.Screen
          name="CreateMarathon"
          component={CreateMarathonScreen}
        />

        <Stack.Screen
          name="Marathons"
          component={ViewMarathonScreen}
        />
    
        <Stack.Screen
        name="Login"
        component={LoginScreen}
        />

        <Stack.Screen
        name="Settings"
        component={SettingScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//navigation.navigate("Marathons");