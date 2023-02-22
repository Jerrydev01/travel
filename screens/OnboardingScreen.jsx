import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const OnboardingScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="flex-1 relative">
      <View className="">
        <Text className="font-bold text-[55px] pl-[24px] pr-6 pt-[50px]">
          Define Yourself In Your <Text className="text-red-500">Unique </Text>
          Way.
        </Text>
        {/* create an image tag */}
        <View className="relative">
          <Image
            source={require("../assets/img1.png")}
            className="w-[100%] relative -translate-y-[405px] h-[100%]"
            style={{
              resizeMode: "contain",
            }}
          />

          <View className="absolute z-50 w-full h-full translate-y-[400px]">
            <View className="px-[24px]">
              <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                className="  bg-red-500 rounded-[10px] px-[24px] py-[15px] text-white"
              >
                <Text className="text-center text-white font-bold text-[16px]">
                  Get Started
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
