import Dashboard from "./Components/Pages/Dashboard";
import AmountSetup from "./Components/Pages/AmountSetup";
import ManageRole from "./Components/Pages/ManageRole";
import ManageTask from "./Components/Pages/ManageTask";
import ManageUser from "./Components/Pages/ManageUser";
import ManageWinner from "./Components/Pages/ManageWinnerSettings";
import ManageWithdrawalRequest from "./Components/Pages/ManageWithdrawalRequest";
import Rewardsystem from "./Components/Pages/Rewardsystem";
import Navbar from "./Components/MenuItems/Navbar";
import LoginPage from "./Components/Pages/LoginPage";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import UserManagement from "./Components/Pages/UserManagement";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Conditionally render the Navbar based on the current route
  const checkLoginStatus = () => {
    const isLoggedInCookie = Cookies.get("isLoggedIn");
    return isLoggedInCookie === "true"; // Assuming the cookie value is a string 'true'

  // const renderNavbar = location.pathname !== "/login";
};
useEffect(() => {
  if (!checkLoginStatus()) {
    // Navigate to the login page if the user is not logged in
    navigate("/login");
  } else {
    setIsLoggedIn(true);
  }
}, [navigate]);

  return (
    <div className="App">
      {isLoggedIn && <Navbar />}

      <Routes>
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path={"/manage_admin"} element={<ManageUser />} />
        <Route path={"/website_setting"} element={<AmountSetup />} />
        <Route path={"/reward_management"} element={<Rewardsystem />} />
        <Route path={"/winner"} element={<ManageWinner />} />
        <Route path={"/manage_role"} element={<ManageRole />} />
        <Route path={"/user_management"} element={<UserManagement />} />
        <Route
          path={"/withdrawal_management"}
          element={<ManageWithdrawalRequest />}
        />
        <Route path={"/manage_task"} element={<ManageTask />} />
      </Routes>
    </div>
  );
}

export default App;
