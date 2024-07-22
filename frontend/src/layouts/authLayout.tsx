import React from "react";
import { Outlet } from "react-router-dom";
import Header from "@/component/common/header";
import Footer from "@/component/common/footer";


const AuthLayout: React.FC = () => {

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

export default AuthLayout;
