import {
  ActivityIndicator,
  FlatList,
  Pressable,
  Text,
  View,
} from "react-native";

const CategoryList = ({
  categories,
  handleChangeCategory,
  data,
  isLoading,
}) => {
  return (
    <>
      {isLoading === true ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="small" color="#000" />
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                handleChangeCategory(item);
              }}
              className={` mr-[15px] px-[25px] py-[10px] rounded-[10px] ${
                categories === item ? "bg-black" : "bg-[#dbdada]"
              }`}
            >
              <Text
                className={`text-[16px] font-semibold ${
                  categories === item ? "text-white" : "text-black"
                }`}
              >
                {item}
              </Text>
            </Pressable>
          )}
        />
      )}
    </>
  );
};

export default CategoryList;
