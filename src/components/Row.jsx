// import React from 'react';
// import Card from './Card';



// const imgurl="https://image.tmdb.org/t/p/original"
// const Row = ({ title, arr = [] }) => {
//   return (
//     <div className='row'>
//       <h2 className='heading'>{title}</h2>
//       <div className='aboveCard'>
//         {arr.map((item, index) => (
//           <Card key={index} img={`${imgurl}/${item.poster_path}`} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Row;



import React from 'react';
import Card from './Card';

const imgurl="https://image.tmdb.org/t/p/original"
const Row = ({ title, arr = [] }) => {
  return (
    <div className='row'>
      <h2 className='heading'>{title}</h2>
      <div className='aboveCard'>
        {Array.isArray(arr) && arr.map((item, index) => (
          <Card key={index} img={`${imgurl}/${item.poster_path}`} />
        ))}
      </div>
    </div>
  );
}

export default Row;
