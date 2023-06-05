import React, { useEffect } from 'react';

function ProgressWindows({time}) {

  useEffect(() => {
    
  }, [{time}])

  return (
    <div className="">
      <div className="d-flex flex-column p-2">
        <p>Working on:</p>
        <p>Formation Code</p>
      </div>
      <div className="d-flex flex-column p-2">
        <p>Time :</p>
        <p>{time}</p>
      </div>
    </div>
  );
}

export default ProgressWindows;