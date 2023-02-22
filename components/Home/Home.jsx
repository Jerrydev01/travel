import React from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FIcon from "react-native-vector-icons/FontAwesome5";

const Home = () => {
  return (
    <View className="flex-1">
      <View className="pt-[50px] flex flex-row items-center justify-between">
        <View>
          <Text className="text-[32px] font-semibold">Discover</Text>
        </View>
        <View>
          <Pressable className="p-2 relative">
            <Icon name="bell-outline" size={30} color="black" />
          </Pressable>
          <View className="w-4 h-4 bg-red-500 rounded-full absolute right-1 flex items-center">
            <Text className="text-[10px] text-white">2</Text>
          </View>
        </View>
      </View>
      <View className="flex flex-row justify-between items-end pt-[14px]">
        <View className="w-[80%]">
          <TextInput
            className=" w-full border-gray-300 rounded-md p-3 pl-12 mt-3 bg-slate-200 relative"
            placeholder="Enter your FullName"
            // onChangeText={(newText) => setText(newText)}
            // onChangeText={onChangeName}
            // defaultValue={name}
          />

          <Text className="absolute top-7 left-3">
            {" "}
            <FIcon name="search" size={18} color="#000" />
          </Text>
        </View>
        <View>
          <Pressable>
            <Text className="bg-black p-3 rounded-md">
              {" "}
              <Icon name="filter-variant" size={20} color="#fff" />
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Home;
