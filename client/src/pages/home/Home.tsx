import React from "react";
import Header from "../../components/header/Header";
import { NavBar } from "../../components/navBar/NavBar";
import Chat from "../../components/chat";
import "./home.scss";

const Home: React.FC = () => {
  return (
    <>
      <NavBar/>
      <div className="home">
        <Header />
        <Chat />
      </div>
    </>
  );
};
export default Home;
