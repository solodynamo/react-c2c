"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.C2C = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _c2c = _interopRequireDefault(require("./utils/c2c"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var renderPropValidator = function renderPropValidator(props, propName, componentName) {
  return !props.render && !props.children || typeof (props.render || props.children) !== 'function' ? new Error("One of props 'render' or 'children' was not specified in '".concat(componentName, "'.")) : null;
};

var C2C =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(C2C, _React$PureComponent);

  function C2C() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, C2C);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = C2C.__proto__ || Object.getPrototypeOf(C2C)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        copied: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "onClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(event) {
        var _this$props = _this.props,
            text = _this$props.text,
            options = _this$props.options;
        var copied = (0, _c2c.default)(text, options);

        _this.setState({
          copied: copied
        });
      }
    }), _temp));
  }

  _createClass(C2C, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(previousProps, previousState) {
      var shouldResetCopiedState = previousProps.text !== this.props.text // text got updated
      && previousState.copied === true // and previous copied state was true
      && this.state.copied === true // and current copied state is still true
      ;

      if (shouldResetCopiedState) {
        this.setState({
          copied: false
        }); // reset copied state to false
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          render = _props.render,
          props = _objectWithoutProperties(_props, ["children", "render"]);

      var copied = this.state.copied;
      var renderProp = children || render;
      return typeof renderProp === 'function' ? renderProp({
        copied: copied,
        handleClick: this.onClick
      }) : null;
    }
  }]);

  return C2C;
}(_react.default.PureComponent);

exports.C2C = C2C;
Object.defineProperty(C2C, "propTypes", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    text: _propTypes.default.string.isRequired,
    children: renderPropValidator,
    render: renderPropValidator,
    options: _propTypes.default.shape({
      debug: _propTypes.default.bool
    })
  }
});
Object.defineProperty(C2C, "defaultProps", {
  configurable: true,
  enumerable: true,
  writable: true,
  value: {
    onCopy: undefined,
    options: undefined
  }
});