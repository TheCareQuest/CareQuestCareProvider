import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';
// import Header from 'Header.css';
const Layout = () => {
  return (
    <>
          {/* <div className="white-gradient"></div> */}

    <div style={{ background: "var(--black)", overflow: "hidden" }}>
      <Header />
      <Outlet />
    </div>
    <Footer />
  </>

  );
};

export default Layout;
