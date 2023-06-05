import React, { useEffect } from 'react';
import { useState } from 'react';

function ProjectButton({countTime, name, activeProject}) {

  const [isDisabled, setIsDisabled] = useState(false);

  // console.log("disabled", activeProject, activeProject===name, name)

  useEffect(()=>{
      if (activeProject==='' || activeProject===name){
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }
  }, [activeProject]); 
  

  return (
    <div className="">
        <button disabled={isDisabled} onClick={countTime} type="button" className="btn btn-primary m-2" value={name}>{name}</button>
    </div>
  );
}

export default ProjectButton;