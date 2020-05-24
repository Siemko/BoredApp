import * as React from "react";
import { View, Text } from "react-native";
import { css } from "@emotion/native";

export function Toast({ text, visible }) {
  if (!visible) return null;

  return (
    <View
      style={css`
        position: absolute;
        top: 20px;
        background: rgba(0, 0, 0, 0.25);
        width: 100%;
        justify-content: center;
        align-items: center;
        width: 90%;
        left: 5%;
        padding: 12px;
        border-radius: 24px;
      `}
    >
      <Text>{text}</Text>
    </View>
  );
}
