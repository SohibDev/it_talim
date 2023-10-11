import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import Guy from "../../../assets/icon/Close-up of young successf.png";
import BBC from "../../../assets/icon/BBC_Logo_2021 3.svg";
import Pic from "../../../assets/img/Maqadimiz.png";

const Event = () => {
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

  const secondSliderSettings = {
    ...settings,
    slidesToShow: 4,
  };

  let slider;

  return (
    <div className="containerEvent">
      <h3 className="primary-heading">Tadbitlardan lafvhalar</h3>
      <div className="carousel-container">
        <div className="carousel-inner-container">
          <div className="carousel-card">
            <img src={Pic} alt="" />
            <p>
              O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish va
              ularning it-ko‘nikmalarini rivojlantirish
            </p>
          </div>
          <div className="carousel-card">
            <img src={Pic} alt="" />
            <p>
              O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish va
              ularning it-ko‘nikmalarini rivojlantirish
            </p>
          </div>
          <div className="carousel-card">
            <img src={Pic} alt="" />
            <p>
              O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish va
              ularning it-ko‘nikmalarini rivojlantirish
            </p>
          </div>
        </div>

        <div className="button-container">
          <button
            className="carousel-button prev"
            onClick={() => slider.slickPrev()}
          >
            &#8592;
          </button>
          <button
            className="carousel-button next"
            onClick={() => slider.slickNext()}
          >
            &#8594;
          </button>
        </div>
      </div>
      <hr />
      <div>
        <div className="Team">
          <div className="Team-Container">
            <span className="Team-Icon"></span>
            <p className="Team-Name">Team</p>
          </div>
          <h3 className="Team-Title">it ta’lim uyushmasi jamoasi</h3>
        </div>

        <Slider {...secondSliderSettings} className="list">
          <div className="item">
            <img src={Guy} />
            <div className="author">
              <p>Nodirbek Barnayev</p>
              <p>Ijrochi director</p>
            </div>
          </div>
          <div className="item">
            <img src={Guy} />
            <div className="author">
              <p>Nodirbek Barnayev</p>
              <p>Ijrochi director</p>
            </div>
          </div>
          <div className="item">
            <img src={Guy} />
            <div className="author">
              <p>Nodirbek Barnayev</p>
              <p>Ijrochi director</p>
            </div>
          </div>
          <div className="item">
            <img src={Guy} />
            <div className="author">
              <p>Nodirbek Barnayev</p>
              <p>Ijrochi director</p>
            </div>
          </div>
          <div className="item">
            <img src={Guy} />
            <div className="author">
              <p>Nodirbek Barnayev</p>
              <p>Ijrochi director</p>
            </div>
          </div>
        </Slider>
      </div>
      <hr />
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

export default Event;
