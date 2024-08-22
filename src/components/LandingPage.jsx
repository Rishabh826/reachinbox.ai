import React from "react";
import Header from "./Header"; 
import LoginPage from "./LoginPage";

const LandingPage = () => {
  return (
    <div className="h-[100vh] bg-black">
      <Header />
      <LoginPage />
    </div>
  );
};

export default LandingPage;