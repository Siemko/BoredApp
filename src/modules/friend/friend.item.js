import * as React from "react";
import { View, Text, Linking } from "react-native";
import { css } from "@emotion/native";
import { TouchableOpacity } from "react-native-gesture-handler";

export function Friend({ item: friend }) {
  return (
    <View
      style={css`
        background-color: #ffd8a6;
        padding: 12px;
        border: 1px solid #fc8210;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      `}
      key={friend.id}
    >
      <Text>{friend.name}</Text>
      <View
        style={css`
          display: flex;
          flex-direction: row;
          width: 25%;
          justify-content: space-between;
        `}
      >
        <TouchableOpacity
          onPress={() => Linking.openURL(`tel:${friend.phoneNumber}`)}
          style={css`
            padding: 8px;
            border: 1px solid #fc8210;
          `}
        >
          <Text>📞</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Linking.openURL(`sms:${friend.phoneNumber}`)}
          style={css`
            padding: 8px;
            border: 1px solid #fc8210;
          `}
        >
          <Text>📨</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
