import "react-native-gesture-handler";
import React from "react";
import Navigation from "./src/modules/navigation/tab.navigation";
import { NavigationContainer } from "@react-navigation/native";
import { ToastProvider } from "./src/modules/toast/toast.provider";
import useToast from "./src/modules/toast/useToast";

export default function App() {
  return (
    <NavigationContainer>
      <ToastProvider>
        <Navigation />
      </ToastProvider>
    </NavigationContainer>
  );
}
