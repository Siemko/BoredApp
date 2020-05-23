import { css } from "@emotion/native";
import * as React from "react";
import { TextInput, View } from "react-native";

export function FriendSearch({ searchName, onSearchNameChange }) {
  return (
    <View
      style={css`
        margin-top: 12px;
        background-color: #ffd8a6;
        padding: 12px;
        border: 1px solid #fc8210;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
      `}
    >
      <TextInput value={searchName} onChangeText={onSearchNameChange} />
    </View>
  );
}
