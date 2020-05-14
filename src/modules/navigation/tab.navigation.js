import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { Text, View } from "react-native";
import { SingleUser } from "../activity/single-user";
import { MultipleUsers } from "../activity/multiple-users";

const Tab = createBottomTabNavigator();

function tabOptions(emoji) {
  return {
    tabBarIcon: () => <Text>{emoji}</Text>,
  };
}

export default function Navigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#8ec6c5",
        inactiveTintColor: "#8566aa",
      }}
    >
      <Tab.Screen
        name="Single user"
        options={tabOptions("🧍")}
        component={SingleUser}
      />
      <Tab.Screen
        name="Multiple users"
        options={tabOptions("👪")}
        component={MultipleUsers}
      />
    </Tab.Navigator>
  );
}
