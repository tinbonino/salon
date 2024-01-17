import React from 'react'
import { GiSoccerField,GiKidSlide,GiMicrophone,  } from "react-icons/gi";
import { FaPersonBooth } from "react-icons/fa6";
function Lugar() {
  return (
    <div id='servicios'>
      <div className="card">
        <GiSoccerField size="3rem"/>
        <h3>Cancha de futbol</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, dolorem eaque? </p>
      </div>
      <div className="card">
        <GiKidSlide size="3rem"/>
        <h3>Plaza blanda</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, dolorem eaque? </p>
      </div>
      <div className="card">
        <GiMicrophone size="3rem" />
        <h3>Escenario</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, dolorem eaque? </p>
      </div>
      <div className="card">
        <FaPersonBooth  size="3rem" />
        <h3>Cabina de fotos</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, dolorem eaque? </p>
      </div>
    </div>
  )
}

export default Lugar