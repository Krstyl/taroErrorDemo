import { View, Button } from "@tarojs/components";
import Taro from "@tarojs/taro";
import React from "react";
import { createWorker } from "tesseract.js";

export default function Pic() {
  const getText = async (url: string) => {
    const worker = await createWorker("eng");
    const text = await worker.recognize(url);
    console.log(text.data.text);
  };

  const chooseImg = () => {
    Taro.chooseImage({
      count: 1, // 默认9
      sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有，在H5浏览器端支持使用 `user` 和 `environment`分别指定为前后摄像头
      success: function(res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      }
    });
  };

  return (
    <View>
      <Button>xxx</Button>
    </View>
  );
}
