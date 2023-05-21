import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/layout/navigation/Navigation";

export const loader = async ({params}: any) => {
    return params
};

const Root = () => {
  return (
    <>
      <div id="navigation">
        <Navigation />
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
