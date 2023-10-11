import "./style.css";
import Edu101 from "../../../assets/icon/edu101.svg";
import Edu21 from "../../../assets/icon/edu21.svg";
import Edu41 from "../../../assets/icon/edu41.svg";
import Sloy from "../../../assets/icon/Слой2.svg";
import VideoSvg from "../../../assets/icon/media1.svg";
import ArrowRightHome from "../../../assets/icon/right_arrow_home.svg";
import ArrowMid from "../../../assets/icon/right_arrow_mid.svg";
const InnerAbout = () => {
  return (
    <div className="container">
      <div className="about-section">
        <div className="about-header">
          <span className="about-icon"></span>
          <p className="about-title">about</p>
        </div>
        <div className="about-content">
          <h3 className="about-subtitle">IT ta’lim uyshmasi bilan bo’ling</h3>
          <p className="about-description">
            O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish va
            ularning it-ko‘nikmalarini ko'nikmalarini rivojlantirish
          </p>
          <button className="about-button">batafsil</button>
        </div>
        <img src={Edu101} className="about-image" />
      </div>
      <hr className="separator" />
      <div className="mission-section">
        <div className="mission-top">
          <div className="mission-header">
            <div className="mission-icon"></div>
            <p className="mission-title">maqsadimiz</p>
          </div>
          <h3 className="mission-subtitle">
            maqsadimiz bizni dunyo tan olishi
          </h3>
        </div>
        <div className="mission-content">
          <img src={Edu21} className="mission-image" />
          <ul className="mission-list">
            <li className="mission-item">
              <div>
                <p className="mission-item-description">
                  IT sohasida faoliyat yuritayotgan davlat va nodavlat ta'lim
                  muassasalarini qo'llab quvvatlash
                </p>
                <img src={ArrowRightHome} className="mission-item-image" />
              </div>
              <hr />
            </li>
            <li className="mission-item">
              <div>
                <p className="mission-item-description">
                  IT sohasida faoliyat yuritayotgan davlat va nodavlat ta'lim
                  muassasalarini qo'llab quvvatlash
                </p>
                <img src={ArrowRightHome} className="mission-item-image" />
              </div>
              <hr />
            </li>
            <li className="mission-item">
              <div>
                <p className="mission-item-description">
                  IT sohasida faoliyat yuritayotgan davlat va nodavlat ta'lim
                  muassasalarini qo'llab quvvatlash
                </p>
                <img src={ArrowRightHome} className="mission-item-image" />
              </div>
              <hr />
            </li>
            <li className="mission-item">
              <div>
                <p className="mission-item-description">
                  IT sohasida faoliyat yuritayotgan davlat va nodavlat ta'lim
                  muassasalarini qo'llab quvvatlash
                </p>
                <img src={ArrowRightHome} className="mission-item-image" />
              </div>
              <hr />
            </li>
          </ul>
        </div>
      </div>
      <hr className="separator" />
      <div className="education-section">
        <div className="education-top">
          <div className="education-header">
            <div className="education-icon"></div>
            <p className="education-title">ta’lim</p>
          </div>
          <h3 className="education-subtitle">
            ta’limga berilgan imkoniyatdan foydalanish
          </h3>
        </div>
        <ul className="education-list">
          <li className="education-item">
            <div className="education-item-content">
              <h4 className="education-item-title">
                IT ta’lim va online kontent ko’paytirish
              </h4>
              <img src={Edu41} className="education-item-image" />
              <p className="education-item-description">
                Davlat va nodavlat ta’lim muassasalari bilan hamkorlik qilish
              </p>
              <button className="education-item-button">
                batafsil <img src={ArrowRightHome} />
              </button>
            </div>
          </li>
          <li className="education-item">
            <div className="education-item-content">
              <h4 className="education-item-title">
                IT ta’lim va online kontent ko’paytirish
              </h4>
              <img src={Edu41} className="education-item-image" />
              <p className="education-item-description">
                Davlat va nodavlat ta’lim muassasalari bilan hamkorlik qilish
              </p>
              <button className="education-item-button">
                batafsil <img src={ArrowRightHome} />
              </button>
            </div>
          </li>
          <li className="education-item">
            <div className="education-item-content">
              <h4 className="education-item-title">
                IT ta’lim va online kontent ko’paytirish
              </h4>
              <img src={Edu41} className="education-item-image" />
              <p className="education-item-description">
                Davlat va nodavlat ta’lim muassasalari bilan hamkorlik qilish
              </p>
              <button className="education-item-button">
                batafsil <img src={ArrowRightHome} />
              </button>
            </div>
          </li>
        </ul>
      </div>
      <hr className="separator" />
      <div className="opportunities-section">
        <div className="opportunities-header">
          <div className="opportunities-icon"></div>
          <p className="opportunities-title">Imkoniyatlar</p>
        </div>
        <div className="opportunities-top">
          <h3 className="opportunities-subtitle">
            ta’lim berilgan imkoniyatlar
          </h3>
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
      </div>
      <hr className="separator" />
      <div className="completed-projects-section">
        <div className="completed-projects-top">
          <div className="completed-projects-header">
            <div className="completed-projects-icon"></div>
            <p className="completed-projects-title">Imkoniyatlar</p>
          </div>
          <h3 className="completed-projects-subtitle">Bajarilgan ishlar</h3>
        </div>
        <ul className="completed-projects-list">
          <li className="completed-projects-item">
            <div className="comproitem">
            <img src={VideoSvg} className="completed-projects-item-image" />
            <div className="completed-projects-item-content">
              <p className="completed-projects-item-description">
                IT sohasida faoliyat yuritayotgan davlat va nodavlat ta'lim
                muassasalarini qo'llabquvvatlash
              </p>
              <img src={ArrowMid} className="completed-projects-item-image2" />
            </div>
            </div>
          </li>
          <li className="completed-projects-item">
            <div className="comproitem">
            <img src={VideoSvg} className="completed-projects-item-image" />
            <div className="completed-projects-item-content">
              <p className="completed-projects-item-description">
                IT sohasida faoliyat yuritayotgan davlat va nodavlat ta'lim
                muassasalarini qo'llabquvvatlash
              </p>
              <img src={ArrowMid} className="completed-projects-item-image2" />
            </div>
            </div>
          </li>
          <li className="completed-projects-item">
            <div className="comproitem">
            <img src={VideoSvg} className="completed-projects-item-image" />
            <div className="completed-projects-item-content">
              <p className="completed-projects-item-description">
                IT sohasida faoliyat yuritayotgan davlat va nodavlat ta'lim
                muassasalarini qo'llabquvvatlash
              </p>
              <img src={ArrowMid} className="completed-projects-item-image2" />
            </div>
            </div>
          </li>
          <li className="completed-projects-item">
            <div className="comproitem">
            <img src={VideoSvg} className="completed-projects-item-image" />
            <div className="completed-projects-item-content">
              <p className="completed-projects-item-description">
                IT sohasida faoliyat yuritayotgan davlat va nodavlat ta'lim
                muassasalarini qo'llabquvvatlash
              </p>
              <img src={ArrowMid} className="completed-projects-item-image2" />
            </div>
            </div>
          </li>
        </ul>
      </div>
      <hr className="separator" />
    </div>
  );
};

export default InnerAbout;
