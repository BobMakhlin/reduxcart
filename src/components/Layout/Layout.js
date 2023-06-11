import React from "react";
import MainHeader from "./MainHeader";
import Notifications from "./Notifications";

const Layout = ({ children }) => {
  return (
    <>
      <MainHeader />
      <Notifications />
      <main>{children}</main>
    </>
  );
};

export default Layout;
