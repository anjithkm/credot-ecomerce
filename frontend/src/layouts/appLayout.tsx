import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/component/common/header";
import Footer from "@/component/common/footer";

// import { AUTH, ERROR } from "../routes/routes";
// import ROLES from "../config/roles";

const AppLayout: React.FC<{

}> = () => {



  return (
    <div className="app">
    <Header/>
    <div className="body">
    <Outlet />
    </div>
    <Footer/>
  </div>
  );
};

export default AppLayout;
