import { Input, Space, Typography } from "antd";

const TextInput = ({
  title,
  property,
  value,
  onChange,
  placeholder = "Enter the text!",
  disable = false,
}) => {
  return (
    <Space
      direction="vertical"
      style={{ width: "100%", marginTop: 5, marginBottom: 5 }}
    >
      <Typography.Text style={{ fontWeight: "bold" }}>{title}</Typography.Text>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(property, e)}
        disabled={disable}
      />
    </Space>
  );
};

export default TextInput;
