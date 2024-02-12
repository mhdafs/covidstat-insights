import { useState } from "react";
import UserRoute from "./routes/UserRoute";
import { ConfigProvider, theme } from "antd";
import Spinner from "./components/constant/Spinner";
import Toaster from "./components/constant/Toaster";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Switcher from "./components/constant/Switcher";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const getBackgroundColor = () => {
    return isDarkTheme ? "#121212" : "#ffffff";
  };

  return (
    <BrowserRouter>
      <Switcher isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <Spinner />
      <Toaster />
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#1677FF",
          },
          algorithm: isDarkTheme ? theme.darkAlgorithm : theme.lightAlgorithm,
        }}
      >
        <div
          style={{ backgroundColor: getBackgroundColor(), minHeight: "100vh" }}
        >
          <Routes>
            <Route path={"/*"} element={<UserRoute />} />
          </Routes>
        </div>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
