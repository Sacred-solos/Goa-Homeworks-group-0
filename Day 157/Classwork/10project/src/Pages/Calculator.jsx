import React,{useState} from 'react';

const Calculator =() =>{
    const[input,setInput] = useState('');
    const[result,setResult] = useState('');

    const handleClick =(value) =>{
        setInput((prev) => prev+value)
    };

    const calculateResult =() =>{
        try{
            setResult(eval(input));
            setInput('');
        } catch{
            setResult('Error');
        }
    };

    const clearInput =() =>{
        setInput('');
        setResult('');
    };

    return(
        <div>
            <h1>Calculator</h1>
            <div>
                <input type="text" value={input} readOnly/>
                <div>{result}</div>
            </div>
            <div>
                {[...Array(10).keys()].map(num =>(
                    <button key={num} onClick={() => handleClick(num.toString())}>{num}</button>
                ))}
                <button onClick={()=> handleClick('+')}>+</button>
                <button onClick={()=> handleClick('-')}>-</button>
                <button onClick={()=> handleClick('*')}>*</button>
                <button onClick={()=> handleClick('/')}>/</button>
                <button onClick={calculateResult}>=</button>
                <button onClick={clearInput}>X</button>
            </div>
        </div>
    );
};


export default Calculator;