import React, { useLayoutEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Home from "../components/Home/Home";

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1 px-[24px]">
      <ScrollView>
        <Home />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
