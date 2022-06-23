import React from 'react'
import { imagenes } from '../../imgs';
import { respuestas } from '../../imgs';
import Modulo from './modulo';
import { useCallback, useState } from 'react'

function PruebaCaritas() {
  const [toNotRender, setToNotRender] = useState(0)
  /*  {items.map((item,index)=>{
     return <li key={index}>{item}</li>
 })} */

  /* const renderModulos =()=>{
 
  imagenes.map((imagen, index)=>{
    console.log(index);
    console.log(respuestas);
    return (<Modulo key={index} imagen={imagen} respuestaCorrecta={respuestas[index]}/>);
  }) 
  
  };*/
const poblarModulos = imagenes.map((imagen, index) => (
  <Modulo key={index} imagen={imagen} respuestaCorrecta={respuestas[index]} />
))
  
  const modulos = useCallback(() => {
    return <div>{imagenes.map((imagen, index) => {
      const resp = respuestas[index];
      // console.log('Modulo index: '+ index + ' respuesta: ' +respuestas[index]);
      return <Modulo key={imagen} imagen={imagen} respuestaCorrecta={resp} />
    })}</div>
  }, [toNotRender])

  return (
    <div>
      {poblarModulos}
    </div>
  )
}

export default PruebaCaritas;