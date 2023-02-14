import React, { useEffect, useState } from "react";
import { SideBar } from "../sideBar/SideBar";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const DashBoardLayout = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    // get the user info saved to sessionStorage during login process
    // need to get the user information because we need it to determine what to show on the sidebar
    // inorder to achieve this we first need to get the session storage and then save it in a usesatate and props it to the sidebar element
    const user = JSON.parse(sessionStorage.getItem("user"));

    if (user) {
      setUserInfo(user);
    }
  }, []);
  console.log(userInfo);
  return (
    <div className="dashboard-layout">
      <SideBar userInfo={userInfo} />
      <div className="dashboard-main">
        <Header currentUser={userInfo} />
        <div className="content">{children}</div>

        <Footer />
      </div>
    </div>
  );
};
