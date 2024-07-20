import React from 'react';
import './GroupTours.scss';
import { FaClock, FaUserFriends } from 'react-icons/fa';
import oblachko from '../../assets/images/oblachko.png';

function GroupTours() {
  return (
    <section className="group-tours">
      <div className="tour-card">
        <img src={oblachko} alt="Tour" className="tour-image" />
        <div className="tour-info">
          <div className="tour-price">$1,900 / per person</div>
          <div className="tour-details">
            <span className="tour-duration"><FaClock /> 7D/6N</span>
            <span className="tour-people"><FaUserFriends /> People: 5</span>
          </div>
          <h3 className="tour-title">Alai Heights, Kyrgyzstan</h3>
          <p className="tour-description">
            Welcome to [Travel Website Name], where wanderlust meets seamless travel experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default GroupTours;
