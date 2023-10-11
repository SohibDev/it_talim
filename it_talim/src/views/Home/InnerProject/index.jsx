import React from "react";
import Slider from "react-slick";
import BottomPng from "../../../assets/img/technology-millennials-and-lifestyle-concept-carefree-cute-brunette-female-student-put-on-headphones-plug-in-smartphone-picking-song-and-smiling-standing-blue-background-mak.png";
import Guy from "../../../assets/icon/Handsome.png";
import RightArrow from "../../../assets/icon/right_arrow_home.svg";
import News from "../../../assets/img/robot-handshake-human-background-futuristic-digital-age 2.png";
import Globe from "../../../assets/icon/Glob.svg";
import Edu8 from "../../../assets/icon/edu8.svg";
import Linked from "../../../assets/icon/Linked.svg";
import Plus from "../../../assets/icon/plus.svg";
import Plus2 from "../../../assets/icon/plus2.svg";
import BBC from "../../../assets/icon/BBC_Logo_2021 3.svg";
import "./style.css";

const InnerProject = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
  };

  return (
    <div className="container">
      <div className="opportunities">
        <div className="title">
          <div className="icon">
            <span></span>
            <p>Imkoniyatlar</p>
          </div>
          <h3>ta’lim berilgan imkoniyatlar</h3>
        </div>
        <ul className="list">
          <li className="item">
            <img src={Edu8} alt="Project Image" />
            <div className="details">
              <h4>
                Zamonaviy teledasturlar orqali yoshlarni AKT sohasiga kengroq
                jalb qilish
              </h4>
              <p>
                O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish
                va ularning it-ko‘nikmalarini ko'nikmalarini rivojlantirish
              </p>
              <button>batafsil</button>
            </div>
          </li>
          <li className="item">
            <img src={Edu8} alt="Project Image" />
            <div className="details">
              <h4>
                Zamonaviy teledasturlar orqali yoshlarni AKT sohasiga kengroq
                jalb qilish
              </h4>
              <p>
                O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish
                va ularning it-ko‘nikmalarini ko'nikmalarini rivojlantirish
              </p>
              <button>batafsil</button>
            </div>
          </li>
          <li className="item">
            <img src={Edu8} alt="Project Image" />
            <div className="details">
              <h4>
                Zamonaviy teledasturlar orqali yoshlarni AKT sohasiga kengroq
                jalb qilish
              </h4>
              <p>
                O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish
                va ularning it-ko‘nikmalarini ko'nikmalarini rivojlantirish
              </p>
              <button>batafsil</button>
            </div>
          </li>
        </ul>
      </div>
      <hr />
      <div className="international">
        <div className="title">
          <div className="icon">
            <span></span>
            <p>Xalqaro</p>
          </div>
          <h3>ta’lim berilga imkoniyatlardan foydalaish kerak</h3>
        </div>
        <div className="international-top">
          <div className="description">
            <p>
              Bizga A’zo bo’ling. Biznesingiz va siz dunyo taniydigan
              darajadasiz
            </p>
          </div>
          <ul className="list">
            <li className="item">
              <div className="image">
                <p>A’zo bo’lish</p>
                <img src={Linked} alt="Image" />
              </div>
              <button>
                A’zolik <img src={Plus} />
              </button>
            </li>
            <li className="item">
              <div className="image">
                <p>A’zo bo’lish</p>
                <img src={Linked} alt="Image" />
              </div>
              <button>
                A’zolik <img src={Plus} />
              </button>
            </li>
          </ul>
        </div>
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
            <img src={BBC} alt="Slider Image" />
          </div>
          <div>
            <img src={BBC} alt="Slider Image" />
          </div>
          <div>
            <img src={BBC} alt="Slider Image" />
          </div>
          <div>
            <img src={BBC} alt="Slider Image" />
          </div>
        </Slider>
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
      <hr />
      <div className="blog">
        <div className="title">
          <div className="icon">
            <span></span>
            <p>Partnyorlar</p>
          </div>
          <h3>it ta’lim uyushmasi jamoasi</h3>
          <button>
            batafsil <img src={RightArrow} />
          </button>
        </div>
        <Slider {...settings} className="list">
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
        <div className="cta">
          <img src={BottomPng} />
          <div className="cta-details">
            <img src={Globe} />
            <h3>ta’limga berilgan imkoniyatdan foydalaish kerak</h3>
            <div className="cta-description">
              <p>
                O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish
                va ularning
              </p>
              <button>
                Kirish <img src={Plus2} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default InnerProject;
