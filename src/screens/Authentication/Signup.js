import {
  View,
  Text,
  TextInput,
  StyleSheet,
  useColorScheme,
  Button,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import tw from "twrnc";
import Icon from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient";

const SignUp = ({navigation}) => {
  const insets = useSafeAreaInsets();
  const colorScheme = useColorScheme();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View
        style={[
          tw`flex-1 ${
            colorScheme === "dark" ? "bg-[#161622]" : " bg-white"
          } relative`,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
        ]}
      >
        <View
          style={[
            tw` w-[100%] h-[13rem] absolute left-0 top-0
            flex-1 justify-center items-center
          `,
            styles.container,
          ]}
        ></View>
        <View style={tw`flex-1 justify-center items-center`}>
          <Text
            style={tw`text-left text-blue-400 text-[2rem] font-bold relative
         left-[-5.5rem] 
        `}
          >
            Sign Up
          </Text>
          <View>
            <TextInput
              placeholder="Email Address"
              placeholderTextColor={`${
                colorScheme === "dark" ? "white" : "black"
              }`}
              style={[
                tw`rounded-md ${
                  colorScheme === "dark" ? "border-white" : "border-black"
                } ${colorScheme === "dark" ? "text-white" : "text-black"} `,
                styles.input,
              ]}
            />
          </View>
          <View>
            <TextInput
              secureTextEntry
              placeholder="Password"
              placeholderTextColor={`${
                colorScheme === "dark" ? "white" : "black"
              }`}
              style={[
                tw`rounded-md ${
                  colorScheme === "dark" ? "border-white" : "border-black"
                } ${colorScheme === "dark" ? "text-white" : "text-black"}`,
                styles.input,
              ]}
            />
          </View>
          <Pressable
            style={tw`px-[8rem] bg-blue-400 py-[.7rem] rounded-md mt-3`}
          >
            <Text style={tw`text-white text-[1.2rem] font-medium`}> Sign Up </Text>
          </Pressable>
          <View style={tw`text-white mt-2 relative left-[-2rem]`}>
            <Text
              style={tw`text-white text-left`}
              onPress={() => navigation.navigate("signIn")}
            >
              Do have an account? SignIn.
            </Text>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
  },
  container: {
    borderRadius: 27,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 100,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 17,
    borderBottomWidth: 0,
    backgroundColor: "white",
    background: "linear-gradient(to right, #10B981, #3B82F6)",
  },
});

export default SignUp;
