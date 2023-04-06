import React, { useState, useEffect } from "react";
import {
  FlatList,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FIcon from "react-native-vector-icons/FontAwesome5";
import axios from "axios";
import CategoryList from "../Category";
import Product from "../Product";

const Home = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState("smartphones");
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  // fetch data from this url= 'https://dummyjson.com/products/categories' using the categories state
  console.log("categories", categories);
  const handleChangeCategory = (category) => {
    setCategories(category);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://dummyjson.com/products/category/${categories}?limit=4`)
      .then((response) => response.json())
      .then((productData) => {
        setProductData(productData);
        setIsLoading(false);
      });
  }, [categories]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/search?q=${searchQuery}`
      );
      const data = response.data;
      console.log("searchQuery", data); // display the fetched data in the console
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchQuery]);

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
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
            onSubmitEditing={fetchData}
          />

          <TouchableOpacity onPress={fetchData}>
            <Text className="absolute top-[-35px] left-3">
              {" "}
              <FIcon name="search" size={18} color="#000" />
            </Text>
          </TouchableOpacity>
        </View>
        <View className="relative -translate-y-1">
          <Pressable>
            <Text className="bg-black p-3 rounded-md">
              {" "}
              <Icon name="filter-variant" size={20} color="#fff" />
            </Text>
          </Pressable>
        </View>
      </View>
      <View className="mt-[16px]">
        <CategoryList
          categories={categories}
          isLoading={isLoading}
          data={data}
          handleChangeCategory={handleChangeCategory}
        />
      </View>
      <View className="mt-[24px]">
        <Product
          searchQuery={searchQuery}
          productData={productData}
          categories={categories}
          isLoading={isLoading}
        />
      </View>
    </View>
  );
};

export default Home;
