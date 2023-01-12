'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const Count = require('../../models/Count');
// let count;
// const countFinder = () => {
//     Count.findById('5e008f71839c6e5d7c02250f', (countInDB)=>{
//         count = countInDB.count;
//     });
// }
// countFinder();

var Counter = function (_React$Component) {
    _inherits(Counter, _React$Component);

    function Counter(props) {
        _classCallCheck(this, Counter);

        var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

        _this.addOne = _this.addOne.bind(_this);
        _this.addFive = _this.addFive.bind(_this);
        _this.addTen = _this.addTen.bind(_this);
        _this.reset = _this.reset.bind(_this);
        _this.minusOne = _this.minusOne.bind(_this);
        _this.minusFive = _this.minusFive.bind(_this);
        _this.minusTen = _this.minusTen.bind(_this);
        _this.state = {
            count: 0
        };
        return _this;
    }

    _createClass(Counter, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var countString = localStorage.getItem('count');
            var count = parseInt(countString, 10);
            this.setState(function (prevState) {
                return { count: count };
            });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            var count = this.state.count;
            localStorage.setItem('count', count);
        }
    }, {
        key: 'addOne',
        value: function addOne() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 1
                };
            });
        }
    }, {
        key: 'addFive',
        value: function addFive() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 5
                };
            });
        }
    }, {
        key: 'addTen',
        value: function addTen() {
            this.setState(function (prevState) {
                return {
                    count: prevState.count + 10
                };
            });
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.setState(function (prevState) {
                return { count: 0 };
            });
        }
    }, {
        key: 'minusOne',
        value: function minusOne() {
            this.setState(function (prevState) {
                return { count: prevState.count - 1 };
            });
        }
    }, {
        key: 'minusFive',
        value: function minusFive() {
            this.setState(function (prevState) {
                return { count: prevState.count - 5 };
            });
        }
    }, {
        key: 'minusTen',
        value: function minusTen() {
            this.setState(function (prevState) {
                return { count: prevState.count - 10 };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'h1',
                    null,
                    'Counter App'
                ),
                React.createElement(
                    'h2',
                    null,
                    'Count : ',
                    this.state.count
                ),
                React.createElement(
                    'button',
                    { onClick: this.addOne },
                    '+1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.addFive },
                    '+5'
                ),
                React.createElement(
                    'button',
                    { onClick: this.addTen },
                    '+10'
                ),
                React.createElement(
                    'button',
                    { onClick: this.reset },
                    'Reset'
                ),
                React.createElement(
                    'button',
                    { onClick: this.minusOne },
                    '-1'
                ),
                React.createElement(
                    'button',
                    { onClick: this.minusFive },
                    '-5'
                ),
                React.createElement(
                    'button',
                    { onClick: this.minusTen },
                    '-10'
                )
            );
        }
    }]);

    return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));
