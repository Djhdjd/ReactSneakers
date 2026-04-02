import "../assets/style.css";
import BannerImage from "../assets/img/Banner.png";

export default function Banner() {
  return (
    <section className="banner">
      <div className="banner__content">
        <h2 className="banner__title">
          <span className="banner__title--green">Stan Smith</span>,
          <br />
          Forever!
        </h2>
        <button className="banner__button">КУПИТЬ</button>
      </div>
      <div className="banner__image-block">
        <img className="banner__image" src={BannerImage} alt="Stan Smith Banner" />
        <span className="banner__vertical">KERMIT</span>
      </div>
    </section>
  );
}