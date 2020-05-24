import * as React from "react";
import { SafeAreaView, FlatList } from "react-native";
import friends from "./friends";
import { css } from "@emotion/native";
import { Friend } from "./friend.item";
import { FriendSearch } from "./friend.search";
import useToast from "../toast/useToast";

export function FriendList() {
  const [searchName, setSearchName] = React.useState("");
  const [friendList, setList] = React.useState(friends);
  const { showToast } = useToast();

  React.useEffect(() => {
    searchName.length > 0
      ? setList(
          friends.filter(f => f.name.match(new RegExp(`${searchName}`, "i"))),
        )
      : setList(friends);
  }, [searchName]);

  return (
    <SafeAreaView
      style={css`
        background-color: "#f4f4f4";
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <FlatList
        style={css`
          width: 100%;
          max-height: 50%;
        `}
        onEndReached={() => showToast("No more friends!")}
        data={friendList}
        renderItem={Friend}
        keyExtractor={item => item.id}
      />
      <FriendSearch
        searchName={searchName}
        onSearchNameChange={setSearchName}
      />
    </SafeAreaView>
  );
}
