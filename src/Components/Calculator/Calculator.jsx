/* eslint-disable no-unused-vars */
import { useState } from "react"
import Button from "../Button/Button"
import Display from "../Display/Display"
import "./Calculator.css"
const Calculator = () =>{

    const [displayValue, setDisplayValue] = useState("");
    const [result, setResult] = useState();
    const [current, setCurrent] = useState([]);
    const [op, setOp] = useState("");

    function clearMemory(){
        setDisplayValue("");
        setResult(0);
        setCurrent([]);
        console.clear();
    }

    function calculation(){

        let r = 0;
       
        switch (op){
            case "+":
                setResult(parseInt(current[0]) + parseInt(current[1]))
                break;
            case "-":
                setResult(parseInt(current[0]) - parseInt(current[1]))
                break;
            case "/":
                setResult(parseInt(current[0]) / parseInt(current[1]))
                break;
            case "*":
                setResult(parseInt(current[0]) * parseInt(current[1]))
                break;
            default:
                break;
        }
    }

    function addDigit(n){
        if(n === '.' && displayValue.includes('.')){
            return
        }

        if(displayValue === '0'){
            setDisplayValue("");
            return
        }

        setDisplayValue(displayValue + n)
    }


    function setOperation(operation){

        setOp(operation);
        
        if(current[0] === undefined){
            current[0] =  displayValue;
            setDisplayValue("");
        }else{
            current[1] = displayValue;
            calculation();
            current[0] = result;
            current[1] = undefined;
        }

        if(operation === "="){
            setDisplayValue(result)
        }        
    }

    
    return(
        <div className="calculator">
            <Display display={displayValue} />
            <Button label="AC" triple={true} operation={true} click={clearMemory} />
            <Button label="/" operation={true} click={setOperation}/>
            <Button label="7" click={addDigit} />
            <Button label="8" click={addDigit} />
            <Button label="9" click={addDigit} />
            <Button label="*" operation={true} click={setOperation}/>
            <Button label="4" click={addDigit} />
            <Button label="5" click={addDigit} />
            <Button label="6" click={addDigit} />
            <Button label="-" operation={true} click={setOperation}/>
            <Button label="1" click={addDigit} />
            <Button label="2" click={addDigit} />
            <Button label="3" click={addDigit} />
            <Button label="+" operation={true} click={setOperation}/>
            <Button label="0" duple={true} click={addDigit} />
            <Button label="." click={addDigit} />
            <Button label="=" operation={true} click={setOperation}/>
        </div>
    )
}
export default Calculator