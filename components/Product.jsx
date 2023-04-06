import {
  ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

export default function Product({
  categories,
  productData,
  isLoading,
  searchQuery,
}) {
  return (
    <View>
      {isLoading === true ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="small" color="#000" />
        </View>
      ) : (
        <View>
          <FlatList
            data={productData.products}
            keyExtractor={(item) => item.id}
            numColumns={2} // set numColumns to 2 for two columns
            renderItem={({ item }) => (
              <>
                {categories === item.category ||
                searchQuery.includes('samsung') ? (
                  <>
                    <View style={{ flex: 1, margin: 8 }}>
                      <TouchableOpacity
                        style={{
                          width: "100%",
                          height: 175,
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          className="w-full h-full rounded-[10px]"
                          style={{
                            resizeMode: "cover",
                          }}
                          source={{ uri: item.thumbnail }}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Text className="text-[16px] pt-[8px] font-bold">
                          {item.brand}
                        </Text>
                        <Text className="text-[14px] pb-[18px]">
                          ₦ {item.price * 700}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </>
                ) : null}
              </>
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
