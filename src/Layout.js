import React from "react";
import Topbar from "./screens/Topbar";
import Sidebar from "./screens/Sidebar";

import "./style.css"; // Import the layout styles

const Layout = () => {
  return (
    <div className="App">
      {/* <Topbar />
      <div className="content">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main-content">{children}</div>
      </div> */}
    </div>
  );
};

export default Layout;

// import React from "react";
// import Topbar from "./screens/Topbar";
// import Sidebar from "./screens/Sidebar";

// const Layout = ({ children }) => {
//   return (
//     <div className="App">
//       <Topbar />
//       <div className="content">
//         <Sidebar />
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Layout;
