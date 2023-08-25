import React,{useState} from 'react'
import Search from "../../assets/image/search.png"
import Logo1 from "../../assets/image/Events/Microscope.png"
import Logo2 from "../../assets/image/Events/Rocket.png"
import Logo3 from "../../assets/image/Events/In lotus position.png"
import Logo4 from "../../assets/image/Events/Wheelchair symbol.png"
import Logo5 from "../../assets/image/Events/Laptop.png"

const Events_bottom = ({EvsS}) => {
  const [answers,setAnswers] =  useState(false)
  const handleInputChange = (e) => {
    e ? setAnswers(true) : setAnswers(false);
  };  
  const Cars = [
    {
      id: 1,
      logo: Logo1,
      title: "Наука",
      text: "Проекты экспериментальных и теоретических исследований, направленных на получение фундаментальных научных знаний."
    },
    {
      id: 2,
      logo: Logo2,
      title: "Startup",
      text: "Проекты производства продукции, проведения работ и оказания услуг в любой сфере деятельности, направленные на получение прибыли."
    },
    {
      id: 3,
      title: "title",
      logo: Logo3,
    },
    {
      id: 4,
      title: "title",
      logo: Logo4,
    },
    {
      id: 5,
      title: "title",
      logo: Logo5,
    }
  ];
  return (
    <div name='Events_bottom' className={EvsS.Events_bottom}>
      <h2>Акселератор РТУ МИРЭА</h2>
      <div className={EvsS.search}>
      <input type="text" onChange={(e) => handleInputChange(e.target.value)} />
        <img className={EvsS.searchImg} src={Search} alt="" />
      </div>
      {
        answers?<div className={EvsS.answers}>
        <p>Как развить свой проект с РТУ МИРЭА?</p>
      </div>:null
      }
      <div className={EvsS.Cars}>
        {Cars.map((car) => (
          <div
          key={car.id}
          className={`${EvsS.Car} ${car.text?`  ${EvsS.textTrue}`:null}`}
        >
          <div className={car.text?`${EvsS.textTrue}`:null}>
          { car.logo?<img src={car.logo} alt="" />:null}
          { car.title?<h3>{car.title}</h3>:null}
          </div>
        { car.text?<p>{car.text}</p>:null}
        </div>
        ))}
      </div>
  </div>
  )
}

export default Events_bottom