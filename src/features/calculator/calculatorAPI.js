import axios from 'axios';

export function fetchResult(num1,num2,selectedOp) {
  return getCalculatorResultAPI(Number(num1),Number(num2),selectedOp).then((result)=>{
    return result;
  });
}
const mockGetCalculatorResultAPI= async (num1,num2,selectedOp)=>{
  switch(selectedOp){
    case '+':
      return num1+num2;
    case '-':
      return num1-num2;
    case '*':
        return num1*num2;
    case '/':
        return num1/num2;
    default:
      return null;  
  }
  }
const getCalculatorResultAPI= async (num1,num2,selectedOp)=>{
  return axios.get(`http://localhost:3030/results`, {
    params: {num1,num2,selectedOp}
  }).then(res=>{ 
        return res.data.result;
  })
  }