import { keyframes, styled } from "styled-components"
import logo from './assets/react.svg'
import foto from './assets/hiper.jpg'
import { useEffect, useRef, useState } from "react"

const Anima = keyframes`
0%{background-size:100%;}
90%{background-size:800%;}
100%{background-size:100%;}
`
const Marco = styled.div`
width:400px;
overflow:hidden;
height:400px;
display:grid;
background-position:center;
animation: ${Anima} 300s linear infinite;
grid-template-columns:1fr 1fr 1fr;
grid-template-rows:1fr 1fr 1fr;
box-sizing:border-box;
border-radius:${props=>props.borde-10}% ${props=>props.borde-15}% ${props=>props.borde-3}% ${props=>props.borde-7}%;
border-style:solid;
transition:2s;
border-width:5px;
border-color:#A8EB12;
border-top-color:#2F4858;
border-right-color:#2F4858;
`
const Casilla = styled.div`
border-style:solid;
border-color:white;
font-size:3em;
border-width:5px;
border-top-style:${props=>
props.lado===(3) || 
props.lado===(4) || 
props.lado===(5) || 
props.lado===(6) || 
props.lado===(7) || 
props.lado===(8)  
? 'solid' : 'none'};
border-right-style:${props=>
props.lado===(0) || 
props.lado===(3) || 
props.lado===(6) || 
props.lado===(1) || 
props.lado===(4) || 
props.lado===(7)  
? 'solid' : 'none'};
border-left-style:${props=>
props.lado===(1) || 
props.lado===(4) || 
props.lado===(7) || 
props.lado===(2) || 
props.lado===(5) || 
props.lado===(8)
? 'solid' : 'none'};
border-bottom-style:${props=>
props.lado===(0) || 
props.lado===(1) || 
props.lado===(2) || 
props.lado===(3) || 
props.lado===(4) || 
props.lado===(5)
? 'solid' : 'none'};
`
const Eleccion = styled.section`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
`
const Elijo = ({index,resultado,cam}) => {
  function cambio(){
resultado(index)
  }
  return (
    <Eleccion onClick={cambio} >{cam}  </Eleccion>
  )
}

const turnos = { cohete:'🚀',
luna : '🌕'}
function App() {
  const [tablero,setTablero] = useState(new Array(9).fill(null));
const [dato, setDato]= useState(turnos.cohete)
const punto = useRef()
const [tren,setTren] = useState(null)
const llamar = (index) => {
  
  let tabla = [...tablero]
  tabla[index] = dato
  setTablero(tabla)
  let nuevoTurno  = dato === turnos.cohete ? turnos.luna : turnos.cohete;
  setDato(nuevoTurno) 
  if(
  (((tabla[0] === tabla[1]) && (tabla[0] === tabla[2]))&&(tabla[0]!=null)) ||
  (((tabla[3] === tabla[4]) && (tabla[3] === tabla[5]))&&(tabla[3]!=null)) ||
  (((tabla[6] === tabla[7]) && (tabla[6] === tabla[8]))&&(tabla[6]!=null)) ||
  (((tabla[0] === tabla[3]) && (tabla[0] === tabla[6]))&&(tabla[0]!=null)) ||
  (((tabla[1] === tabla[4]) && (tabla[1] === tabla[7]))&&(tabla[1]!=null)) ||
  (((tabla[2] === tabla[5]) && (tabla[2] === tabla[8]))&&(tabla[2]!=null)) ||
  (((tabla[0] === tabla[4]) && (tabla[0] === tabla[8]))&&(tabla[0]!=null)) ||
  (((tabla[2] === tabla[4]) && (tabla[2] === tabla[6]))&&(tabla[2]!=null))
  ){
    setTablero(tabla);
    console.log(tablero)
  }
}
setInterval(() => {
  let azar = Math.floor(Math.random()*50);
  setTren(azar)
  
}, 5000);
return (
    <>
    <Marco ver={foto} borde={tren} >
{tablero.map((ele,ind)=>{
  return(
    <Casilla lado={ind} key={ind} >
   <Elijo 
   resultado = {llamar}
   cam={tablero[ind]}
   index={ind}
   />
    </Casilla>
  )
})}
</Marco>
<Turnos>Es turno de {dato} </Turnos>
    </>
  )
}
const Turnos = styled.div`
display:flex;
justify-content:center;
font-size:50px;
color:white;
font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`

export default App
