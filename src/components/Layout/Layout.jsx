import React from "react";
import "./LayoutStlyes.css";
import SideNav from "./SideNav";
// import SidebarFooter from "./SidebarFooter";
export const Layout = ({ children }) => {
  return (
    <>
      <div className="main">
        <div className="layout">
          <div className="sidebar">
            <div className="logo">
              <h6>logo</h6>
            </div>
            <div className="menu">
              <SideNav />
            </div>
            {/* <SidebarFooter /> */}
          </div>
          <div className="content">
            <div className="header">
              <div className="header-content">
                <i className="fas fa-bell"></i>
                <img src="img/1.jpg" alt="" />
              </div>
            </div>
            <div className="body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};
