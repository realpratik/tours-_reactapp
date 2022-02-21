// eslint-disable-line no-use-before-define


import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'


const url = 'https://course-api.com/react-tours-project';

function App() {

  const [loading, setLoading] = useState(true);
  const [tours,setTours] = useState([]);

//Remove not interested tours from array and pass new array
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id );
    setTours(newTours);

  }

  const fetchTours = async() => {
    setLoading(true);
    try {
      const response  = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);

    } catch (error){
      setLoading(false);
      console.log(error);

    }
  }


  useEffect( () => {
    fetchTours();
  }, []);


  
  if(loading){
    return(
      <main>
        <h1> <Loading /> </h1>

      </main>
    );
  }

  if(tours.length == 0){
    return (
      <main>
        <div className = "title">
          <h2>no tours left</h2>
          <button className = "btn" onClick = {fetchTours}>Refresh</button>
        </div>
      </main>
    )
  }

  return (
    <main>
      <Tours props= {tours} removeTour = {removeTour} />
    </main>
  );

 
}

export default App;
