//jshint esversion:6
import React from "react";


function Footer(){
  const date = new Date().getFullYear();
  return(
  <div className="footer">
  <p>© {date} David Balladares</p>
  <p>All Rights Reserved</p>
  </div>
);
}

export default Footer;
