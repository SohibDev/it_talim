import React from "react";
import "./style.css";
import HeroImg from "../../../assets/img/Business concept with team close up.png";
import Geom from "../../../assets/icon/geom.svg";
import RightArrow from "../../../assets/icon/right_arrow_home.svg";
import Team from "../../../assets/icon/team.svg";

const Together = () => {
  return (
    <div className="together-container">
      <h2 className="header-primary">IT ta’lim uyshmasi bilan bo’ling</h2>
      <img className="image-main" src={HeroImg} />
      <div className="content-container">
        <ul className="list-primary">
          <li className="list-item">
            <p className="text-number">7+</p>
            <p className="text-secondary">Salesel</p>
          </li>
          <hr className="list-primary-divider" />
          <li className="list-item">
            <p className="text-number">120 +</p>
            <p className="text-secondary">Hamkor companiyalar</p>
          </li>
          <hr className="list-primary-divider" />
          <li className="list-item">
            <p className="text-number">25 +</p>
            <p className="text-secondary">muofaqqiyatli ishlar</p>
          </li>
        </ul>

        <ul className="list-secondary">
          <li className="list-item">
            <img src={Team} className="image-secondary" />
          </li>
          <li className="list-item">
            <img src={Team} className="image-secondary" />
          </li>
        </ul>

        <div className="text-container">
          <p className="text-description">
            O‘zbekistonda qizlarni akt sohasiga yana-da kengroq jalb etish va
            ularning it-ko‘nikmalarini ko'nikmalarini rivojlantirish
          </p>
          <button className="button-primary">Kirish</button>
        </div>
        <hr className="divider" />

        <h3 className="header-secondary">Harakarlar</h3>
        <p className="text-paragraph">
          Rossiya kartalari orqali siz mobil aloqa, kommunal xizmatlardan tortib
          PUBG, AppStore va Steam-gacha bo'lgan har qanday xizmatlar uchun
          to'g'ridan-to'g'rid ilovada to'lovni amalga oshirishingiz mumkin.
          Shuningdek, kartalaringizni OSON-ga ulab UzCARD va HUMO kartalariga
          o‘tkazmalarni amalga oshirishingiz mumkin.Rossiya kartalari orqali siz
          mobil aloqa, kommunal xizmatlardan tortib
        </p>
        <p className="text-paragraph">
          UzMIR va Mira kartalari orqali siz mobil aloqa, kommunal xizmatlardan
          tortib PUBG, AppStore va Steam-gacha bo'lgan har qanday xizmatlar
          uchun to'g'ridan-to'g'rid ilovada to'lovni amalga oshirishingiz
          mumkin. Shuningdek, kartalaringizni OSON-ga ulab
        </p>

        <hr className="divider2" />

        <h3 className="header-secondary">Startuplarni qo’llash</h3>

        <ul className="list-secondary-two">
          <li className="list-item-two">
            <div className="list-item-two-ImgCon">
              <img src={Geom} className="image-secondary" />
            </div>
            <div className="text-container-two">
              <hr className="divider3" />
              <p className="text-description-two">
                IT sohasida faoliyat yuritayotgan davlat va nodavlat ta'lim
                muassasalarini qo'llab-quvvatlash
              </p>
              <button className="button-secondary-two">
                <img src={RightArrow} />
              </button>
            </div>
          </li>
          <li className="list-item-two">
            <div className="list-item-two-ImgCon">
              <img src={Geom} className="image-secondary" />
            </div>
            <div className="text-container-two">
              <hr className="divider3" />
              <p className="text-description-two">
                IT sohasida faoliyat yuritayotgan davlat va nodavlat ta'lim
                muassasalarini qo'llab-quvvatlash
              </p>
              <button className="button-secondary-two">
                <img src={RightArrow} />
              </button>
            </div>
          </li>
          <li className="list-item-two">
            <div className="list-item-two-ImgCon">
              <img src={Geom} className="image-secondary" />
            </div>
            <div className="text-container-two">
              <hr className="divider3" />
              <p className="text-description-two">
                IT sohasida faoliyat yuritayotgan davlat va nodavlat ta'lim
                muassasalarini qo'llab-quvvatlash
              </p>
              <button className="button-secondary-two">
                <img src={RightArrow} />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Together;
