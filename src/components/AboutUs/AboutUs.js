/**
 * The AboutUs function renders a main section of a React component that displays information about the
 * Sanatan Students' Society at the University of Calgary.
 * @returns The AboutUs component is being returned, which includes the main section of the webpage
 * with the header, main content about the Sanatan Students' Society, and the footer.
 */
import React from "react";
import "./aboutus.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const AboutUs = () => {
  return (
    <main className="main-with-decor">
      <Header />

      <div className="main-content">
        <div>
          <img
            src="./sss_images/logo.png"
            className="logo-style"
            alt="Sanatan Students' Society Logo"
          />
        </div>

        <div>
          <h1>About Us</h1>
        </div>

        <div className="about-paragraph">
          Sanatan Students' Society is a holistic and inclusive student-led organization rooted in the
          eternal philosophy of Sanatan Dharma. Established at the University of Calgary in September 2024,
          our mission is to support students in all aspects of life—spiritual, cultural, academic, mental,
          and professional—through the lens of timeless values such as compassion, discipline,
          self-reflection, and service.
        </div>

        <div className="about-paragraph">
          What sets us apart from other religious or cultural student groups is our all-encompassing approach.
          While many clubs focus on a single dimension like spirituality, worship, or career development,
          we integrate all of these under one unified framework. Sanatan Students’ Society is not just a
          spiritual club—it is a support system for many aspects of a student. We offer volunteering, job,
          and networking opportunities, overall enhancing a student's University experience.
        </div>

        <div className="about-paragraph">
          From hosting vibrant religious celebrations to conducting biweekly Kirtans and Sanatan (Hindu)
          philosophy seminars, we create spaces for inner growth and community bonding. The club focuses on
          student mental health through the Kirtan sessions, while also incorporating meditation into its events.
        </div>

        <div className="about-paragraph">
          Guided by our motto “Vasudhaiva Kutumbakam”—The World is One Family—we welcome students of all
          backgrounds and nationalities. Our diverse membership includes individuals from multiple countries,
          united by shared values of service, reflection, and growth.
        </div>

        <div className="about-paragraph">
          Whether a student is looking to deepen their spiritual journey, celebrate their culture, develop
          their career, serve the community, or simply find a place where they belong—the Sanatan Students'
          Society is here to support them.
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default AboutUs;
