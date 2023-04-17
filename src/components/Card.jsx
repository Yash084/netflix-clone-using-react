import React from 'react';

const Card = ({ img }) => {
  return (
    <div className='card'>
     <img src={img} alt="cover" />
    </div>
  );
};

export default Card;
