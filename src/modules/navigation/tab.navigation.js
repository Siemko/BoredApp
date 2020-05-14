import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { Text } from "react-native";
import {
  getActivityForSingleUser,
  getActivityForMultipleUsers,
} from "../activity/activities.functions";
import { Activities } from "../activity/activities.refactor";

const Tab = createBottomTabNavigator();

function tabOptions(emoji) {
  return {
    tabBarIcon: () => <Text>{emoji}</Text>,
    unmountOnBlur: true,
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
      <Tab.Screen name="Single user" options={tabOptions("🧍")}>
        {() => (
          <Activities queryKey="singleUser" queryFn={getActivityForSingleUser}>
            {data => (
              <Text>
                You can {data.activity.toLowerCase()} if you are bored.
              </Text>
            )}
          </Activities>
        )}
      </Tab.Screen>
      <Tab.Screen name="Multiple users" options={tabOptions("👪")}>
        {() => (
          <Activities
            queryKey="multipleUsers"
            queryFn={getActivityForMultipleUsers}
          >
            {data => (
              <Text>
                You will need {data.participants - 1} friend
                {data.participants - 1 > 1 ? "s" : ""} to{" "}
                {data.activity.toLowerCase()} if you are bored.
              </Text>
            )}
          </Activities>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
