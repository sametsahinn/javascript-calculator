import React, { useState, useEffect } from "https://esm.sh/react@18";
import ReactDOM from "https://esm.sh/react-dom@18";

const App = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('0');
  const [formula, setFormula] = useState('');
  const [isEqualClicked, setIsEqualClicked] = useState(false);

  const handleButtonClick = value => {
    if (value === 'AC') {
      setInput('');
      setOutput('0');
      setFormula('');
      setIsEqualClicked(false);
    } else if (value === '=') {
      try {
        const result = eval(formula.replace(/\s+/g, ''));
        setOutput(result.toFixed(4).replace(/\.?0+$/, '')); // Round to 4 decimal places
        setFormula(formula.replace(/\s+/g, '') + '= ' + result.toFixed(4).replace(/\.?0+$/, ''));
        setInput('');
        setIsEqualClicked(true);
      } catch (error) {
        setOutput('Error');
      }
    } else {
      setInput(prevInput => {
        // If equal operator was clicked and a new number is entered, start a new calculation
        if (isEqualClicked && /\d/.test(value)) {
          setOutput(value);
          setFormula(value);
          setIsEqualClicked(false);
          return value;
        }

        if (/\d/.test(value) && /\d$/.test(prevInput)) {
          setFormula(prevFormula => prevFormula + value);
          setOutput(prevOutput => prevOutput + value);
          return prevInput + value;
        } else
        if (/[+\-*/]/.test(value) && /[\d.]$/.test(prevInput.replace(/\s+/g, ''))) {
          setFormula(prevFormula => prevFormula + '' + value);
          setOutput(value);
          return value;
        } else {
          setFormula(prevFormula => prevFormula + value);
          setOutput(value);
          return value;
        }
      });
    }
  };

  return /*#__PURE__*/(
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("div", { class: "calculator" }, /*#__PURE__*/
    React.createElement("div", { class: "formulaScreen" }, formula), /*#__PURE__*/
    React.createElement("div", { class: "outputScreen", id: "display" }, " ", output, " "), /*#__PURE__*/
    React.createElement("div", null, /*#__PURE__*/
    React.createElement("button", { class: "jumbo", id: "clear", value: "AC", style: { background: 'rgb(172, 57, 57)' }, onClick: () => handleButtonClick('AC') }, "AC"), /*#__PURE__*/
    React.createElement("button", { id: "divide", value: "/", style: { background: 'rgb(102, 102, 102)' }, onClick: () => handleButtonClick('/') }, "/"), /*#__PURE__*/
    React.createElement("button", { id: "multiply", value: "x", style: { background: 'rgb(102, 102, 102)' }, onClick: () => handleButtonClick('*') }, "x"), /*#__PURE__*/
    React.createElement("button", { id: "seven", value: "7", onClick: () => handleButtonClick('7') }, "7"), /*#__PURE__*/
    React.createElement("button", { id: "eight", value: "8", onClick: () => handleButtonClick('8') }, "8"), /*#__PURE__*/
    React.createElement("button", { id: "nine", value: "9", onClick: () => handleButtonClick('9') }, "9"), /*#__PURE__*/
    React.createElement("button", { id: "subtract", value: "-", style: { background: 'rgb(102, 102, 102)' }, onClick: () => handleButtonClick('-') }, "-"), /*#__PURE__*/
    React.createElement("button", { id: "four", value: "4", onClick: () => handleButtonClick('4') }, "4"), /*#__PURE__*/
    React.createElement("button", { id: "five", value: "5", onClick: () => handleButtonClick('5') }, "5"), /*#__PURE__*/
    React.createElement("button", { id: "six", value: "6", onClick: () => handleButtonClick('6') }, "6"), /*#__PURE__*/
    React.createElement("button", { id: "add", value: "+", style: { background: 'rgb(102, 102, 102)' }, onClick: () => handleButtonClick('+') }, "+"), /*#__PURE__*/
    React.createElement("button", { id: "one", value: "1", onClick: () => handleButtonClick('1') }, "1"), /*#__PURE__*/
    React.createElement("button", { id: "two", value: "2", onClick: () => handleButtonClick('2') }, "2"), /*#__PURE__*/
    React.createElement("button", { id: "three", value: "3", onClick: () => handleButtonClick('3') }, "3"), /*#__PURE__*/
    React.createElement("button", { class: "jumbo", id: "zero", value: "0", onClick: () => handleButtonClick('0') }, "0"), /*#__PURE__*/
    React.createElement("button", { id: "decimal", value: ".", onClick: () => handleButtonClick('.') }, "."), /*#__PURE__*/
    React.createElement("button", { id: "equals", value: "=", style: { background: 'rgb(0, 68, 102)', position: 'absolute', height: '130px', bottom: '5px' }, onClick: () => handleButtonClick('=') }, "="))), /*#__PURE__*/


    React.createElement("div", { class: "author" }, " Designed and Coded By ", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/
    React.createElement("a", { href: "https://www.freecodecamp.org/fccedc9d93b-5d6f-4f00-9d80-a4ab1463c5e3", target: "_blank", rel: "noreferrer" }, "Samet \u015EAH\u0130N"))));



};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));