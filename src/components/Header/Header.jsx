import React, { useState } from "react";
import "./Header.css";
const Header = () => {
  
  return (
   <div className="header">
    <div className="right"><img src="./public/WhatsApp Image 2024-08-09 at 17.55.39_c6f72915.jpg"/></div>
    <div className="left">
        <ul>
            <li>Home</li>
            <li>Explore</li>
            <li>Add Listing</li>
        </ul>
    </div>
   </div>
  );
};

export default Header;
