import { Outlet } from "react-router-dom"
import Topbar from "./topbar/Topbar"
import Sidebar from "./sidebar/Sidebar"


export function Layout () {
    return (
        <div>
            <Topbar />
            <div className="container">
              <Sidebar />

                  <Outlet />

            </div>
        </div>
    )
}

