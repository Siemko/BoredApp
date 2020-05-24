# UNPLUGGED #9

## Bootstrap aplikacji

```bash
npx react-native init boredapp
```

## Instalacja React Navigation

```bash
yarn add @react-navigation/native @react-navigation/bottom-tabs

# a następnie

yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

# w App.js opakowujemy naszą całą apkę w <NavigationContainer>
```

## Konfiguracja bottom tab navigation

```jsx
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

<Tab.Navigator
  tabBarOptions={
    {
      /* activeTintColor, inactiveTintColor */
    }
  }
>
  <Tab.Screen
    name=""
    options={
      {
        /*tabBarIcon, ... */
      }
    }
    component={}
  />
  {/* lub */}
  <Tab.Screen>
    () => (<Component />)
  </Tab.Screen>
</Tab.Navigation>;
```

## Instalacja emotion

```bash
yarn add @emotion/core @emotion/native
```

```jsx
import { css } from "@emotion/native";

<SafeAreaView
      style={css`
        background-color: "#f4f4f4";
        width: 100%;
        height: 100%;
      `}
    >
```

## react-query

```bash
yarn add react-query
```

## fetch functions

```jsx
export async function getActivityForMultipleUsers() {
  const response = await fetch(
    `https://www.boredapi.com/api/activity?participants=${Math.floor(
      Math.random() * 4 + 2,
    )}`,
  );
  const data = await response.json();
  return data;
}

export async function getActivityForSingleUser() {
  const response = await fetch(
    "https://www.boredapi.com/api/activity?participants=1",
  );
  const data = await response.json();
  return data;
}
```

USAGE:

```jsx
const { status, data, error, isFetching, refetch } = useQuery(
  queryKey,
  queryFn,
);
```

## Scroll view - pull to refresh

```jsx
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
></ScrollView>
```

## ListView performance

```jsx
<FlatList
  style={css`
    width: 100%;
    max-height: 50%;
  `}
  data={friendList}
  renderItem={Friend}
  keyExtractor={item => item.id}
/>
```

where Friend is:

```jsx
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
```
