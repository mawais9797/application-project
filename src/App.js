// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import Layout from "./Layout";
// // import Topbar from "./Topbar";
// // import Sidebar from "./Sidebar";
// import Test from "./screens/test";

// import "./App.css";

// const theme = createTheme({
//   palette: {
//     myBorderColor: {
//       main: "#3E445E",
//     },
//     badgeColor: {
//       main: "#FF6B00",
//     },
//   },
// });

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <BrowserRouter>
//         <Layout>
//           <Routes>
//             {/* <Route path="/topbar" element={<Topbar />} />
//             <Route path="/sidebar" element={<Sidebar />} /> */}
//             <Route path="/" element={<Layout />}>
//               <Route path="/test" element={<Test />} />
//             </Route>
//           </Routes>
//         </Layout>
//       </BrowserRouter>
//     </ThemeProvider>
//   );
// }

// export default App;

// import logo from "./logo.svg";
// import "./App.css";
// import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// import { createTheme } from "@mui/material/styles";
// import { colors, ThemeProvider } from "@mui/material";
// import Layout from "./Layout"; // Import the Layout component
// import Test from "./screens/test";
// const theme = createTheme({
//   palette: {
//     myBorderColor: {
//       main: "#3E445E",
//     },
//     badgeColor: {
//       main: "#FF6B00",
//     },
//   },
// });

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       {/* <BrowserRouter> */}
//       <Layout>
//         <Routes>
//           <Route path="/test" element={<Test />} />
//           {/* Add more routes here */}
//         </Routes>
//       </Layout>
//       {/* </BrowserRouter> */}
//     </ThemeProvider>
//   );
// }

// export default App;

import logo from "./logo.svg";
import "./App.css";
import Topbar from "./screens/Topbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
// import { createTheme } from '@mui/material/styles'
import { createTheme } from "@mui/material/styles";
import { colors, ThemeProvider } from "@mui/material";
import Sidebar from "./screens/Sidebar";
import Test from "./screens/test";
import Layout from "./Layout";
import ChatScreen from "./screens/ChatScreen";

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
        <main className="content">
          <Sidebar />
          <BrowserRouter>
            <Routes>
              {/* <Route path="/" element={<Layout />}> */}
              <Route path="/chat" element={<ChatScreen />} />
              <Route path="/test" element={<Test />} />
              {/* </Route> */}
            </Routes>
          </BrowserRouter>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
