import * as React from "react";
import { useQuery } from "react-query";
import { SafeAreaView, Text, RefreshControl } from "react-native";
import { ACTIVITY_TYPES } from "./activity-types";
import { ScrollView } from "react-native-gesture-handler";

async function getActivityForMultipleUsers() {
  const response = await fetch(
    `https://www.boredapi.com/api/activity?participants=${Math.floor(
      Math.random() * 4 + 2,
    )}`,
  );
  const data = await response.json();
  return data;
}

export function MultipleUsers() {
  const { status, data, error, isFetching, refetch } = useQuery(
    "multipleUsers",
    getActivityForMultipleUsers,
  );

  if (status === "error") {
    return <Text>An error occured: {error.message}</Text>;
  }

  if (status === "loading") {
    return null;
  }

  const participants = data.participants - 1;
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
          You will need {participants} friend{participants > 1 ? "s" : ""} to{" "}
          {data.activity.toLowerCase()} if you are bored.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
