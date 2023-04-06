import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import Login from "./Login";
import OnboardingScreen from "./OnboardingScreen";


const Stack = createNativeStackNavigator();

export default function Index() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Onboarding"
            options={{ headerTitle: "Onboarding", headerTitleAlign: "center" }}
            component={OnboardingScreen}
          />
          <Stack.Screen
            name="Home"
            options={{ headerTitle: "Home", headerTitleAlign: "center" }}
            component={HomeScreen}
          />

          <Stack.Screen
            name="Login"
            options={{ headerTitle: "Login", headerTitleAlign: "center" }}
            component={Login}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

