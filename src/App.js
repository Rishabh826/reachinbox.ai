import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Onebox from "./components/Onebox/Onebox";
import { UserInfoProvider } from "./ContextAPI";

const App = () => {
  return (
    <UserInfoProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/onebox" element={<Onebox />} />
        </Routes>
      </Router>
    </UserInfoProvider>
  );
};

export default App;
