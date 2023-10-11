import "./style.css";
import Photo from "../../assets/img/photo 1.png";
import Media from "../../assets/icon/media1.svg";
import Edu from "../../assets/icon/edu41.svg";
import Sloy from "../../assets/icon/Слой2.svg";
import Arrow from "../../assets/icon/right_arrow_home.svg";
import BBC from "../../assets/icon/BBC_Logo_2021 3.svg";
import RightArrow from "../../assets/icon/right_arrow_home.svg";
import News from "../../assets/img/robot-handshake-human-background-futuristic-digital-age 2.png";
import Slider from "react-slick";
const Education = () => {
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
    <div className="education-container">
      <div className="education-content">
        <div className="education-header">
          <h3 className="education-title">imkoniyatdan foydalaning</h3>
          <ul className="education-list">
            <li className="education-item">
              <span className="education-icon"></span>
              <p className="education-description">
                IT ko’rsatuvlar va kontentlar ko’paytirish
              </p>
            </li>
            <li className="education-item">
              <span className="education-icon"></span>
              <p className="education-description">Grand va rag’batlantirish</p>
            </li>
            <li className="education-item">
              <span className="education-icon"></span>
              <p className="education-description">
                Ishga kirish kafolati bilan
              </p>
            </li>
          </ul>
          <button className="education-button">Kirish</button>
        </div>
        <img className="education-image" src={Photo} />
      </div>
      <div class="main-container">
        <h3 class="main-title">Bosqichli strategiya</h3>
        <ul class="main-list">
          <li class="list-item">
            <div class="item-content">
              <h3 class="item-title">
                IT ta’lim va online kontent ko’paytirish
              </h3>
              <p class="item-description">
                O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish
                va ularning it-ko‘nikmalarini ko'nikmalarini rivojlantirish
              </p>
              <button class="item-button">
                batafsil <img src={Arrow} />
              </button>
            </div>
            <img class="list-item-image" src={Edu} />
          </li>
          <li class="list-item">
            <div class="item-content">
              <h3 class="item-title">
                IT ta’lim va online kontent ko’paytirish
              </h3>
              <p class="item-description">
                O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish
                va ularning it-ko‘nikmalarini ko'nikmalarini rivojlantirish
              </p>
              <button class="item-button">
                batafsil <img src={Arrow} />
              </button>
            </div>
            <img class="list-item-image" src={Edu} />
          </li>
          <li class="list-item">
            <div class="item-content">
              <h3 class="item-title">
                IT ta’lim va online kontent ko’paytirish
              </h3>
              <p class="item-description">
                O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish
                va ularning it-ko‘nikmalarini ko'nikmalarini rivojlantirish
              </p>
              <button class="item-button">
                batafsil <img src={Arrow} />
              </button>
            </div>
            <img class="list-item-image" src={Edu} />
          </li>
        </ul>
        <div className="opportunities-top">
          <h3 className="opportunities-subtitle">Qadamlar</h3>
          <ul className="opportunities-list">
            <li className="opportunities-item">
              <img src={Sloy} className="opportunities-item-image" />
              <p className="opportunities-item-description">
                O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish
              </p>
              <hr className="separator" />
            </li>
            <li className="opportunities-item">
              <img src={Sloy} className="opportunities-item-image" />
              <p className="opportunities-item-description">
                O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish
              </p>
              <hr className="separator" />
            </li>
            <li className="opportunities-item">
              <img src={Sloy} className="opportunities-item-image" />
              <p className="opportunities-item-description">
                O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish
              </p>
              <hr className="separator" />
            </li>
            <li className="opportunities-item">
              <img src={Sloy} className="opportunities-item-image" />
              <p className="opportunities-item-description">
                O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish
              </p>
              <hr className="separator" />
            </li>
          </ul>
        </div>
        <h3 class="main-title">Ishlarimiz</h3>
        <ul class="second-list">
          <li class="list-item">
            <img class="list-item-image" src={Media} />
            <div class="item-content">
              <h3 class="item-title">
                IT ta’lim va online kontent ko’paytirish
              </h3>
              <p class="item-description">
                O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish
                va ularning it-ko‘nikmalarini ko'nikmalarini rivojlantirish
              </p>
            </div>
          </li>
          <li class="list-item">
            <img class="list-item-image" src={Media} />
            <div class="item-content">
              <h3 class="item-title">
                IT ta’lim va online kontent ko’paytirish
              </h3>
              <p class="item-description">
                O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish
                va ularning it-ko‘nikmalarini ko'nikmalarini rivojlantirish
              </p>
            </div>
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

export default Education;
