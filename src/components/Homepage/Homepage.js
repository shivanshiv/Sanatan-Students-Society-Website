import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainSection from "./MainSection";

const Homepage = () => {
    return (
      <div style={{ position: 'relative', minHeight: '100vh', overflow: 'visible' }}>
        <Header />
        <MainSection className="homepage-content" />
        <Footer />
      </div>
    );
};

export default Homepage;