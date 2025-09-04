import React from "react";
import "./contactus.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ContactUs = () => {
    return (
        <main className='contact-us-decor'>
          <Header />
    
          <div className='main-content'>
            <div className="logo-container">
              <img src="/sss_images/logo.png" alt="Sanatan Students' Society Logo" />
            </div>
            
            <h1>Contact Us</h1>

            <p>
              For any inquiries, feedback, or support, please reach out to us through any of our social platforms. We'd love to hear from you!
            </p>

            <div className="contact-links-container">
                <a href="mailto:info.sanatanstudentssociety@gmail.com" className="contact-item gmail">
                    <img src="/sss_images/gmail.png" alt="Gmail" />
                    <span>Gmail</span>
                </a>
                
                <a href="https://instagram.com/sssuofc" target="_blank" rel="noopener noreferrer" className="contact-item instagram">
                    <img src="/sss_images/instagram.png" alt="Instagram" />
                    <span>Instagram</span>
                </a>
                
                <a href="https://www.facebook.com/checkpoint/1501092823525282/?next=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61565415237448%26mibextid%3DZbWKwL#" target="_blank" rel="noopener noreferrer" className="contact-item facebook">
                    <img src="/sss_images/facebook.png" alt="Facebook" />
                    <span>Facebook</span>
                </a>
                
                <a href="https://linktr.ee/sssuofc" target="_blank" rel="noopener noreferrer" className="contact-item linktree">
                    <img src="/sss_images/linktree.png" alt="Linktree" />
                    <span>Linktree</span>
                </a>
            </div>
          </div>
    
          <Footer />
        </main>
    );
}

export default ContactUs;