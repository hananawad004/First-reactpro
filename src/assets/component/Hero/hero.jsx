import "./hero.css";
import avatar from "../../../assets/images/avatars.svg";

function Hero() {
  return (
    <header className="hero text-center">
      <div className="hero-content">
        <img src={avatar} alt="avatar" className="hero-avatar" />
        <h1 className="hero-title">START BOOTSTRAP</h1>
        <div className="hero-divider">
          <span className="line"></span>
          <span className="star">★</span>
          <span className="line"></span>
        </div>
        <p className="hero-subtitle">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </header>
  );
}

export default Hero;
