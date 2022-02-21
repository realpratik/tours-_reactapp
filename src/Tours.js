import React from 'react';
import Tour from './Tour';


const Tours = ({props,removeTour}) => {

  return (
    <section>
      <div className="title">
        <h2> Australian Tours</h2>
        <div className="underline"> </div>
        <div>
          {props.map((tour)=> {
            return <Tour key = {tour.id} {...tour} removeTour={removeTour}> </Tour>;  
          })}
        </div>
      </div>
    </section>
  );
};

export default Tours;
