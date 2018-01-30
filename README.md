<h1 align="center">
    <br>
    <img width="400" src="https://github.com/solodynamo/react-c2c/blob/master/media/logo.png" alt="react-c2c">
    <br>
    <br>
    <br>
</h1>

> Performant and lightweight copy 2 clipboard component for react applications.

## Highlights

- Can be easily integrated.
- Just ~ **1.4kb**.
- No dependencies.
- Configurable for debugging(through logs).

## Comparison
react-copy-to-clipboard is very nice but
- react-c2c: **1.4 kB** 🎉
- [`react-copy-to-clipboard`](https://www.npmjs.com/package/react-copy-to-clipboard): 1.7 kB

## Installation

```sh
npm install --save react-c2c
```
```sh
yarn add react-c2c
```

## Demo
https://solodynamo.github.io/react-c2c/

https://codesandbox.io/s/j314vk3r73

## Usage
```js
import React from 'react';
import ReactDOM from 'react-dom';
import {C2C} from 'react-c2c';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            copied: false,
        }
    }

    render() {
        return (
          <div>
            <input value={this.state.value}
              onChange={({target: {value}}) => this.setState({value, copied: false})} />

            <C2C text={this.state.value}
              onCopy={() => this.setState({copied: true})}>
              <button>Copy to clipboard with button</button>
            </C2C>

            {this.state.copied ? <span style={{color: 'blue'}}>Copied !</span> : null}
          </div>
        );
    }
}

const container = document.createElement('div');
document.body.appendChild(container);
ReactDOM.render(<App />, container);
```
## props


#### `text`: PropTypes.string.isRequired

Text to be copied to clipboard.


#### `onCopy`: PropTypes.func

Optional callback, will be called when text is copied.

```
onCopy(text, result)
```
`result (boolean)`: Returns `true` if copied successfully, else `false`.


#### `options`: PropTypes.shape({debug: bool})

Flag that enables logs for debugging.

#### `children`: PropTypes.node.isRequired

C2C is a simple wrapping component,  so it requires a single child element to be present, which will be used to capture clicks.

```js
<C2C text="Hi! 🌟 me">
  <button>Copy 2 Clipboard</button>
</C2C>
```

## Support react-c2c

react-c2c is completely free and open-source. If you find it useful, you can show your support by 🌟 it or sharing it in your social network.

## Contribute

Please do 🙂

## License

[MIT](LICENSE) © [Solodynamo](solodynamo.github.io)