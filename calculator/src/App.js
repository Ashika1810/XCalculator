import logo from './logo.svg';
import './App.css';
import styles from './App.module.css';
import {useState} from 'react';

function App() {
  const [data, setData]= useState("");
  const [evaluatedVal, setEvaluatedVal] = useState("");

  const handleClick = (value)=>{
      setData(data+value)
  }

  const handleClear = ()=>{
    setData("");
    setEvaluatedVal("");
  }

  const handleFinalVal = ()=>{
    if(data===""){
      setEvaluatedVal("Error");
    }
    else{
      setEvaluatedVal(eval(data));
    }
  }

  return (
    <div className={styles.container}>
      <h1>React Calculator</h1>
      <input className={styles.input} value={data}/>
      <p>{evaluatedVal}</p>
      <div className={styles.buttonscontainer}>
        <button onClick={()=> handleClick('7')}>7</button>
        <button onClick={()=> handleClick('8')}>8</button>
        <button onClick={()=> handleClick('9')}>9</button>
        <button onClick={()=> handleClick('+')}>+</button>
        <button onClick={()=> handleClick('4')}>4</button>
        <button onClick={()=> handleClick('5')}>5</button>
        <button onClick={()=> handleClick('6')}>6</button>
        <button onClick={()=> handleClick('-')}>-</button>
        <button onClick={()=> handleClick('1')}>1</button>
        <button onClick={()=> handleClick('2')}>2</button>
        <button onClick={()=> handleClick('3')}>3</button>
        <button onClick={()=> handleClick('*')}>*</button>
        <button onClick={handleClear}>C</button>
        <button onClick={()=> handleClick('0')}>0</button>
        <button onClick={handleFinalVal}>=</button>
        <button onClick={()=> handleClick('/')}>/</button>
      </div>
    </div>
  );
}

export default App;
