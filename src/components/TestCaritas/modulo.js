import React from 'react'
import { useState, useCallback,useMemo } from 'react';

function Modulo(props) {
    console.log('From Modulo, respuesta correcta: ' + props.respuestaCorrecta);
  
    const respCorrecta = useMemo(() => props.respuestaCorrecta, []);
    const imagen =   useMemo(() => props.imagen, []);
  
    //const [right,setRight] = useState(0);
  


    const evaluacionHandler = useCallback((event) => {
        event.preventDefault();
     // console.log('From area id: ' + event.target.id + ', respuesta correcta ' + props.respuestaCorrecta);
      if (event.target.id === respCorrecta.toString()) {
        console.log('From area id: ' + event.target.id + ', respuesta correcta ' + props.respuestaCorrecta);
        console.log("Respuesta CORRECTA");
        /* setRight(1);   */
      }
      else {
        console.log("Respuesta Erronea");
      }
        }, []);
  
    return (
      
      <div key={props.imagen}>
      <img  src={props.imagen} alt="Workplace" useMap="#workmap" width="250px" height="80px"/>
      <map name="workmap">
          <area key='1' className='ar' id='1' shape="rect" coords="0,0,82,80" alt="Computer"  onClick={evaluacionHandler}/>
          <area key='2' className='ar' id='2' shape="rect" coords="84,0,166,80" alt="Phone" onClick={evaluacionHandler} />
          <area key='3' className='ar' id='3' shape="rect" coords="169,0,250,80" alt="Coffee" onClick={evaluacionHandler} />
      </map>
  </div>
    )
  }
  
  export default Modulo;