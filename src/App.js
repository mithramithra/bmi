
import './App.css';
import React,{useState} from 'react';




function App() {

const [weight,setweight] = useState(0);
const [height,setHeight] = useState(0);
const [bmi,setbmi] = useState('');
const [message,setMessage] = useState('');

const calcBmi = (e) => {
  e.preventDefault()
  if(weight===0 ||height===0)
  {
    alert('please enter a valid weight and height')
  }
  else{
    let bmi = (weight/(height/100 )** 2)
    setbmi(bmi.toFixed(1))

    if(bmi<18.5) {
      setMessage("underweight")
    }
    else if(bmi>=18.5 && bmi<24.9){
      setMessage('Healthy')
    }
       
    else{
      setMessage('overweight')
    } 
  }
}

const reload =() => {
  window.location.reload()
}

  return (
    <div className="App">
     <div className="container"> 
     <center><h2>BMI CALCULATOR</h2></center>
     <form onSubmit={calcBmi}> 
     

      <div>
      <center><label><b>WEIGHT</b></label>
        <input
        type="text"
        placeholder='enter value'
        value={weight}
        onChange={(e) => setweight(e.target.value)}
        /></center>
      </div>
      <div>
        <center><label><b>HEIGHT</b></label>
        <input
        type="text"
        placeholder='enter value'
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        /></center>
      </div>

      <div>
        <center><button className='btn' type="submit" >
          SUBMIT
        </button></center>
        <center><button className='btn btn-outline' onClick={reload}  >
          RELOAD
        </button></center>
      </div>

      <div className="center">
      <center><h3>Your BMI IS:{bmi}</h3>
        <p>{message}</p></center>    
        </div>
     </form>
     </div>
     </div>
  );
}

export default App;
