// import React from 'react'
// import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
// import Login from './Page/Login'
// import Home from './Page/Home'


// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path='/' element ={<Login/>}></Route>
//         <Route path='/home' element ={<Home/>}></Route>

//       </Routes>
//     </Router>
//   )
// }

// export default App




// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import {
//   FiMenu,
//   FiBell,
//   FiSearch,
//   FiLogOut,
// } from "react-icons/fi";
// import { AiOutlineSetting } from "react-icons/ai";

// import Dashboard from "./pages/Dashboard";
// import Users from "./pages/Users";
// import Settings from "./pages/Settings";
// import Reports from "./pages/Reports";

// const App = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [query, setQuery] = useState("");

//   return (
//     <Router>
//       <div className="flex h-screen bg-green-700">
//         {/* Sidebar */}
//         <div
//           className={`${
//             sidebarOpen ? "w-64" : "w-0"
//           } bg-white shadow-lg transition-all duration-300 overflow-hidden`}
//         >
//           <div className="p-4 text-xl font-bold border-b">Admin Panel</div>
//           <ul className="p-4 space-y-3">
//             <li>
//               <Link to="/" className="hover:bg-gray-100 p-2 block rounded">
//                 Dashboard
//               </Link>
//             </li>
//             <li>
//               <Link to="/users" className="hover:bg-gray-100 p-2 block rounded">
//                 Users
//               </Link>
//             </li>
//             <li>
//               <Link to="/settings" className="hover:bg-gray-100 p-2 block rounded">
//                 Settings
//               </Link>
//             </li>
//             <li>
//               <Link to="/reports" className="hover:bg-gray-100 p-2 block rounded">
//                 Reports
//               </Link>
//             </li>
//           </ul>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1 flex flex-col">
//           {/* Header */}
//           <header className="flex items-center justify-between bg-white p-4 border-b">
//             {/* Search Bar + Toggle Button */}
//             <div className="flex items-center gap-3">
//               <div className="relative flex items-center">
//                 <input
//                   value={query}
//                   onChange={(e) => setQuery(e.target.value)}
//                   className="pl-8 pr-10 py-2 rounded border w-64 md:w-96"
//                   placeholder="Search users or email..."
//                 />
//                 <FiSearch className="absolute left-2 top-2 text-gray-400" />
//               </div>

//               {/* Sidebar Toggle */}
//               <button
//                 className="p-2 rounded hover:bg-gray-100"
//                 onClick={() => setSidebarOpen(!sidebarOpen)}
//                 title="Toggle Sidebar"
//               >
//                 <FiMenu size={20} />
//               </button>

//               {/* 2 icons beside search bar */}
//               <button className="p-2 rounded hover:bg-gray-100">
//                 <FiBell size={20} />
//               </button>
//               <button className="p-2 rounded hover:bg-gray-100">
//                 <AiOutlineSetting size={20} />
//               </button>
//             </div>

//             {/* Right Side Logout */}
//             <div>
//               <button className="p-2 rounded hover:bg-gray-100 flex items-center gap-2">
//                 <FiLogOut /> Logout
//               </button>
//             </div>
//           </header>

//           {/* Pages Render */}
//           <main className="flex-1 p-6 overflow-auto">
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/users" element={<Users />} />
//               <Route path="/settings" element={<Settings />} />
//               <Route path="/reports" element={<Reports />} />
//             </Routes>
//           </main>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;





















// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./components/Login";
// import AdminPanel from "./components/AdminPanel";

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   return (
//     <Router>

//         <Routes>
//           <Route
//             path="/login"
//             element={<Login setIsAuthenticated={setIsAuthenticated} />}
//           />
//           <Route
//             path="/*"
//             element={
//               isAuthenticated ?
//                 <AdminPanel /> :
//                 <Login setIsAuthenticated={setIsAuthenticated} />
//             }
//           />
//         </Routes>

//     </Router>
//   );
// };

// export default App;




import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Reports from "./pages/Reports";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Dashboard with nested routes */}
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
