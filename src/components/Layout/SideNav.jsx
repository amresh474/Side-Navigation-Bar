import { Link, useLocation } from "react-router-dom";

import SidebarData from "../../data/sidebar1.json";
// import Sidebar from "../sidenavBar/Sidebar";

function SideNav() {
  const location = useLocation();

  return (
    <>
      {SidebarData &&
        SidebarData.map((val, index) => {
          const isActive = location.pathname === val.link;
          return (
            <div className={`menu-item ${isActive && "active"}`} key={index}>
              <i className={val.icon}></i>
              <Link to={val.link} >
                {val.title}
              </Link>
            </div>
          );
        })}
    </>
  );
}

export default SideNav;
