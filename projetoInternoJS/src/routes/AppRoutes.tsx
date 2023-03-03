import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { ProjectList } from "../pages/Project";
import { NavBar } from "../components/NavBar/index"
import { ContractList } from "../pages/Contract";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="/" element={<NavBar />}>
          <Route path="project" element={<ProjectList />} />
          <Route path="contract" element={<ContractList />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}