import React, { useEffect, useRef, useState } from "react";

function Calculator() {
  // result reff

  const resultRef = useRef();

  // input reset

  const input1 = useRef();
  const form = useRef();

  // input variables useState
  const [fNum, setFNum] = useState();
  const [sNum, setSNum] = useState();

  // Setting The first number
  function getFNum(e) {
    let num = e.target.value;
    setFNum(Number.parseInt(num));
  }

  // Setting the second number
  function getSNum(e) {
    let num = e.target.value;
    setSNum(Number.parseInt(num));
  }

  // Addition function

  function AddNums() {
    let add = fNum + sNum;
    resultRef.current.innerText = `Addition is : ${add}`;
  }

  function subNums() {
    let sub = fNum - sNum;
    resultRef.current.innerText = `Substraction is : ${sub}`;
  }

  function mulNums() {
    let mul = fNum * sNum;
    resultRef.current.innerText = `Multiplication is : ${mul}`;
  }

  function divNums() {
    let div = fNum / sNum;
    resultRef.current.innerText = `Division is : ${div}`;
  }

  function resetField() {
    // setFNum(0);
    // input1.reset();
    // input1.current.reset();
    // setSNum(0);
    form.current.reset();

  }

  function resetResult() {resultRef.current.innerText = ' '};

  return (
    <>
      <div>
        <h4 className="text-center my-5">Simple Calculator!!</h4>

        <div className="container d-flex justify-content-center align-items-center">
          <form action="#" ref={form}>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
              <div className="col">
                <input
                  type="number"
                  id="main"
                  ref={input1}
                  className="input"
                  placeholder="First Number"
                  onChange={getFNum}
                />
              </div>

              <div className="col">
                <input
                  type="number"
                  placeholder="First Number"
                  onChange={getSNum}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="col text-center my-5">
          <h3>Result</h3>
          <strong ref={resultRef}></strong>
        </div>

        <div className="container w-75 mt-5 buttons">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-6">
            <div className="col">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={AddNums}
              >
                Add
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={subNums}
              >
                Substract
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={mulNums}
              >
                Multiply
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={divNums}
              >
                Divide
              </button>
            </div>
            <div className="col">
              <button
                type="button"
                className="btn btn-primary"
                onClick={resetField}
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

export default Calculator;
