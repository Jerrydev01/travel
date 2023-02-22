import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Form from "../components/Login/Form";

const Login = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="flex-1">
      <View className="pt-[50px] px-[24px]">
        <Text className="text-[32px] font-semibold">Create an account</Text>
        <Text className="text-[16px] text-[rgba(0,0,0,0.6)]">
          Let’s create your account
        </Text>
        <ScrollView className="mt-[35px]">
          <Form />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Login;
