import React from 'react';
import '../Styles/departmentCards.css';
import { useNavigate } from 'react-router-dom';

function DepartmentCards({ name,desc,icon,path}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path);
  };
  
  return (
    <>
    <div className='departmentCards' onClick={handleClick}>
        <img className='logo_grid' src={icon}></img>
        <h2 className='logo_title'>{name}</h2>
        <p className='logo_desc'>
           {desc}
        </p>
    </div>
    </>
  );
}

export default DepartmentCards;