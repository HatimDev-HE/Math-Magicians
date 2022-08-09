import React, { PureComponent } from 'react';

class Calculator extends PureComponent {
  render() {
    return (
      <section className="container">
        <div className="coverBox">
          <div className="calcScreen">
            <span>0</span>
          </div>
          <form className="button-container">
            <button type="button" className="calcBtn1 calc">AC</button>
            <button type="button" className="calcBtn2 calc">+/-</button>
            <button type="button" className="calcBtn3 calc">%</button>
            <button type="button" className="calcBtn4 calc">÷</button>
            <button type="button" className="calcBtn5 calc ">7</button>
            <button type="button" className="calcBtn6 calc">8</button>
            <button type="button" className="calcBtn7 calc">9</button>
            <button type="button" className="calcBtn8 calc">x</button>
            <button type="button" className="calcBtn9 calc">4</button>
            <button type="button" className="calcBtn10 calc">5</button>
            <button type="button" className="calcBtn11 calc">6</button>
            <button type="button" className="calcBtn12 calc">-</button>
            <button type="button" className="calcBtn13 calc">1</button>
            <button type="button" className="calcBtn14 calc">2</button>
            <button type="button" className="calcBtn15 calc">3</button>
            <button type="button" className="calcBtn16 calc">+</button>
            <button type="button" className="calcBtn17 calc">0</button>
            <button type="button" className="calcBtn18 calc">.</button>
            <button type="button" className="calcBtn19 calc">=</button>
          </form>
        </div>

      </section>
    );
  }
}

export default Calculator;
