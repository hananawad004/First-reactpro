import "./portfolio.css";
import cabin from "../../assets/images/cabin.png";
import cake from "../../assets/images/cake.png";
import circus from "../../assets/images/circus.png";
import game from "../../assets/images/game.png";
import safe from "../../assets/images/safe.png";
import submarine from "../../assets/images/submarine.png";


function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container text-center">
        <h2 className="portfolio-title text-uppercase">Portfolio</h2>

        <div className="portfolio-divider">
          <span className="line"></span>
          <span className="star">★</span>
          <span className="line"></span>
        </div>

        <div className="row justify-content-center">
          {[cabin, cake, circus, game, safe, submarine].map((image, index) => (
            <div className="col-md-6 col-lg-4 mb-4" key={index}>
              <div className="portfolio-item">
                <img src={image} alt={`portfolio-${index}`} className="img-fluid" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
