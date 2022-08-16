import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState(0);
  const eventHandler = (event) => {
    setState((state) => calculate(state, event.target.innerText));
  };

  return (
    <section className="container">
      <p className="paragraph">
        Time to hear out the cowculator!!
      </p>
      <div className="coverBox">
        <div className="calcScreen">
          <span>{state.next || state.total || 0}</span>
        </div>
        <form className="button-container">
          <button
            type="button"
            className="calcBtn1 calc"
            onClick={eventHandler}
          >
            AC
          </button>
          <button
            type="button"
            className="calcBtn2 calc"
            onClick={eventHandler}
          >
            +/-
          </button>
          <button
            type="button"
            className="calcBtn3 calc"
            onClick={eventHandler}
          >
            %
          </button>
          <button
            type="button"
            className="calcBtn4 calc"
            onClick={eventHandler}
          >
            ÷
          </button>
          <button
            type="button"
            className="calcBtn5 calc"
            onClick={eventHandler}
          >
            7
          </button>
          <button
            type="button"
            className="calcBtn6 calc"
            onClick={eventHandler}
          >
            8
          </button>
          <button
            type="button"
            className="calcBtn7 calc"
            onClick={eventHandler}
          >
            9
          </button>
          <button
            type="button"
            className="calcBtn8 calc"
            onClick={eventHandler}
          >
            x
          </button>
          <button
            type="button"
            className="calcBtn9 calc"
            onClick={eventHandler}
          >
            4
          </button>
          <button
            type="button"
            className="calcBtn10 calc"
            onClick={eventHandler}
          >
            5
          </button>
          <button
            type="button"
            className="calcBtn11 calc"
            onClick={eventHandler}
          >
            6
          </button>
          <button
            type="button"
            className="calcBtn12 calc"
            onClick={eventHandler}
          >
            -
          </button>
          <button
            type="button"
            className="calcBtn13 calc"
            onClick={eventHandler}
          >
            1
          </button>
          <button
            type="button"
            className="calcBtn15 calc"
            onClick={eventHandler}
          >
            2
          </button>
          <button
            type="button"
            className="calcBtn15 calc"
            onClick={eventHandler}
          >
            3
          </button>
          <button
            type="button"
            className="calcBtn16 calc"
            onClick={eventHandler}
          >
            +
          </button>
          <button
            type="button"
            className="calcBtn17 calc"
            onClick={eventHandler}
          >
            0
          </button>
          <button
            type="button"
            className="calcBtn18 calc"
            onClick={eventHandler}
          >
            .
          </button>
          <button
            type="button"
            className="calcBtn19 calc"
            onClick={eventHandler}
          >
            =
          </button>
        </form>
      </div>
    </section>
  );
};

export default Calculator;
