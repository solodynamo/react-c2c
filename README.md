<h1 align="center">
    <br>
    <img width="400" src="https://github.com/solodynamo/react-c2c/blob/master/media/logo.png" alt="react-c2c">
    <br>
    <br>
    <br>
</h1>

> Performant and lightweight copy 2 clipboard component for react applications.

##### Featured in:
- [React Status](https://react.statuscode.com/issues/72)
- [Hashbang Weekly](http://hashbangweekly.okgrow.com/2018/01/22/issue-52)
- [Stackshare](https://stackshare.io/news/article/283641/performant-lightweight-and-dependency-free-react-copy-2-clipboard-component)

## Highlights

- Can be easily integrated.
- Just ~ **1.4kb**.
- No dependencies.
- Flexible (Uses render prop pattern)
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
        }
    }

    render() {
        return (
          <div>
            <input value={this.state.value}
              onChange={({target: {value}}) => this.setState({value, copied: false})} />

            <C2C
              text={this.state.value}
              render={({ copied, handleClick }) =>
                copied
                  ? <span style={{color: 'blue'}}>Copied !</span>
                  : <button onClick={handleClick}>Copy to clipboard</button>
              }
            />


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


#### `render`: PropTypes.func

[Render prop](https://reactjs.org/docs/render-props.html), pass a function that accepts an object with two keys, `handleClick` and `copied`.

* `handleClick` should be called when you want copy event to be triggered. This should usually be assigned to an `onClick` event as browsers require user action for copy to work.

* `copied` would be true in case of successful copying.

#### `children`: PropTypes.func

You can also use children as a function [pattern](https://discuss.reactjs.org/t/children-as-a-function-render-callbacks/626). The signature of this function is identical to that of render prop.

**NOTE: Either one of `render` or `children` props is required and must be of type `function`.**

#### `options`: PropTypes.shape({debug: bool})

Flag that enables logs for debugging.


```js
<C2C text="Hi! 🌟 me">{({ copied, handleClick }) =>
  copied
    ? <span style={{color: 'blue'}}>Copied !</span>
    : <button onClick={handleClick}>Copy to clipboard</button>
}</C2C>
```

## Support react-c2c

react-c2c is completely free and open-source. If you find it useful, you can show your support by 🌟 it or sharing it in your social network.

## Contribute

Please do 🙂

## License

[MIT](LICENSE) © [Solodynamo](solodynamo.github.io)
