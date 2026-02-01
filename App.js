import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Tabs from "./src/layout/Tabs";
import Header from "./src/layout/Header";
import ShowDetails from "./src/pages/ShowDetails";

const Stack = createNativeStackNavigator();

const customHeader = (title = "Movies App") => ({
  title,
  header: ({ options, route }) => (
    <Header title={options.title ?? route.name} />
  ),
});

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <PaperProvider>
          <BottomSheetModalProvider>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="Home"
                  component={Tabs}
                  options={customHeader()}
                />
                <Stack.Screen
                  name="SerachResult"
                  component={Tabs}
                  options={customHeader()}
                />
                <Stack.Screen
                  name="TvShows"
                  component={Tabs}
                  options={customHeader()}
                />
                <Stack.Screen
                  name="ShowDetails"
                  component={ShowDetails}
                  options={{
                    headerShown: true,
                    headerBackTitle: "Back to list",
                    headerBackTitleVisible: true,
                  }}
                />
              </Stack.Navigator>
            </NavigationContainer>
          </BottomSheetModalProvider>
        </PaperProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
