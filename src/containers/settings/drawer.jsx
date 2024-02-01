import { Drawer, Space, Button, Flex, notification } from "antd";
import SelectInput from "../../components/SelectInput";
import { INIT_KEY, TYPE_EXPORT_OPTIONS, VOICE_OPTIONS } from "../../common";
import NumberInput from "../../components/NumberInput";
import { useEffect, useState } from "react";
import TextInput from "../../components/TextInput";
import { getToken, insertToken } from "../../utils/local-storage";

const initSetting = {
  voice: VOICE_OPTIONS[0].value,
  type: TYPE_EXPORT_OPTIONS[0].value,
  speed: 0,
  token: "tq6CIs4Zj2zrxyvGVQI8Hrs3bOHUX52e",
};

const DrawerItem = ({ open, onClose }) => {
  const [settings, setSettings] = useState(initSetting);

  const onRecordInputChange = (key, event) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [key]: event.target.value,
    }));
  };

  const onRecordSelectedChange = (key, event) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [key]: event,
    }));
  };

  const onRecordNumberChange = (key, event) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [key]: event,
    }));
  };

  const onRecordSaveToLocalStorage = () => {
    const status = insertToken({ key: INIT_KEY, data: settings });

    if (!status) {
      notification.success({
        message: "Thông báo",
        description: "Cập nhật cài đặt tham số hệ thống!",
      });
    }
  };

  useEffect(() => {
    const status = getToken({ key: INIT_KEY });
    if (status) {
      setSettings(status);
      //   notification.success({
      //     message: "Thông báo",
      //     description: "Cập nhật cài đặt tham số hệ thống!",
      //   });
    } else {
      notification.error({
        message: "Thông báo",
        description: "Không tìm thấy cài đặt tham số!",
      });
    }
  }, [open]);

  return (
    <Drawer title="Tham số hiệu chỉnh giọng nói" onClose={onClose} open={open}>
      <Space style={{ width: "100%" }} direction="vertical">
        <SelectInput
          title={"Giọng đọc"}
          options={VOICE_OPTIONS}
          value={settings?.voice}
          onChange={onRecordSelectedChange}
          property={"voice"}
        />

        <NumberInput
          title={"Tốc độ"}
          value={settings?.speed}
          onChange={onRecordNumberChange}
          property={"speed"}
        />
        <TextInput
          title={"Token"}
          value={settings?.token}
          onChange={onRecordInputChange}
          property={"token"}
        />
        <Flex style={{ width: "100%" }} justify="center">
          <Button type="primary" onClick={onRecordSaveToLocalStorage}>
            Cập nhật
          </Button>
        </Flex>
      </Space>
    </Drawer>
  );
};

export default DrawerItem;
