import { Button, Flex } from "antd";
import {
  SettingOutlined,
  SwapOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import DrawerItem from "./drawer.jsx";
import { useState } from "react";

export default function Settings({ onSubmitData }) {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Flex justify={"center"} align={"center"} gap={5}>
      <Button type={"primary"} icon={<SwapOutlined />} onClick={onSubmitData}>
        Chuyển văn bản thành giọng nói
      </Button>

      <Button icon={<SettingOutlined />} onClick={showDrawer}>
        Cài đặt các tham số
      </Button>
      <Button
        icon={<ReloadOutlined />}
        danger
        onClick={() => document.location.reload()}
      >
        Load lại trang
      </Button>

      <DrawerItem open={open} onClose={onClose} />
    </Flex>
  );
}
