import React from 'react';
import Corousel from './Corousel';

function Gallery({ results, itemsPerRow }) {
  // Calculate the number of rows
  const numRows = Math.ceil(results.length / itemsPerRow);

  // Create an array of rows
  const rows = Array.from({ length: numRows }, (_, rowIndex) =>
    results.slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow)
  );

  return (
    <div>
      {rows.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((result, index) => (
            <div className={`col-md-${12 / itemsPerRow}`} key={index}>
              <Corousel description={result.id} image={result.urls.small} />
            </div>
          ))}
        </div>
      ))}
      
    </div>
  );
}

export default Gallery;
