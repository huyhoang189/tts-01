import { Empty, Flex, Image } from "antd";
import TargetGif from "../../assets/target.gif";
import { useEffect } from "react";

export default function Results({ url }) {
  useEffect(() => {
    if (url) {
      console.log(url);
      const audioElement = document.getElementById("audio-output");
      audioElement.src = url;
      //   audioElement.play();
    }
  }, [url]);
  return (
    <div>
      <Flex style={{ width: "100%" }} justify="center">
        <Image src={TargetGif} width={50} preview={false} />
      </Flex>

      <Flex style={{ width: "100%" }} justify="center">
        <audio id="audio-output" controls />
      </Flex>
    </div>
  );
}
