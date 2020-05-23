# UNPLUGGED #9

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

<Tab.Navigator tabBarOptions={{ /* activeTintColor, inactiveTintColor */ }}>
  <Tab.Screen name="" options={{ /*tabBarIcon, ... */ }} component={} />
  {/* lub */}
  <Tab.Screen>
    () => (<Component />)
  </Tab.Screen>
</Tab.Navigation>
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
