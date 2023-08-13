import React from 'react'
import img from './img.png'
import './Ar.css'
const Ar = () => {
  return (
    <>
  <div id='card'>
<model-viewer src="https://cdn.glitch.me/4df8c17a-e0a0-47af-861e-8d1214f7b423/xyj.glb?v=1691893957077"
                ios-src="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b/Astronaut.usdz?v=1569545377878"
               // poster={img}
                alt="model"
                shadow-intensity="0.4"
                camera-controls
                rotate="180"
                auto-rotate ar>
    </model-viewer>
  
  </div>
</>
  )
}

export default Ar