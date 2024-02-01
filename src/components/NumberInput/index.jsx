import { Space, Typography, InputNumber } from "antd";

const NumberInput = ({
  title,
  property,
  value = 0,
  onChange,
  disable = false,
  min = -3,
  max = 3,
}) => {
  return (
    <Space direction="vertical" style={{ width: "100%", marginTop: 5 }}>
      <Typography.Text style={{ fontWeight: "bold" }}>{title}</Typography.Text>
      <InputNumber
        value={value}
        onChange={(e) => onChange(property, e)}
        style={{ width: "100%" }}
        disabled={disable}
        max={max}
        min={min}
      />
    </Space>
  );
};

export default NumberInput;
