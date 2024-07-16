import React from 'react';
import '../Styles/departmentCards.css';

function DepartmentCards({ name,desc,icon }) {
  return (
    <>
    <div className='departmentCards'>
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