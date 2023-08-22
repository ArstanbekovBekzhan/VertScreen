import React, { useRef } from "react";
import HoPage from "../assets/styles/stylesPage/Home.module.css"; 
import { NavLink } from "react-router-dom";
import Logo1 from "../assets/image/links-1.svg";
import Logo2 from "../assets/image/links-2.svg";
import Logo3 from "../assets/image/links-3.svg";
import Logo4 from "../assets/image/links-4.svg";


const Homepage = () => {
  const fileInputRef = useRef(null);

  const openFilePicker = () => {
    fileInputRef.current.click(); 
  };

  const Links = [
    {
      id: 1,
      logo: Logo1,
      link: "/Events",
      text: "Мероприятия"
    },
    {
      id: 2,
      logo: Logo2,
      link: "/Merch",
      text: "Мерч РТУ МИРЭА"
    },
    {
      id: 3,
      logo: Logo3,
      link: "/Services",
      text: "Сервисы РТУ МИРЭА"
    },
    {
      id: 4,
      logo: Logo4,
      link: "/Idea",
      text: "Есть идея?"
    }
  ];

  return (
    <div className={HoPage.Homepage}>
      <div className={HoPage.Content_area}>
        <p onClick={openFilePicker}>Область для контента</p>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }} 
        />
      </div>
      <div className={HoPage.Links}>
        {Links.map((link) => (
          <NavLink key={link.id} to={link.link} className={HoPage.Link}>
            <img src={link.logo} alt={`Logo ${link.id}`} />
            <h3>{link.text}</h3>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Homepage;