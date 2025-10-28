import "./About.css";

function About() {
  return (
    <section className="about text-center" id="about">
      <div className="container">
        <h2 className="about-title text-uppercase text-white">About</h2>

        <div className="about-divider">
          <span className="line"></span>
          <span className="star">★</span>
          <span className="line"></span>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-4">
            <p className="about-text">
              Freelancer is a free bootstrap theme created by Start Bootstrap. The
              download includes the complete source files including HTML, CSS, and
              JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="col-lg-4">
            <p className="about-text">
              You can create your own custom avatar for the masthead, change the icon
              in the dividers, and add your email address to the contact form to make
              it fully functional!
            </p>
          </div>
        </div>

        <div className="mt-4">
          <a className="btn btn-outline-light btn-lg" href="#!">
            <i className="fas fa-download me-2"></i>
            Free Download!
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
