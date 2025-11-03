import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer text-center">
      <div className="footer-top py-5">
        <div className="footer-col">
          <h4>LOCATION</h4>
          <p>2215 John Daniel Drive<br />Clark, MO 65243</p>
        </div>

        <div className="footer-col">
          <h4>AROUND THE WEB</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-dribbble"></i></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>ABOUT FREELANCER</h4>
          <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Start Bootstrap.</p>
        </div>
      </div>

      <div className="footer-bottom py-3">
        <small>Copyright &copy; Your Website 2025</small>
      </div>
    </footer>
  );
}
