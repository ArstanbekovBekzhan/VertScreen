import React from 'react';
import EvsS from "../assets/styles/stylesPage/Events.module.css";
import EvetSvg from "../assets/image/Evet.svg";
import { Link } from 'react-scroll';
import Events_bottom from '../component/EventsC/Events_bottom';

const Events = () => {
  return (
    <div className={EvsS.Events}>
      <div className={EvsS.Events_top}>
        <h1>Сервисы РТУ МИРЭА — это просто и удобно</h1>
        <Link to="Events_bottom" smooth={true} duration={2500} offset={-150}>
          Листай и открой больше
          <img src={EvetSvg} alt="EvetSvg" />
        </Link>
      </div>
      <Events_bottom EvsS={EvsS}/>
    </div>
  );
}

export default Events;