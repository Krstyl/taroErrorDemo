import { Component, PropsWithChildren } from "react";
import { View, Text } from "@tarojs/components";
import "./index.scss";
import Pic from "../compents/pic";

export default class Index extends Component<PropsWithChildren> {
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
        <Pic></Pic>
      </View>
    );
  }
}
