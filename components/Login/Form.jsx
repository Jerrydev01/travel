import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Alert,
  Pressable,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [emailError, setEmailError] = useState("");

  const navigation = useNavigation();

  const onChangeEmail = (text) => {
    setEmail(text);
  };

  const onChangePassword = (text) => {
    setPassword(text);
  };

  const onChangeName = (text) => {
    setName(text);
  };
  

  const handleSubmit = () => {
    // if (!email || !password || !name) {
    //   Alert.alert("Error", "All fields are required.");
    //   return;
    // }
    // Add your submit logic here
    // console.log("FullName:", name);
    // console.log("Email:", email);
    // console.log("Password:", password);

    // navigate to login
   
    navigation.navigate("Home");
  };

  return (
    <ScrollView>
      <View className="flex flex-col gap-[20px]">
        <View>
          <Text className="text-[16px] font-[500]">FullName</Text>
          <TextInput
            className=" border-gray-300 rounded-md p-3.5 mt-3 bg-slate-200"
            placeholder="Enter your FullName"
            // onChangeText={(newText) => setText(newText)}
            onChangeText={onChangeName}
            defaultValue={name}
          />
        </View>
        <View>
          <Text className="text-[16px] font-[500]">Email</Text>
          <TextInput
            className=" border-gray-300 rounded-md p-3.5 mt-3 bg-slate-200"
            placeholder="Enter your Email Address"
            onChangeText={onChangeEmail}
            keyboardType="email-address"
            defaultValue={email}
          />
        </View>
        <View>
          <Text className="text-[16px] font-[500]">Password</Text>
          <TextInput
            className=" border-gray-300 rounded-md p-3.5 mt-3 bg-slate-200"
            placeholder="Enter your password"
            onChangeText={onChangePassword}
            secureTextEntry={true}
            defaultValue={password}
          />
        </View>
        <View>
          {/* create a submit button */}
          <TouchableOpacity
            className="bg-black py-3 rounded-md"
            title="Submit"
            onPress={handleSubmit}
          >
            <Text className="text-[16px] text-center font-[500]  text-white ">
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row justify-between items-center pt-2">
          {/* create two view with a text in between */}
          <View className="border-b-[1px] border-gray-300 w-[45%]"></View>
          <Text className="text-[#000000a7]">OR</Text>
          <View className="border-b-[1px] w-[45%] border-gray-300 "></View>
        </View>
        <View>
          {/* create a submit button */}
          <TouchableOpacity
            className="border-2 border-gray-300 py-3 rounded-md"
            title="Submit"
            // onPress={handleSubmit}
            
          >
            <Text className="text-[16px] text-center font-[500]  text-black ">
              Sign Up with Google
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          {/* create a submit button */}
          <TouchableOpacity
            className="bg-blue-600 py-3 rounded-md"
            title="Submit"
            // onPress={handleSubmit}
          >
            <Text className="text-[16px] text-center font-[500]  text-white ">
              Sign Up with Facebook
            </Text>
          </TouchableOpacity>
        </View>

        <View className="text-center flex flex-row justify-center items-center gap-2">
          <Text className="text-[16px] text-gray-400">Already a Member?</Text>
          <Pressable>
            <Text className='text-[16px] underline'>Log In</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default Form;
