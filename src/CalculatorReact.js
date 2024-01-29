import { useState, useRef } from "react";
import "./App.css";

function CalculatorReact() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }

  function resetInput(e) {
    inputRef.current.value = "";
  }

  function resetResult(e) {
    setResult(0);
  }

  return (
    <>

      <div>
        <h4 className="text-center my-5">Simple Calculator!!</h4>

        <div className="container d-flex justify-content-center align-items-center">
          <form action="#">
            <div className="row row-cols-1 row-cols-md-1">
              <div className="col">
                <input
                  pattern="[0-9]"
                  ref={inputRef}
                  type="number"
                  placeholder="Enter Number"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="col text-center my-5">
          <h3>Result</h3>
          <strong ref={resultRef}> {result}</strong>
        </div>

        <div className="container w-75 mt-5 buttons">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-6">
            <div className="col">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={plus}
              >
                Add
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={minus}
              >
                Substract
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={times}
              >
                Multiply
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={divide}
              >
                Divide
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-primary"
                onClick={resetInput}
              >
                Reset Input
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-primary"
                onClick={resetResult}
              >
                Reset Result
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CalculatorReact;
