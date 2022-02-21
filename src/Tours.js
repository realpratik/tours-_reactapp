import React from 'react';
import Tour from './Tour';


const Tours = ({props}) => {

  return (
    <section>
      <div className="title">
        <h2>Our cddTours</h2>
        <div className="underline"> </div>
        <div>
          {props.map((tour)=> {
            return <Tour key = {tour.id} {...tour} > </Tour>;  
          })}
        </div>
      </div>
    </section>
  );
};

export default Tours;
