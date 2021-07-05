import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getCalculatorResult,
  selectResult,
} from './calculatorSlice';
import styles from './Calculator.module.css';
const operators=["+","-","*","/"];
export function Calculator() {
  const count = useSelector(selectResult);
  const dispatch = useDispatch();
  const [selectedOp, setSelectedOp] = useState("+");
  const [num1,setNum1] = useState(0);
  const [num2,setNum2] = useState(0);
  return (
    <div>
      <div className={styles.title}> Simple Calculator using React, Redux</div>
      <span className={styles.value}>Result: {count}</span>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          type="number"
          aria-label="Number 1"
          value={num1}
          onChange={(e)=>setNum1(e.target.value)}
        />
        <span className={styles.value}> {selectedOp}</span>
        <input
          className={styles.textbox}
          type="number"
          aria-label="Number 2"
          value={num2}
          onChange={(e)=>setNum2(e.target.value)}
        />
      </div>
      <div className={styles.row}>
            {operators.map(op=>
              <button value={op} className={styles.button}  key={op} onClick={(e)=>
                setSelectedOp(e.target.value)}>{op}</button>)}
        
        <button
         className={styles.button}
          onClick={() => dispatch(getCalculatorResult({num1,num2,selectedOp}))}
        >
         =
        </button>
        </div>
        <div className={styles.info}>
                Click on = to see result
        </div>
    </div>
  );
}
