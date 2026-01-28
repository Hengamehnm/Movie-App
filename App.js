import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Tabs from "./src/layout/Tabs";
import Header from "./src/layout/Header";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              header: ({ options, route }) => (
                <Header title={options.title ?? route.name} />
              ),
            }}
          >
            <Stack.Screen
              name="Home"
              component={Tabs}
              options={{ title: "Movies App" }}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
