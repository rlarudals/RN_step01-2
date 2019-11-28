import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { BTN_COLOR } from "./colors/colors";
import { koreaFood, italyFood } from "./model/foods";
import { FontAwesome } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default class App extends React.Component {
  // state  안에 있는 데이터가 변경이 되면 변경을 감지하여 화면을 리로드 한다

  state = {
    KOREA: false,
    ITALY: false,
    MEXICO: false
  };

  // return은 하나의 Component만 return 할 수 있다
  // Component 두개를 하나로 묶어주는 기능  : Frgment

  render() {
    const { KOREA, ITALY, MEXICO } = this.state;

    return (
      <>
        <View style={styles.container}>
          <TouchableOpacity style={styles.touch} onPress={this._btnHandleKorea}>
            <FontAwesome name="users" />
            <Text style={styles.btnTxt}>KOREA</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.touch} onPress={this._btnHandleITALY}>
            <FontAwesome name="users" />
            <Text style={styles.btnTxt}>ITALY</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.touch}
            onPress={this._btnHandleMEXICO}
          >
            <FontAwesome name="users" />
            <Text style={styles.btnTxt}>MEXICO</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container2}>
          {KOREA
            ? koreaFood.map(food => (
                <Text key={food.id}>
                  {food.name} | {food.price}
                </Text>
              ))
            : null}
          {ITALY
            ? italyFood.map(food => (
                <Text key={food.id}>
                  {food.name} | {food.price}
                </Text>
              ))
            : null}
        </View>
      </>
    );
  }

  _btnHandleKorea = () => {
    this.setState({
      KOREA: true,
      ITALY: false
    });
  };

  _btnHandleITALY = () => {
    this.setState({
      ITALY: true,
      KOREA: false
    });
  };

  _btnHandleMEXICO = () => {
    alert("Have Not Food List");
    this.setState({
      KOREA: false,
      ITALY: false
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

  container2: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },

  btnTxt: {},

  touch: {
    backgroundColor: BTN_COLOR,
    width: width / 2,
    height: 25,
    marginBottom: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  }
});
