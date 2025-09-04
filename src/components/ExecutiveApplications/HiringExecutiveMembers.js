import React from "react";
import "./hiring.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const HiringExecutiveMembers = () => {
  return (
    <main className='hiring-with-decor'>
      <Header />
      
      <div className='hiring-content'>
        <div>
          <img src="./sss_images/logo.png" className='hiring-logo' />
        </div>
        <div className='hiring-h1'>
          <h1>Executive Applications</h1>
        </div>
        <br />
        
        <p>
          Stay tuned for executive applications!
        </p>
      </div>
      
      <Footer />
    </main>
  );
};

export default HiringExecutiveMembers;
