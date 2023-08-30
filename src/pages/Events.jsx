import React from 'react';
import EvsS from "../assets/styles/stylesPage/Events.module.css";
import EvetSvg from "../assets/image/Evet.svg";
import { Link } from 'react-scroll';
import Events_Cars from '../component/EventsC/Events_Cars';
import Events_Scanners from '../component/EventsC/Events_Scanners';
import Img1 from "../assets/image/Events/Image1.png"
import Img2 from "../assets/image/Events/Image2.png"
import Img3 from "../assets/image/Events/Image3.png"
import Img4 from "../assets/image/Events/Image4.png"
import Img5 from "../assets/image/Events/Image5.png"

const Events = () => {
  return (
    <div className={EvsS.Events}>
      <div className={EvsS.Events_top}>
        <h1>Сервисы РТУ МИРЭА — это просто и удобно</h1>
        <Link to="Events_bottom" smooth={true} duration={1500} offset={-50}>
          Листай и открой больше
          <img src={EvetSvg} alt="EvetSvg" />
        </Link>
      </div>  
      <Events_Cars EvsS={EvsS}/>
      <Events_Scanners EvsS={EvsS}/>
      <div className={EvsS.Events_end}>
        <img src={Img1} alt="" />
        <img src={Img2} alt="" />
        <img src={Img3} alt="" />
        <img src={Img4} alt="" />
        <img src={Img5} alt="" />
      </div>  
    </div>
  );
}

export default Events;