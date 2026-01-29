import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Home from "../pages/Home";
import SearchResult from "../pages/SearchResult";
import TVShows from "../pages/TVShows";
import { colors } from "../utils/colors";

const Tab = createMaterialTopTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#fff",
          shadowOffset: { width: 0, height: 1 },
        },
        tabBarLabelStyle: { fontWeight: "600" },
        tabBarActiveTintColor: colors.green,
        tabBarInactiveTintColor: "#757676",
        tabBarIndicatorStyle: { backgroundColor: colors.green },
      }}
    >
      <Tab.Screen name="Movies" component={Home} />
      <Tab.Screen name="Search Results" component={SearchResult} />
      <Tab.Screen name="TV Shows" component={TVShows} />
    </Tab.Navigator>
  );
}
