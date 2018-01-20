import React from 'react';
import PropTypes from 'prop-types';
import copy from './utils/c2c';


export class C2C extends React.PureComponent {
  static propTypes = {
    text: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    onCopy: PropTypes.func,
    options: PropTypes.shape({
      debug: PropTypes.bool
    })
  };


  static defaultProps = {
    onCopy: undefined,
    options: undefined
  };


  onClick = event => {
    const {
      text,
      onCopy,
      children,
      options
    } = this.props;

    const child = React.Children.only(children);
    const result = copy(text, options);

    if (onCopy) {
      onCopy(text, result);
    }

    if (child && child.props && typeof child.props.onClick === 'function') {
      child.props.onClick(event);
    }
  };


  render() {
    const {
      children,
      ...props
    } = this.props;

    const child = React.Children.only(children);
    return React.cloneElement(child, {...props, onClick: this.onClick});
  }
}