import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { ProjectList } from "../pages/Project";
import { NavBar } from "../components/NavBar/index"
import { ContractList } from "../pages/Contract";
import { UserList } from "../pages/User";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<NavBar />}>
          <Route path="project" element={<ProjectList />} />
          <Route path="contract" element={<ContractList />}/>
          <Route path="users" element={<UserList />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}