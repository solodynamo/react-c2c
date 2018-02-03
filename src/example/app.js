import React from 'react';
import {C2C} from '../lib';


export class App extends React.PureComponent {
  state = {value: 'Hey! Try to copy me '};

  onChange = ({target: {value}}) => {
    this.setState({value});
  };

  onClick = ({target: {innerHTML}}) => {
    console.log(`Clicked on "${innerHTML}"!`);
  };

  render() {
    return (
      <div className="app">
        <h1>react-C2C</h1>

        <section className="section">
          <textarea onChange={this.onChange} rows={2} cols={10} value={this.state.value} />
        </section>

        <section className="section">
          <C2C text={this.state.value}>{({ copied, handleClick }) =>
            copied
              ? <span style={{color: 'red'}}>Copied.</span>
              : <button
                  onClick={e => {
                    this.onClick(e);
                    handleClick(e);
                  }}>
                    Copy to clipboard with button
                </button>
          }</C2C>
        </section>

        <section className="section">
          <textarea cols="22" rows="3" style={{marginTop: '1em'}} />
        </section>
      </div>
    );
  }
}
