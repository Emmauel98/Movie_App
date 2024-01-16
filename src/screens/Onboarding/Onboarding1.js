import { View, Text, Image, useColorScheme, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import {
  useSafeAreaInsets,
  SafeAreaView,
} from "react-native-safe-area-context";
import tw from "twrnc";
import { useFonts } from "expo-font";

const Onboarding1 = ({ navigation }) => {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    Poppins: require("../../assets/fonts/Poppins/Poppins-Black.ttf"),
  });

  // if (!fontsLoaded) {
  //   const Poppins = 
  //   return null
  // }



  useEffect(()=>{
    setTimeout(() => {
      navigation.navigate('signIn')
    }, 2000);
  })


  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
      <View
            style={[
              {
                flex: 1,
              },
              tw`justify-center items-center ${
                colorScheme === "dark" ? "bg-[#161622]" : " bg-white"
              }`,
            ]}
          >
            <Text
              style={tw`font-bold text-[1.5rem] text-white ${fontsLoaded ? "font-['Poppins']" : "font-['Arial']" }`}
            >
              RHEMFLIX
            </Text>
          </View>
      </SafeAreaView>
    </>
  );
};

export default Onboarding1;
