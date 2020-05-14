import * as React from "react";
import { useQuery } from "react-query";
import { SafeAreaView, Text, RefreshControl } from "react-native";
import { ACTIVITY_TYPES } from "./activity-types";
import { ScrollView } from "react-native-gesture-handler";
import { css } from "@emotion/native";

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
      style={css`
        background-color: "#f4f4f4";
        width: 100%;
        height: 100%;
      `}
    >
      <ScrollView
        contentContainerStyle={css`
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        `}
        refreshControl={
          <RefreshControl
            onRefresh={refetch}
            refreshing={status === "loading" || isFetching}
          />
        }
      >
        <Text
          style={css`
            font-size: 72px;
            margin-bottom: 24px;
          `}
        >
          {ACTIVITY_TYPES[data.type] || "🤸"}
        </Text>
        <Text
          style={css`
            font-size: 24px;
            padding: 24px;
            text-align: center;
            color: #6983aa;
          `}
        >
          {children(data)}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
