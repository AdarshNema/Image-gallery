import React from 'react';
import './im.css'
function Carousel({image},{description}) { // jokes it is the array
function info(){
       console.log(description);
}
  return (
      
      // {/* here results are bringing the urls of a particular topic as mentioned in the API key */}
      // <div className="card" style={{width:'18rem'}}>
      // <img src={image} className="card-img-top" alt="..."></img>
      // <div className="card-body">
      //   <h5 className="card-title">C</h5>
      //   <p className="card-text">{description}</p>
      //   <a href="/" className="btn btn-primary"></a>
      // </div>
      <div>
      <button onClick={info}><img src={image} class="img-fluid" className='im' alt="..." ></img></button>
      {/* <img src={image} class="img-fluid" className='im' alt="..." ></img> */}
      
      </div>
      // </div>
      
      
      
  ) 
}
    
    
 


export default Carousel;
