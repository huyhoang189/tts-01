import { Input, Space, Typography } from "antd";

const TextAreaInput = ({
  title,
  property,
  value,
  onChange,
  placeholder = "Enter the text!",
  disable = false,
  rows = 2,
}) => {
  return (
    <Space
      direction="vertical"
      style={{ width: "100%", marginTop: 5, marginBottom: 5 }}
    >
      <Typography.Text style={{ fontWeight: "bold" }}>{title}</Typography.Text>
      <Input.TextArea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(property, e)}
        disabled={disable}
        rows={rows}
      />
    </Space>
  );
};

export default TextAreaInput;
