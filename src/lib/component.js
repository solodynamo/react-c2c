import React from 'react';
import PropTypes from 'prop-types';
import copy from './utils/c2c';


const renderPropValidator = (props, propName, componentName) => (
  (!props.render && !props.children)
  || (typeof (props.render || props.children) !== 'function')
)
  ? new Error(`One of props 'render' or 'children' was not specified in '${componentName}'.`)
  : null;

export class C2C extends React.PureComponent {
  state = {
    copied: false
  };

  static propTypes = {
    text: PropTypes.string.isRequired,
    children: renderPropValidator,
    render: renderPropValidator,
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
      options
    } = this.props;

    const copied = copy(text, options);

    this.setState({
      copied
    });
  };

  componentDidUpdate (previousProps, previousState) {
    const shouldResetCopiedState = (
      previousProps.text !== this.props.text // text got updated
      && previousState.copied === true       // and previous copied state was true
      && this.state.copied === true          // and current copied state is still true
    );

    if (shouldResetCopiedState) {
      this.setState({ copied: false });      // reset copied state to false
    }
  }

  render() {
    const {
      children,
      render,
      ...props
    } = this.props;

    const {
      copied
    } = this.state;

    const renderProp = children || render;

    return (typeof renderProp === 'function')
      ? renderProp({ copied, handleClick: this.onClick })
      : null;

  }
}
