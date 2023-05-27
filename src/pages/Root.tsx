import React from "react";

import "../App.scss";
import { Outlet } from "react-router-dom";
import Header from "../components/layout/header/Header";
import Footer from "../components/layout/footer/Footer";

export const loader = async ({ params }: any) => {
  return params;
};

const Root = () => {
  return (
    <>
      <Header />
      <main id="detail" className="px-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Root;
