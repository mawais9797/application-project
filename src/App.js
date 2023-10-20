import logo from "./logo.svg";
import "./App.css";
import Topbar from "./screens/Topbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// import { createTheme } from '@mui/material/styles'
import { createTheme } from "@mui/material/styles";
import { colors, ThemeProvider } from "@mui/material";
import Sidebar from "./screens/Sidebar";
import Test from "./screens/test";

const theme = createTheme({
  palette: {
    myBorderColor: {
      main: "#3E445E",
    },
    badgeColor: {
      main: "#FF6B00",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Topbar />
        <Sidebar />
        <BrowserRouter>
          <Routes>
            <Route path="/topbar" element={<Topbar />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
