import { Link } from "react-router-dom";
import SidebarFooter from "./SidebarFooter";
import SidebarData from "../../data/sidebar1.json";
// import Sidebar from "../sidenavBar/Sidebar";

function SideNav() {
  return (
    <>
      <div className="sidebar">
        <h2>Sidebar</h2>
        <ul>
          {SidebarData &&
            SidebarData.map((val, index) => {
              return (
                <Link to={val.link} key={index}>
                  <li key={index}>
                    <i className={val.icon}></i>
                    {val.title}
                  </li>
                </Link>
              );
            })}
        </ul>
        {/* <Sidebar/> */}
        <SidebarFooter />
      </div>
    </>
  );
}

export default SideNav;
