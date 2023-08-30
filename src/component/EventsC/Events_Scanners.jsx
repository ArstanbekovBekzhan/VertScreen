import React from 'react'
import Left from "../../assets/image/Events/left.png"
import Right from "../../assets/image/Events/right.png"
import Scanner from "../../assets/image/Events/Scanner.png"
import EvetSvg from "../../assets/image/Evet.svg";
import { Link } from 'react-scroll';
import Scanner1 from "../../assets/image/Events/MIREAscan1.png"
import Scanner2 from "../../assets/image/Events/MIREAscan2.png"
import Scanner3 from "../../assets/image/Events/MIREAscan3.png"
import Scanner4 from "../../assets/image/Events/MIREAscan4.png"
import Scanner5 from "../../assets/image/Events/MIREAscan5.png"
import Logo1 from "../../assets/image/Events/Logo1.svg"
import Logo2 from "../../assets/image/Events/Logo2.png"
import EndScann from "../../assets/image/Events/EndScann.svg"

const Events_Scanners = ({EvsS}) => {
  const Scanners = [
    {
      id: 1,
      Scanner: Scanner1,
      title: "Личный кабинет студента"
    },
    {
      id: 2,
      Scanner: Scanner2,
      title: "Облако РТУ МИРЭА"
    },
    {
      id: 3,
      title: "Система дистанционного обучения",
      Scanner: Scanner3,
    },
    {
      id: 4,
      title: "Информационно- библиотечный центр",
      Scanner: Scanner4
    },
    {
      id: 5,
      title: "Цифровая кафедра",
      Scanner: Scanner5
    }
  ];
  const Navigator = [
    {
      id: 1,
      Logo: Logo1,
      title: "Центр развития и поддержки предпринимательства РТУ МИРЭА",
      text:"Центр развития и поддержки предпринимательства РТУ МИРЭА — это возможность показать студентам вуза особенности предпринимательской деятельности, лучше познакомиться с технологическим предпринимательством, оценить собственные способности и построить путь по их развитию"
    },
    {
      id: 2,
      Logo: Logo2,
      title: "Центр развития компетенций и надпрофессиональных навыков РТУ МИРЭА",
      text: "Центр развития компетенций и надпрофессиональных навыков РТУ МИРЭА  позволяет оценить твои способности по современным методиками и сформировать индивидуальную траекторию их развития, освоить дополнительные образовательные программы и развить soft skills"
    }
  ];
  return (
    <div className={EvsS.Events_Scanners}>
      <h3>Сканируй</h3>
      <div className={EvsS.Events_Scanners_head}>
        <img src={Left} alt="" />
        <img src={Scanner} alt="" />
        <img src={Right} alt="" />
      </div>
      <Link to="Events_Scanners_MIREA" smooth={true} duration={1500} offset={-50}>
          Листай
          <img src={EvetSvg} alt="EvetSvg" />
        </Link>
        <div className={EvsS.Events_Scanners_MIREA} name="Events_Scanners_MIREA">
          <h3>Сервисы МИРЭА</h3>
          {
            Scanners.map((scanner)=>
              <div className={EvsS.Item} key={scanner.id}>
                <img src={scanner.Scanner} 
                alt="" />
                <h4>{scanner.title}</h4>
              </div>
            )
          }
        </div>
        <Link to="Events_Scanners_Navigator" smooth={true} duration={1500} offset={-50}>
          Листай
          <img src={EvetSvg} alt="EvetSvg" />
        </Link>
        <div className={EvsS.Events_Scanners_Navigator } name="Events_Scanners_Navigator">
          <h3>Навигатор твоих возможностей</h3>
          {
            Navigator.map((navi)=>
              <div className={EvsS.Item1} key={navi.id}>
                <div className={EvsS.top}>
                  <img src={navi.Logo} 
                alt="" />
                <h4>{navi.title}</h4>
                </div>
                <p>{navi.text}</p>
              </div>
            )
          }
        </div>
        <div className={EvsS.endScann}>
          <img src={EndScann} alt="" />
        </div>
    </div>
  )
}

export default Events_Scanners