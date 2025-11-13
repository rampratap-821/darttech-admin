// import React from "react";

// const Dashboard = () => {
//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white p-6 rounded-xl shadow">
//           <h3 className="font-semibold text-gray-600">Total Users</h3>
//           <p className="text-3xl font-bold text-green-600 mt-2">1,240</p>
//         </div>
        
//         <div className="bg-white p-6 rounded-xl shadow">
//           <h3 className="font-semibold text-gray-600">Revenue</h3>
//           <p className="text-3xl font-bold text-blue-600 mt-2">$5,680</p>
//         </div>
        
//         <div className="bg-white p-6 rounded-xl shadow">
//           <h3 className="font-semibold text-gray-600">Orders</h3>
//           <p className="text-3xl font-bold text-purple-600 mt-2">324</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



// import { Outlet } from "react-router-dom";

// const Dashboard = () => {
//   return (
//     <div>
//       <h1>Admin Dashboard</h1>
//       <Outlet /> {/* ये nested route का component दिखाएगा */}
//     </div>
//   );
// };
    


// export default  Dashboard;




import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">

      
      <Sidebar sidebarOpen={sidebarOpen} />
      <div className="flex-1 flex flex-col">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
