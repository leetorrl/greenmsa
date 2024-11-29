import axios from "axios";
import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Pressable,
  Alert,
} from "react-native";

export default function App() {
  const doSignUp = async () => {
    try {
      const res = await axios.post("http://192.168.0.69:20000/users/join", {
        email: "dd@naver.com",
        name: "홍길동",
        password: "abcd1234",
      });

      if (res.status == 200) {
        Alert.alert("Sign Up", "회원가입이 완료되었습니다.");
        return;
      }
      // console.log(JSON.stringify(res));
    } catch (err) {
      // console.error(JSON.stringify(err));
      Alert.alert("Sign Up", "회원가입에 실패하였습니다." );
      return;
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
      }}
    >
      <StatusBar style="auto" />
      <Text
        style={{
          textAlign: "center",
          marginTop: 1,
          fontSize: 36,
          color: "#FF3300",
          // fontFamily: "NotoSansBlack",
        }}
      >
        회원가입
      </Text>
      {/* Additional components goes here */}
      <View style={{ marginTop: 10, marginHorizontal: 10, width: "70%" }}>
        <View>
          <Text style={{ color: "#2c2c2c" }}>
            EMAIL:
          </Text>
          <TextInput
            placeholder="Enter Email..."
            style={{
              borderWidth: 1,
              borderColor: "White",
              marginTop: 10,
              borderStyle: "dotted",
              padding: 10,
              color: "#2c2c2c",
              // fontFamily: "NotoSansBlack",
            }}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={{ color: "#2c2c2c" }}>
            PASSWORD:
          </Text>
          <TextInput
            secureTextEntry
            placeholder="Enter Password..."
            style={{
              borderWidth: 1,
              borderColor: "White",
              marginTop: 10,
              borderStyle: "dotted",
              padding: 10,
              color: "#2c2c2c",
              // fontFamily: "NotoSansBlack",
            }}
          />
        </View>

        <View
          style={{
            backgroundColor: "2c2c2c",
            padding: 10,
            marginVertical: 10,
            borderWidth: 3,
          }}
        >
          <TouchableOpacity onPress={doSignUp}>
            <Text
              style={{
                textAlign: "center",
                color: "#2c2c2c",
                // fontFamily: "NotoSansBlack",
              }}
            >
              SingUp
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}