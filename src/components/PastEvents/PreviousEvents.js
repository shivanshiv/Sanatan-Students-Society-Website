import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import pastevents from '../../data/pastevents';
import './previousevents.css';

const PreviousEvents = () => {
  return (
    <div className="previous-events-container">
      <Header />
      
      <main className="main-section">
        <div className="events-content">
          <h1 className="page-title">Past Events</h1>
          
          {pastevents.map((event, index) => {
            const imageCount = [event.image1, event.image2, event.image3, event.image4].filter(Boolean).length;
            let gridClass = 'images-grid';
            if (imageCount === 2) gridClass += ' one-by-two';
            else if (imageCount >= 3 && imageCount <= 4) gridClass += ' two-by-two';
            else if (imageCount === 4) gridClass += ' four-images';

            return (
              <div key={index} className="event-card">
                <h2 className="event-name">{event.pastEventName}</h2>
                <p className="event-caption">{event.caption}</p>
                
                <div className={gridClass}>
                  {event.image1 && (
                    <div className="image-cell">
                      <img src={event.image1} alt={`${event.pastEventName} 1`} />
                    </div>
                  )}
                  {event.image2 && (
                    <div className="image-cell">
                      <img src={event.image2} alt={`${event.pastEventName} 2`} />
                    </div>
                  )}
                  {event.image3 && (
                    <div className="image-cell">
                      <img src={event.image3} alt={`${event.pastEventName} 3`} />
                    </div>
                  )}
                  {event.image4 && (
                    <div className="image-cell">
                      <img src={event.image4} alt={`${event.pastEventName} 4`} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PreviousEvents;