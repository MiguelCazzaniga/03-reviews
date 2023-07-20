import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import { BiSolidQuoteRight } from "react-icons/bi"
import data from "./data"

const App = () => {
  const[indice,setIndice]=useState(0)
  const todos=data.length-1
  
  const cual=data[indice]
  
  const left=()=>{
    let cualIndice=indice      
    if (cualIndice>0){cualIndice=cualIndice-1}
    else{cualIndice=todos}     
    setIndice(cualIndice)
    }
     
  const right=()=>{
    let cualIndice=indice    
    if (cualIndice<todos){cualIndice=cualIndice+1}
    else{cualIndice=0}      
    setIndice(cualIndice)
    }

  const sorpresa=()=>{
    let randomNumber = Math.floor(Math.random() * data.length)        
     setIndice(randomNumber)
  }

  return (
    <main>
      <article>
        <div className='datos'>
          <div className='img-container'>
            <img src={cual.image} alt={cual.name} className='img-size'></img>
            <span>
              {" "}
              <BiSolidQuoteRight></BiSolidQuoteRight>
            </span>
          </div>
          <h4>{cual.name}</h4>
          <p className='job'>{cual.job}</p>
          <p className='text'>{cual.text}</p>

          <div className='cambiar'>
            <button onClick={left}>
              <BsChevronLeft></BsChevronLeft>
            </button>
            <button onClick={right}>
              <BsChevronRight></BsChevronRight>
            </button>
          </div>
          <div className='random'>
            <button className="btn" onClick={sorpresa}>Surprise me</button>
          </div>
        </div>
      </article>
    </main>
  )
 

    
 
};
export default App;
