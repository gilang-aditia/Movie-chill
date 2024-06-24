import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { AuthContextProvider } from "./context/AuthContext";

const App = () => {
  const location = useLocation();

  const hideNavbarPaths = ["/login", "/signup"];
  const hideFooterPaths = ["/login", "/signup"];

  const shouldHideNavbar = () => {
    return hideNavbarPaths.includes(location.pathname);
  };
  const shouldHideFooter = () => {
    return hideFooterPaths.includes(location.pathname);
  };

  return (
    <>
      <AuthContextProvider>
        {!shouldHideNavbar() && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        {!shouldHideFooter() && <Footer />}
      </AuthContextProvider>
    </>
  );
};

export default App;
