// import React, { useState } from "react";
// import { FiMenu, FiBell, FiSearch, FiLogOut } from "react-icons/fi";

// const Header = ({ sidebarOpen, setSidebarOpen }) => {
//   const [searchQuery, setSearchQuery] = useState("");

//   return (
//     <header className="bg-green-700 shadow-sm border-b">
//       <div className="flex items-center justify-between p-4">
//         <div className="flex items-center gap-4">
//           <button
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             className="p-2 rounded-lg hover:bg-gray-100"
//           >
//             <FiMenu size={20} />
//           </button>

//           <div className="relative">
//             <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
//             <input
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="Search..."
//               className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
//             />
//           </div>
//         </div>

//         <div className="flex items-center gap-4">
//           <button className="p-2 rounded-lg hover:bg-gray-100 relative">
//             <FiBell size={20} />
//             <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
//           </button>
          
//           <button className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
//             <FiLogOut size={18} />
//             Logout
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;



import React, { useState } from "react";
import { FiMenu, FiBell, FiSearch, FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <header className="bg-green-700 shadow-sm border-b text-white">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-green-600"
          >
            <FiMenu size={20} />
          </button>

          <div className="relative">
            <FiSearch className="absolute left-3 top-2.5 text-gray-300" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border rounded-lg w-64 text-black focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="p-2 rounded-lg hover:bg-green-600 relative">
            <FiBell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-800 rounded-lg transition-colors"
          >
            <FiLogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
