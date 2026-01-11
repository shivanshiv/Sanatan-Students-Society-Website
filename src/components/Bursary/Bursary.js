import React from "react";
import "./bursary.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Bursary = () => {
  return (
    <div className="bursary-container">
      <Header />
      
      <main className="main-section">
        <div className="events-content">
          <div>
            <h1>Chanakya Vidyarthi Bursary</h1>
          </div>

          <div className="bursary-body">
            Heartfelt thanks to all who applied for the Chanakya Vidyarthi Bursary. We are truly encouraged by the overwhelming interest and number of applications received.
          </div>

          <div>
            <h2>The Recipients (Vidayarthis) - Fall 2025</h2>
          </div>

          <div className="recipients-container">
          <div className="recipient-card">
            <div className="image-placeholder">
              <img src="/sss_images/Vidayarthis/Mandeep_K.png" alt="Mandeep Kumar" className="recipient-image" />
            </div>
            <div className="recipient-info">
              <h4 className="recipient-name">MANDEEP<br/>KUMAR</h4>
              <p className="recipient-designation">Vidyarthi, Chanakya Vidyarthi Bursary</p>
              <p>Mandeep, an undergraduate student at the University of Calgary, actively contributes to community volunteering initiatives centered on Sanatan Dharma and is a dedicated member of the Sanatan Students’ Society.</p>
            </div>
          </div>

          <div className="recipient-card">
            <div className="image-placeholder">
              <img src="/sss_images/Vidayarthis/Soujatya_M.png" alt="Soujatya Mondal" className="recipient-image" />
            </div>
            <div className="recipient-info">
              <h4 className="recipient-name">SOUJATYA<br/>MONDAL</h4>
              <p className="recipient-designation">Vidyarthi, Chanakya Vidyarthi Bursary</p>
              <p>Soujatya, an undergraduate student at the University of Calgary, actively serves the community through initiatives inspired by Sanatan Dharma and is a committed member of the Sanatan Students’ Society.</p>
            </div>
          </div>

          <div className="recipient-card">
            <div className="image-placeholder">
              <img src="/sss_images/Vidayarthis/Harshita_C.png" alt="Harshita Chokkalingam" className="recipient-image" />
            </div>
            <div className="recipient-info">
              <h4 className="recipient-name">HARSHITA<br/>CHOKKALINGAM</h4>
              <p className="recipient-designation">Vidyarthi, Chanakya Vidyarthi Bursary</p>
              <p>Harshita, an undergraduate student at the University of Calgary, is involved in community volunteering guided by Sanatan Dharma and contributes actively as a member of the Sanatan Students’ Society.</p>
            </div>
          </div>
        </div>
        
        <div className="additional-info">
          <p>For those applicants whose applications were not approved this semester, don't be disheartened because Chanakya Vidyarthi Bursary (A commitment to student support) will reopen in the upcoming semester! Follow us for further updates!</p>
          <div className="social-links">
            <a href="https://www.instagram.com/sanatanstudentssocietyucalgary/" target="_blank" rel="noopener noreferrer">
              <img src="/sss_images/instagram.png" alt="Instagram" className="social-icon" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61567387864367" target="_blank" rel="noopener noreferrer">
              <img src="/sss_images/facebook.png" alt="Facebook" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Bursary;