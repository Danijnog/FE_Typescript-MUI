import { Outlet } from "react-router-dom"
export function NavBar() {
  return (
    <div>
      <h1>NAVBAR</h1>
      <Outlet />
    </div>
  );
}