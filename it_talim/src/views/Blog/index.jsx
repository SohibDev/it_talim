import React from "react";
import "./style.css";
import HeroImg from "../../assets/img/Maqadimiz.png";
import BBC from "../../assets/icon/BBC_Logo_2021 3.svg";
import RightArrow from "../../assets/icon/right_arrow_home.svg";
import News from "../../assets/img/robot-handshake-human-background-futuristic-digital-age 2.png";
import Slider from "react-slick";


const Blog = () => {
  const settings = {
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    focusOnSelect: true,
    variableWidth: true,
    infinite: true,
    autoplay: true,
    speed: 1500,
  };
  return (
    <div className="container-blog">
      <div class="news-container">
        <img class="news-image" src={HeroImg} />
        <div class="news-content">
          <h3 class="news-title">Yangiliklar va blog</h3>
          <p class="news-description">
            O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish va
            ularning it-ko‘nikmalarini ko'nikmalarini rivojlantirish
            O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish va
            ularning it-ko‘nikmalarini ko'nikmalarini rivojlantirish
          </p>
        </div>
      </div>
      <div className="news">
        <ul className="list">
          <li className="item">
            <img src={News} alt="News Image" />
            <div className="details">
              <p>O‘zbekistonda qizlarni aktlari sohasiga yana-da kengroq</p>
              <img src={RightArrow} alt="News Image" />
            </div>
            <hr />
          </li>
          <li className="item">
            <img src={News} alt="News Image" />
            <div className="details">
              <p>O‘zbekistonda qizlarni aktlari sohasiga yana-da kengroq</p>
              <img src={RightArrow} alt="News Image" />
            </div>
            <hr />
          </li>
          <li className="item">
            <img src={News} alt="News Image" />
            <div className="details">
              <p>O‘zbekistonda qizlarni aktlari sohasiga yana-da kengroq</p>
              <img src={RightArrow} alt="News Image" />
            </div>
            <hr />
          </li>
          <li className="item">
            <img src={News} alt="News Image" />
            <div className="details">
              <p>O‘zbekistonda qizlarni aktlari sohasiga yana-da kengroq</p>
              <img src={RightArrow} alt="News Image" />
            </div>
            <hr />
          </li>
          <li className="item">
            <img src={News} alt="News Image" />
            <div className="details">
              <p>O‘zbekistonda qizlarni aktlari sohasiga yana-da kengroq</p>
              <img src={RightArrow} alt="News Image" />
            </div>
            <hr />
          </li>
          <li className="item">
            <img src={News} alt="News Image" />
            <div className="details">
              <p>O‘zbekistonda qizlarni aktlari sohasiga yana-da kengroq</p>
              <img src={RightArrow} alt="News Image" />
            </div>
            <hr />
          </li>
          <li className="item">
            <img src={News} alt="News Image" />
            <div className="details">
              <p>O‘zbekistonda qizlarni aktlari sohasiga yana-da kengroq</p>
              <img src={RightArrow} alt="News Image" />
            </div>
            <hr />
          </li>
          <li className="item">
            <img src={News} alt="News Image" />
            <div className="details">
              <p>O‘zbekistonda qizlarni aktlari sohasiga yana-da kengroq</p>
              <img src={RightArrow} alt="News Image" />
            </div>
            <hr />
          </li>
          <li className="item">
            <img src={News} alt="News Image" />
            <div className="details">
              <p>O‘zbekistonda qizlarni aktlari sohasiga yana-da kengroq</p>
              <img src={RightArrow} alt="News Image" />
            </div>
            <hr />
          </li>
        </ul>
      </div>
      <div className="partners">
        <div className="title">
          <h3>Xamkorlar</h3>
          <p className="partnerText">
            O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish va
            ularning it-ko‘nikmalarini ko'nikmalarini rivojlantirish
          </p>
        </div>
        <Slider {...settings} className="partSlider">
          <div>
            <img src={BBC} alt="BBC Image" />
          </div>
          <div>
            <img src={BBC} alt="BBC Image" />
          </div>
          <div>
            <img src={BBC} alt="BBC Image" />
          </div>
          <div>
            <img src={BBC} alt="BBC Image" />
          </div>
          {/* Repeat this structure for additional partner images */}
        </Slider>
      </div>
      <hr />
    </div>
  );
};

export default Blog;
