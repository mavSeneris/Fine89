import React, { useState, useEffect } from 'react';
import logo from "../assets/images/logo.png";
import logoHouse from "../assets/images/logo-house.png";

export default function Header() {
  const [date, setDate] = useState(new Date());
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 0;
      setIsSticky(isScrolling);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function formatdate(date) {
    const days = [
      "Sunday", "Monday",
      "Tuesday", "Wednesday",
      "Thursday", "Friday",
      "Saturday"
    ];
    const months = [
      "January", "February",
      "March", "April",
      "May", "June",
      "July", "August",
      "September", "October",
      "November", "December"
    ];

    const dayOfWeek = days[date.getDay()];
    const month = months[date.getMonth()];
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();

    return `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`;
  }

  return (
    <div className="header container">
      <span className="header-date">
        {formatdate(date)}
      </span>
      <div className="header--title">
        <div className="header--logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1>FINE89 COFFEE</h1>
        <div className="header--logo">
          <img src={logo} alt="Logo" />
        </div>
      </div>
      <div className="header--sub-title">
        <span>ESTD. 2014</span>
        <div className="header--logo-house"><img src={logoHouse} alt="House Logo" /></div>
        <span>MANILA - PH</span>
      </div>

      <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
        <div className="nav--links">
          <a href="#">About</a>
          <a href="#">Product</a>
          <a href="#">Gallery</a>
          <a href="#">Reviews</a>
        </div>
      </nav>
    </div>
  );
}
