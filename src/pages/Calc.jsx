import React from 'react';

export default class Calc extends React.Component {
  Button = (props) => (
    <button
      {...props}
      className={`font-weight-bold rounded-0 btn ${props.className} border-dark flex-grow-1`}
      style={{ width: '80px', height: '80px' }}
    >
      {props.children}
    </button>
  );

  render() {
    return (
      <div className="bg-light d-flex align-items-center justify-content-center vh-100">
        <div className="card bg-dark rounded border-0 shadow">
          <div className="card-body p-1">
            <div className="control px-3 py-2">
              <button
                className="btn btn-danger p-0"
                style={{ borderRadius: '50%', width: '20px', height: '20px' }}
              ></button>
              <button
                className="btn btn-warning p-0 ml-2"
                style={{ borderRadius: '50%', width: '20px', height: '20px' }}
              ></button>
              <button
                className="btn btn-success p-0 ml-2"
                style={{ borderRadius: '50%', width: '20px', height: '20px' }}
              ></button>
            </div>
            <div className="text-right text-white p-3">
              <h1>50</h1>
            </div>
            <div className="border-secondary">
              <div className="d-flex flex-row">
                <this.Button className="btn-dark">AC</this.Button>
                <this.Button className="btn-dark">+/-</this.Button>
                <this.Button className="btn-dark">%</this.Button>
                <this.Button className="flex-grow-1 btn-warning">/</this.Button>
              </div>
              <div className="d-flex flex-row">
                <this.Button className="btn-secondary">7</this.Button>
                <this.Button className="btn-secondary">8</this.Button>
                <this.Button className="btn-secondary">9</this.Button>
                <this.Button className="btn-warning">X</this.Button>
              </div>
              <div className="d-flex flex-row">
                <this.Button className="btn-secondary">4</this.Button>
                <this.Button className="btn-secondary">5</this.Button>
                <this.Button className="btn-secondary">6</this.Button>
                <this.Button className="btn-warning">-</this.Button>
              </div>
              <div className="d-flex flex-row">
                <this.Button className="btn-secondary">1</this.Button>
                <this.Button className="btn-secondary">2</this.Button>
                <this.Button className="btn-secondary">3</this.Button>
                <this.Button className="btn-warning">+</this.Button>
              </div>
              <div className="d-flex flex-row">
                <this.Button className="btn-secondary w-50">0</this.Button>
                <this.Button className="btn-secondary">.</this.Button>
                <this.Button className="btn-warning">=</this.Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
