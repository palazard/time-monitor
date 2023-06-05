import React, { useEffect, useState } from 'react'

function Clock({counting}) {

  const [timer, setTimer] = useState(0);
  const [clockTime, setClockTime] = useState("00:00:00");

  useEffect(() => {
      if (counting===true){
        // console.log("true");
        setTimeout(() => {
          setClockTime(convertToHumanFormat(timer + 1000));
          setTimer(timer => timer + 1000);
        }, 1000);
      } else  {
        // console.log("false");
        setClockTime("00:00:00");
        setTimer(0);
      }      
  }, [counting, timer]);

  function convertToHumanFormat(millisec) {
      let seconds = (millisec / 1000).toFixed(0);
      let minutes = Math.floor(seconds / 60);
      let hours = "";
      if (minutes > 59) {
          hours = Math.floor(minutes / 60);
          hours = (hours >= 10) ? hours : "0" + hours;
          minutes = minutes - (hours * 60);
          minutes = (minutes >= 10) ? minutes : "0" + minutes;
      }
      seconds = Math.floor(seconds % 60);
      seconds = (seconds >= 10) ? seconds : "0" + seconds;
      if (hours !== "") {
          return hours + ":" + twoDigits(minutes) + ":" + twoDigits(seconds);
      }
      return "00:" + twoDigits(minutes) + ":" + twoDigits(seconds);
  }

  const twoDigits = (num) => String(num).padStart(2, '0');

  return (
    <div>{clockTime}</div>
  )
}

export default Clock;