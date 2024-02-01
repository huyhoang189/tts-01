import "./App.css";
import Home from "./containers/home";
import { Typography } from "antd";

function App() {
  return (
    <>
      <div style={{ width: "100%" }}>
        <div style={{ width: "100%", textAlign: "center" }}>
          <Typography.Title style={{ textTransform: "uppercase" }}>
            Chuyển đổi văn bản thành giọng nói
          </Typography.Title>
        </div>
        <Home />
      </div>
    </>
  );
}

export default App;
