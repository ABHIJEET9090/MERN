import React from 'react';

function Card({ image,Id,title }) {
  return (
    <div>
      
      <h2>{Id}</h2>
      <h3>{title}</h3>
      <img style={{width:"200px",height:"200px",}} src={image}
            alt="error" />
    </div>
  );
}

export default Card;