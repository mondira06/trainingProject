import Dashboard from "./Components/Pages/Dashboard";
import AmountSetup from "./Components/Pages/AmountSetup";
import ManageRole from "./Components/Pages/ManageRole";
import ManageTask from "./Components/Pages/ManageTask";
import ManageUser from "./Components/Pages/ManageUser";
import ManageWinner from "./Components/Pages/ManageWinnerSettings";
import Withdrawal from "./Components/Pages/ManageWithdrawalRequest";
import Navbar from "./Components/MenuItems/Navbar"
import { Routes, Route } from 'react-router-dom';
import Rewardsystem from "./Components/Pages/Rewardsystem"
// import Navbar from "./Components/Navbar"
function App() {
  return (
    <div className="App">
      {/* <SideBar/> */}
      {/* <UserPage/> */}
      {/* <Navbar/> */}
       {/* <AmountSetup/> */}
      {/* <ManageWinner/> */}
      {/* <Withdrawal/> */}
      <Navbar/>
      <Routes>
        <Route path={"/"} element={<Dashboard/>} />
        <Route path={"/manage_admin"} element={<ManageUser/>} />
        <Route path={"/manage_role"} element={<ManageRole/>} />
        <Route path={"/amount_setup"} element={<AmountSetup/>} />
        <Route path={"/withdrawal"} element={<Withdrawal/>} />
        <Route path={"/reward"} element={<Rewardsystem/>} />
        <Route path={"/manage_task"} element={<ManageTask/>} />
        <Route path={"/game"} element={<ManageWinner/>} />
       </Routes>
    </div>
  );
}

export default App;
