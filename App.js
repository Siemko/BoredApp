import React from "react";
import Navigation from "./src/modules/navigation/tab.navigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}
