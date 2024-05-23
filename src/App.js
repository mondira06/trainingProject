import Dashboard from "./Components/Pages/Dashboard";
import AmountSetup from "./Components/Pages/AmountSetup";
import ManageRole from "./Components/Pages/ManageRole";
import ManageTask from "./Components/Pages/ManageTask";
import ManageUser from "./Components/Pages/ManageUser";
import ManageWinner from "./Components/Pages/ManageWinnerSettings";
import ManageWithdrawalRequest from "./Components/Pages/ManageWithdrawalRequest";
import Rewardsystem from "./Components/Pages/Rewardsystem";
import Navbar from "./Components/MenuItems/Navbar";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Dashboard/> */}
      {/* <Rewardsystem /> */}
      {/* <Appupi/> */}
      {/* <SideBar/> */}
      {/* <Navbar/> */}
      {/* <AmountSetup/> */}
      {/* <ManageWinner/> */}
      {/* <Withdrawal/> */}

      <Routes>
        <Route path={"/"} element={<Dashboard />} />
        <Route path={"/manage_admin"} element={<ManageUser />} />
        <Route path={"/website_setting"} element={<AmountSetup />} />
        <Route path={"/reward_management"} element={<Rewardsystem />} />
        <Route path={"/winner"} element={<ManageWinner />} />
        <Route path={"/manage_role"} element={<ManageRole />} />
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
