import * as React from "react";
import { useQuery } from "react-query";
import { SafeAreaView, Text, RefreshControl } from "react-native";
import { ACTIVITY_TYPES } from "./activity-types";
import { ScrollView } from "react-native-gesture-handler";

export function Activities({ queryKey, queryFn, children }) {
  const { status, data, error, isFetching, refetch } = useQuery(
    queryKey,
    queryFn,
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
          {children(data)}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
