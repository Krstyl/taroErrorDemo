import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import React from "react";

export default function Pic() {
  const chooseImg = () => {
    Taro.chooseImage({});
  };

  return (
    <View>
      <Button>xxx</Button>
    </View>
  );
}
