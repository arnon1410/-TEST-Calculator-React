import "./Calculator.css";
import { useState } from "react";
const Calculator = () => {
  const [inputValue, setInputValue] = useState("0"); //inputValueค่าที่รับ setInputValueค่าที่แสดง
  const display = (value) => {
    if (inputValue.toString().charAt(0) === "0") {
      //เช็คว่าตำแหน่งแรกเป็นศูนย์หรือเปล่า
      setInputValue(value);
    } else {
      setInputValue(inputValue + value);
    }
  };
  const reset = () => {
    //เคลียร์ค่า
    setInputValue(0);
  };
  const calculate = () => {
    let result = eval(inputValue); //ฟังก์ชันeval สามารถ ประเมินค่า นิพจน์ ผลลัพธ์ในสตริงข้อความหรือค่าตัวเลขได้
    setInputValue(result);
  };

  return (
    <div className="calculator">
      <div className="calculator-display">
        <h1>{inputValue}</h1>
      </div>
      <div className="calculator-button">
        <button className="operator" onClick={() => display("+")}>
          +
        </button>
        <button className="operator" onClick={() => display("-")}>
          -
        </button>
        <button className="operator" onClick={() => display("*")}>
          x
        </button>
        <button className="operator" onClick={() => display("/")}>
          ÷
        </button>
        <button onClick={() => display("7")}>7</button>
        <button onClick={() => display("8")}>8</button>
        <button onClick={() => display("9")}>9</button>
        <button onClick={() => display("4")}>4</button>
        <button onClick={() => display("5")}>5</button>
        <button onClick={() => display("6")}>6</button>
        <button onClick={() => display("1")}>1</button>
        <button onClick={() => display("2")}>2</button>
        <button onClick={() => display("3")}>3</button>
        <button onClick={() => display(".")}>.</button>
        <button onClick={() => display("0")}>0</button>
        <button className="clear-btn" onClick={reset}>
          C
        </button>
        <button className="equal operator" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
};
export default Calculator;
