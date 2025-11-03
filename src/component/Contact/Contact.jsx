import React from "react";
import "./Contact.css";

 function Contact() {
  return (
    <section className="contact-section text-center" id="contact">
      <h2 className="section-title text-uppercase mb-4">Contact Me</h2>
      <div className="divider-custom">
        <div className="divider-line"></div>
        <div className="divider-icon"><i className="fas fa-star"></i></div>
        <div className="divider-line"></div>
      </div>

      <form className="contact-form mx-auto">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Full name" />
        </div>
        <div className="form-group">
          <input type="email" className="form-control" placeholder="Email address" />
        </div>
        <div className="form-group">
          <input type="tel" className="form-control" placeholder="Phone number" />
        </div>
        <div className="form-group">
          <textarea className="form-control" rows="5" placeholder="Message"></textarea>
        </div>
        <button type="submit" className="btn btn-primary btn-xl">Send</button>
      </form>
    </section>
  );
}
export default Contact;