import { Space, notification, Spin } from "antd";
import TextAreaInput from "../../components/TextArea";
import { useEffect, useState } from "react";
import Settings from "../settings";
import Results from "../results";
import { getToken } from "../../utils/local-storage";
import { INIT_KEY } from "../../common";
import axios from "axios";

const Home = () => {
  const [sourceText, setSourceText] = useState("");
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onChangeSourceText = (key, event) => {
    setSourceText(event.target.value);
  };

  const onSubmitData = async ({}) => {
    const setting = getToken({ key: INIT_KEY });
    if (setting) {
      await sendTTSRequest({ setting: setting, body: sourceText });
    } else {
      notification.error({
        message: "Thông báo",
        description: "Không tìm thấy cài đặt tham số!",
      });
    }
  };

  const sendTTSRequest = async ({ setting, body }) => {
    setIsLoading(true);
    const apiUrl = "https://api.fpt.ai/hmi/tts/v5";

    // const headers = {
    //   ...setting,
    //   "Content-Type": "application/json",
    //   "Cache-Control ": "no-cache",
    // };

    // let config = {
    //   method: "post",
    //   maxBodyLength: Infinity,
    //   url: "https://api.fpt.ai/hmi/tts/v5",
    //   headers: {
    //     "api-key": "tq6CIs4Zj2zrxyvGVQI8Hrs3bOHUX52e",
    //     "Content-Type": "application/json",
    //     ...setting,
    //   },
    //   data: body,
    // };

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api.fpt.ai/hmi/tts/v5",
      headers: {
        "api-key": setting?.token,
        speed: setting?.speed,
        voice: setting?.voice,
        "Content-Type": "application/json",
      },
      data: body,
    };

    axios
      .request(config)
      .then((response) => {
        const data = response.data;
        const { async } = data;
        if (async) {
          setUrl(async);
          notification.success({
            message: "Thông báo",
            description: "Chuyển văn bản thành giọng nói thành công!",
          });
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        notification.error({
          message: "Thông báo",
          description: "Không thể chuyển văn bản thành giọng nói thành công!",
        });
      });
  };

  useEffect(() => {
    setIsLoading(false);
  }, [url]);

  return (
    <Spin spinning={isLoading}>
      <Space style={{ width: "100%" }} direction="vertical">
        <TextAreaInput
          value={sourceText}
          onChange={onChangeSourceText}
          property={"source_text"}
          title={"Văn bản đầu vào"}
          rows={10}
          placeholder="Nhập vào văn bản cần chuyển đổi"
        />
        <Settings onSubmitData={onSubmitData} />
        <Results url={url} />
      </Space>
    </Spin>
  );
};

export default Home;
