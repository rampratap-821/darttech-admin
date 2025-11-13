// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import { FiHome, FiUsers, FiSettings, FiBarChart2 } from "react-icons/fi";

// const Sidebar = ({ sidebarOpen }) => {
//   const location = useLocation();

//   const menuItems = [
//     { path: "/dashboard", icon: <FiHome />, label: "Dashboard" },
//     { path: "/users", icon: <FiUsers />, label: "Users" },
//     { path: "/settings", icon: <FiSettings />, label: "Settings" },
//     { path: "/reports", icon: <FiBarChart2 />, label: "Reports" }
//   ];

//   return (
//     <div className={`${sidebarOpen ? "w-64" : "w-0"} bg-green-800 transition-all duration-300 overflow-hidden`}>
//       <div className="p-4 text-white font-bold text-xl border-b border-green-700">
//         Admin Panel
//       </div>
      
//       <nav className="p-4 space-y-2">
//         {menuItems.map((item) => (
//           <Link
//             key={item.path}
//             to={item.path}
//             className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
//               location.pathname === item.path 
//                 ? "bg-green-700 text-white" 
//                 : "text-green-100 hover:bg-green-700"
//             }`}
//           >
//             {item.icon}
//             <span>{item.label}</span>
//           </Link>
//         ))}
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;



import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiUsers, FiSettings, FiBarChart2 } from "react-icons/fi";

const Sidebar = ({ sidebarOpen }) => {
  const location = useLocation();

  const menuItems = [
    // { path: "/dashboard", icon: <FiHome />, label: "Dashboard" },
    { path: "/dashboard/users", icon: <FiUsers />, label: "Users" },
    { path: "/dashboard/settings", icon: <FiSettings />, label: "Settings" },
    { path: "/dashboard/reports", icon: <FiBarChart2 />, label: "Reports" },
  ];

  return (
    <div
      className={`${
        sidebarOpen ? "w-64" : "w-0"
      } bg-green-800 text-white transition-all duration-300 overflow-hidden`}
    >
      <div className="p-4 font-bold text-xl border-b border-green-700">
        Admin Panel
      </div>

      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              location.pathname === item.path
                ? "bg-green-700 text-white"
                : "text-green-100 hover:bg-green-700"
            }`}
          >
            {item.icon}
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
