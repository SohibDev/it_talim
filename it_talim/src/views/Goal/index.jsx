import React from "react";
import "./style.css";
import HeroImg from "../../assets/img/Maqadimiz.png";
import Edu from "../../assets/icon/edu22.svg";
import Geom from "../../assets/icon/geom2.svg";
import BBC from "../../assets/icon/BBC_Logo_2021 3.svg";
import RightArrow from "../../assets/icon/right_arrow_home.svg";
import News from "../../assets/img/robot-handshake-human-background-futuristic-digital-age 2.png";
import Slider from "react-slick";

const Goal = () => {
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
    <div className="goal-container">
      <h2 className="header-primary">maqsadimiz bizni dunyo tan olishi</h2>
      <img className="image-main" src={HeroImg} />
      <div className="content-container">
        <div className="text-container">
          <p className="text-description">
            O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish va
            ularning it-ko‘nikmalarini ko'nikmalarini rivojlantirish
          </p>
          <button className="button-primary">Kirish</button>
        </div>
        <hr className="divider" />
        <h3 className="header-secondary">Bosqichli maqsadimiz</h3>
        <ul class="education-list">
          <li class="education-list-item">
            <div className="education-div">
              <img src={Edu} class="education-icon" />
            </div>
            <p class="education-description">
              IT sohasida faoliyat yuritayotgan davlat va nodavlat ta'lim
              muassasalarini qo'llab-quvvatlash
            </p>
          </li>
          <li class="education-list-item">
            <div className="education-div">
              <img src={Edu} class="education-icon" />
            </div>
            <p class="education-description">
              IT sohasida faoliyat yuritayotgan davlat va nodavlat ta'lim
              muassasalarini qo'llab-quvvatlash
            </p>
          </li>
          <li class="education-list-item">
            <div className="education-div">
              <img src={Edu} class="education-icon" />
            </div>
            <p class="education-description">
              IT sohasida faoliyat yuritayotgan davlat va nodavlat ta'lim
              muassasalarini qo'llab-quvvatlash
            </p>
          </li>
          <li class="education-list-item">
            <div className="education-div">
              <img src={Edu} class="education-icon" />
            </div>
            <p class="education-description">
              IT sohasida faoliyat yuritayotgan davlat va nodavlat ta'lim
              muassasalarini qo'llab-quvvatlash
            </p>
          </li>
        </ul>
        <hr />
        <ul class="feature-list">
          <li class="feature-item">
            <div class="feature-content">
              <div class="feature-title">
                <span class="feature-icon"></span>
                <h4 class="feature-heading">Jahon bozorini egallash</h4>
              </div>
              <p class="feature-description">
                Connect with the growing workforce and companies in the field of
                the
              </p>
            </div>
            <img class="feature-image" src={Geom} />
          </li>
          <hr class="feature-divider" />
          <li class="feature-item">
            <div class="feature-content">
              <div class="feature-title">
                <span class="feature-icon"></span>
                <h4 class="feature-heading">Jahon bozorini egallash</h4>
              </div>
              <p class="feature-description">
                Connect with the growing workforce and companies in the field of
                the
              </p>
            </div>
            <img class="feature-image" src={Geom} />
          </li>
          <hr class="feature-divider" />
          <li class="feature-item">
            <div class="feature-content">
              <div class="feature-title">
                <span class="feature-icon"></span>
                <h4 class="feature-heading">Jahon bozorini egallash</h4>
              </div>
              <p class="feature-description">
                Connect with the growing workforce and companies in the field of
                the
              </p>
            </div>
            <img class="feature-image" src={Geom} />
          </li>
        </ul>
      </div>
      <hr />
      <div className="news">
        <div className="title">
          <div className="icon">
            <span></span>
            <p>Partnyorlar</p>
          </div>
          <h3>Yangiliklar va blog</h3>
          <p className="newsText">
            O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish va
            ularning it-ko‘nikmalarini ko'nikmalarini rivojlantirish
          </p>
        </div>
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
        </ul>
      </div>
      <div className="partners">
        <div className="title">
          <div className="icon">
            <span></span>
            <p>Partnyorlar</p>
          </div>
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

export default Goal;
