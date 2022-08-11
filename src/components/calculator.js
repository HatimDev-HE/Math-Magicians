import React, { PureComponent } from 'react';
import calculate from '../logic/calculate';

class Calculator extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.eventHandler = this.eventHandler.bind(this);
  }

  eventHandler(event) {
    this.setState((state) => calculate(state, event.target.innerText));
  }

  render() {
    const { next, total } = this.state;
    return (
      <section className="container">
        <div className="coverBox">
          <div className="calcScreen">
            <span>{next || total || 0}</span>
          </div>
          <form className="button-container">
            <button
              type="button"
              className="calcBtn1 calc"
              onClick={this.eventHandler}
            >
              AC
            </button>
            <button
              type="button"
              className="calcBtn2 calc"
              onClick={this.eventHandler}
            >
              +/-
            </button>
            <button
              type="button"
              className="calcBtn3 calc"
              onClick={this.eventHandler}
            >
              %
            </button>
            <button
              type="button"
              className="calcBtn4 calc"
              onClick={this.eventHandler}
            >
              ÷
            </button>
            <button
              type="button"
              className="calcBtn5 calc"
              onClick={this.eventHandler}
            >
              7
            </button>
            <button
              type="button"
              className="calcBtn6 calc"
              onClick={this.eventHandler}
            >
              8
            </button>
            <button
              type="button"
              className="calcBtn7 calc"
              onClick={this.eventHandler}
            >
              9
            </button>
            <button
              type="button"
              className="calcBtn8 calc"
              onClick={this.eventHandler}
            >
              x
            </button>
            <button
              type="button"
              className="calcBtn9 calc"
              onClick={this.eventHandler}
            >
              4
            </button>
            <button
              type="button"
              className="calcBtn10 calc"
              onClick={this.eventHandler}
            >
              5
            </button>
            <button
              type="button"
              className="calcBtn11 calc"
              onClick={this.eventHandler}
            >
              6
            </button>
            <button
              type="button"
              className="calcBtn12 calc"
              onClick={this.eventHandler}
            >
              -
            </button>
            <button
              type="button"
              className="calcBtn13 calc"
              onClick={this.eventHandler}
            >
              1
            </button>
            <button
              type="button"
              className="calcBtn15 calc"
              onClick={this.eventHandler}
            >
              2
            </button>
            <button
              type="button"
              className="calcBtn15 calc"
              onClick={this.eventHandler}
            >
              3
            </button>
            <button
              type="button"
              className="calcBtn16 calc"
              onClick={this.eventHandler}
            >
              +
            </button>
            <button
              type="button"
              className="calcBtn17 calc"
              onClick={this.eventHandler}
            >
              0
            </button>
            <button
              type="button"
              className="calcBtn18 calc"
              onClick={this.eventHandler}
            >
              .
            </button>
            <button
              type="button"
              className="calcBtn19 calc"
              onClick={this.eventHandler}
            >
              =
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default Calculator;
