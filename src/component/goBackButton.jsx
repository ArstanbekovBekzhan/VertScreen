import React from 'react';
import { useNavigate } from 'react-router-dom';
import gostyle from "../assets/styles/button.module.css"

const GoBackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <button className={gostyle.Button} onClick={handleGoBack}></button>
  );
};

export default GoBackButton;
