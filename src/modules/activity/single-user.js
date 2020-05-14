import * as React from "react";
import { useQuery } from "react-query";
import { SafeAreaView, Text, RefreshControl } from "react-native";
import { ACTIVITY_TYPES } from "./activity-types";
import { ScrollView } from "react-native-gesture-handler";

async function getActivityForSingleUser() {
  const response = await fetch(
    "https://www.boredapi.com/api/activity?participants=1",
  );
  const data = await response.json();
  return data;
}

export function SingleUser() {
  const { status, data, error, isFetching, refetch } = useQuery(
    "singleUser",
    getActivityForSingleUser,
  );

  if (status === "error") {
    return <Text>An error occured: {error.message}</Text>;
  }

  if (status === "loading") {
    return null;
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#f4f4f4",
      }}
    >
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        refreshControl={
          <RefreshControl
            onRefresh={refetch}
            refreshing={status === "loading" || isFetching}
          />
        }
      >
        <Text
          style={{
            fontSize: 72,
            marginBottom: 24,
          }}
        >
          {ACTIVITY_TYPES[data.type] || "🤸"}
        </Text>
        <Text
          style={{
            fontSize: 24,
            padding: 10,
            textAlign: "center",
            color: "#6983aa",
          }}
        >
          You can {data.activity.toLowerCase()} if you are bored.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
