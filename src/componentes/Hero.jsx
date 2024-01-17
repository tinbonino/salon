import React from 'react'
import hero from "../assets/img/hero.jpeg"
function Hero() {
  return (
    <div id='hero'>
      <p>
      Transforma tu fiesta en una aventura espectacular en nuestro salón de eventos infantiles. ¡Donde la diversión nunca termina!
      </p>
      <img src={hero} alt="" />

    </div>
  )
}

export default Hero