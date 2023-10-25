import React, { useEffect, useState } from 'react';
import Gallery from './Gallery';

function FetchData(props) {
  const [records, setRecords] = useState(null);
  const [count,setCount]=useState(0);     //count is used to change the page of the json file
  useEffect(() => {
    fetch(`https://api.unsplash.com/search/photos?page=${count}&query=${ props.s.length!=0?(props.s):"random"}&client_id=c8WdLXz9kKBdSNgnSupRrOa5IvzdSicSnzYl9-ilLE4`)
      .then(response => response.json())
      .then(data => {
        setRecords(data.results);
      })
      .catch(err => console.log("error"));
  }, [props.s,count]);

  return (
    <div>
      {/* Display the search value */}
      {/* <h1>{props.s}</h1> */}
      
      {records ? (                     //if records are not loaded then this will show loading
        <Gallery results={records} itemsPerRow={4} />
      ) : (
        <p>Loading...</p>
      )}
      <div className="container d-flex justify-content-between">
        <button type="button"  className="btn btn-dark"  onClick={()=>setCount(count-1)}> &larr; Previous</button>   
        <button type="button"  className="btn btn-dark" onClick={()=>setCount(count+1)}>&rarr; Next</button>
        </div>
        
    </div>
  );
}

export default FetchData;




// 1.display :flex
// 2.css taken from other vedio
// 3.chatgpt not able
// 4.take code consist of a css,html,js-lo
// 5.importing bootstrap file directly
// 6.