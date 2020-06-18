import React from 'react';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '0',
    };
  }

  Button = (props) => (
    <button
      {...props}
      className={`font-weight-bold rounded-0 btn ${props.className} border-dark flex-grow-1`}
      style={{ width: '100px', height: '100px' }}
    >
      {props.children}
    </button>
  );

  input = (number) => {
    this.setState({
      value: this.state.value === '0' ? number : this.state.value.concat(number),
    });
  };

  render() {
    return (
      <div className="bg-light d-flex align-items-center justify-content-center vh-100">
        <div className="card bg-dark rounded border-0 shadow">
          <div className="card-body p-1">
            <div className="control px-3 py-2">
              <button
                className="btn btn-danger p-0"
                style={{ borderRadius: '50%', width: '17px', height: '17px' }}
              ></button>
              <button
                className="btn btn-warning p-0 ml-2"
                style={{ borderRadius: '50%', width: '17px', height: '17px' }}
              ></button>
              <button
                className="btn btn-success p-0 ml-2"
                style={{ borderRadius: '50%', width: '17px', height: '17px' }}
              ></button>
            </div>
            <div className="text-right text-white p-3 py-4">
              <h1>{this.state.value}</h1>
            </div>
            <div className="border-secondary">
              <div className="d-flex flex-row">
                <this.Button className="btn-dark" onClick={() => this.setState({ value: '0' })}>
                  AC
                </this.Button>
                <this.Button className="btn-dark">+/-</this.Button>
                <this.Button className="btn-dark" onClick={() => this.input('%')}>
                  %
                </this.Button>
                <this.Button className="flex-grow-1 btn-warning" onClick={() => this.input('/')}>
                  /
                </this.Button>
              </div>
              <div className="d-flex flex-row">
                <this.Button onClick={() => this.input('7')} className="btn-secondary">
                  7
                </this.Button>
                <this.Button onClick={() => this.input('8')} className="btn-secondary">
                  8
                </this.Button>
                <this.Button onClick={() => this.input('9')} className="btn-secondary">
                  9
                </this.Button>
                <this.Button onClick={() => this.input('x')} className="btn-warning">
                  X
                </this.Button>
              </div>
              <div className="d-flex flex-row">
                <this.Button onClick={() => this.input('4')} className="btn-secondary">
                  4
                </this.Button>
                <this.Button onClick={() => this.input('5')} className="btn-secondary">
                  5
                </this.Button>
                <this.Button onClick={() => this.input('6')} className="btn-secondary">
                  6
                </this.Button>
                <this.Button className="btn-warning" onClick={() => this.input('-')}>
                  -
                </this.Button>
              </div>
              <div className="d-flex flex-row">
                <this.Button onClick={() => this.input('1')} className="btn-secondary">
                  1
                </this.Button>
                <this.Button onClick={() => this.input('2')} className="btn-secondary">
                  2
                </this.Button>
                <this.Button onClick={() => this.input('3')} className="btn-secondary">
                  3
                </this.Button>
                <this.Button className="btn-warning" onClick={() => this.input('+')}>
                  +
                </this.Button>
              </div>
              <div className="d-flex flex-row">
                <this.Button onClick={() => this.input('0')} className="btn-secondary w-50">
                  0
                </this.Button>
                <this.Button onClick={() => this.input('.')} className="btn-secondary">
                  .
                </this.Button>
                <this.Button
                  className="btn-warning"
                  onClick={() =>
                    this.setState({
                      value: `${eval(this.state.value.replace('x', '*').replace('%', ' / 100'))}`,
                    })
                  }
                >
                  =
                </this.Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
