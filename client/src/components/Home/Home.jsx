import Sidebar from "../Sidebar/Sidebar";
import React from "react";
import { Link } from "react-router-dom";
import Head from "./Head.jsx";
import MyFlights from "./MyFlights";

function Home() {
  return (
    <>
      <Link to="/home">
        <div className="Home"></div>
      </Link>
      <Head />
      <Sidebar />
      <MyFlights />
    </>
  );
}
export default Home;
