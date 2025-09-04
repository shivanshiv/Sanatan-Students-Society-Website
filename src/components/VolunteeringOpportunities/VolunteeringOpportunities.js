import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import volunteerinfo from '../../data/volunteerinfo';
import './volunteering.css';

const VolunteeringOpportunities = () => {
  return (
    <div>
      <Header />
      <div className="volunteering-container">
        <div className="volunteering-content">
          <h1 className="page-title">Volunteering Opportunities</h1>
          <div className="opportunities-grid">
            {volunteerinfo.map((opportunity, index) => (
              <div key={index} className="opportunity-card">
                <div className="card-header">
                  <h2 className="event-title">{opportunity.volunteerEvent}</h2>
                </div>
                <div className="card-content">
                  <div className="info-section">
                  <div className="info-item">
                      <span className="info-label">Date:</span>
                      <span className="info-value">{opportunity.date}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Location:</span>
                      <span className="info-value">{opportunity.roomSpace}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Building:</span>
                      <span className="info-value">{opportunity.building}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Setup Time:</span>
                      <span className="info-value">{opportunity.setup}</span>
                    </div>
                    <div className="info-item">
                      <span className="info-label">Cleanup Time:</span>
                      <span className="info-value">{opportunity.cleanup}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VolunteeringOpportunities;
