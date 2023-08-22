import React, { useState, useEffect } from "react";
import HStyle from "../../assets/styles/Header.module.css";
import Logo from '../../assets/image/logo.svg'

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const daysOfWeek = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
  const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

  const dayOfWeek = daysOfWeek[currentTime.getDay()];
  const dayOfMonth = currentTime.getDate();
  const month = months[currentTime.getMonth()];
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();

  return (
    <header className={HStyle.header}>
      <div className={HStyle.logo}>
        <img src={Logo} alt="" />
      </div>
      <div className={HStyle.data}>
        <p>{dayOfWeek}</p>
        <p>{dayOfMonth}{month}</p>
      </div>
      <div className={HStyle.right}>
      <p>{hours}:{minutes < 10 ? "0" : ""}{minutes}</p>
      </div>
    </header>
  );
};

export default Header;
