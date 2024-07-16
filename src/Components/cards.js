import React from 'react';
import '../Styles/cards.css';



function Cards({ objective }) {
  return (
    <>
    <div className='Cards'>
          <p className='task'>{objective}</p>
    </div>
    </>
  );
}

export default Cards;