'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

        _this.state = {
            data: []
        };
        return _this;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            fetch('http://ickata.net/sag/api/staff/bonuses/').then(function (response) {
                return response.json();
            }).then(function (data) {
                console.log(data.rows);
                console.log(data.columns);
                _this2.setState({ data: data.rows });_this2.setState({ data: data.columns });
            });
        }
    }, {
        key: 'render',
        value: function render() {

            this.state.data.map(function (dynamicData, key) {
                var data = [{
                    columns: [0], this: dynaimcData.fullName
                }, {
                    columns: [1], this: dynamicData.jobTitile
                }, {
                    columns: [2], this: dynamicData.age
                }, {
                    columns: [3], this: dynamicData.bonus
                }];
            });

            var columns = [{
                Header: 'Full name',
                accessor: 'fullName'
            }, {
                Header: 'Job title',
                accessor: 'jobTitile'
            }, {
                Header: 'Age',
                accessor: 'age'
            }, {
                Header: 'Bonus',
                accessor: 'bonus'
            }];

            return React.createElement(
                'div',
                { id: 'container', className: 'container' },
                React.createElement(
                    'div',
                    { id: 'rows', className: 'rows' },
                    React.createElement(
                        'div',
                        { id: 'columns', className: 'columns' },
                        React.createElement(
                            'h1',
                            { className: 'title' },
                            'Final Table'
                        ),
                        React.createElement(
                            'table',
                            { className: 'table' },
                            React.createElement(
                                'thead',
                                null,
                                React.createElement(
                                    'tr',
                                    null,
                                    React.createElement(
                                        'th',
                                        null,
                                        'Full Name'
                                    ),
                                    React.createElement(
                                        'th',
                                        null,
                                        'Job Title'
                                    ),
                                    React.createElement(
                                        'th',
                                        null,
                                        'Age'
                                    ),
                                    React.createElement(
                                        'th',
                                        null,
                                        'Bonus'
                                    )
                                )
                            ),
                            React.createElement(
                                'tbody',
                                null,
                                ' ',
                                this.state.data.map(function (dynamicData) {
                                    return React.createElement(
                                        'tr',
                                        { className: 'trow' },
                                        React.createElement(
                                            'td',
                                            null,
                                            ' ',
                                            dynamicData.fullName
                                        ),
                                        React.createElement(
                                            'td',
                                            null,
                                            ' ',
                                            dynamicData.jobTitile,
                                            ' '
                                        ),
                                        React.createElement(
                                            'td',
                                            null,
                                            ' ',
                                            dynamicData.age,
                                            ' '
                                        ),
                                        React.createElement(
                                            'td',
                                            null,
                                            ' ',
                                            dynamicData.bonus,
                                            ' '
                                        )
                                    );
                                })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(
    'div',
    { id: 'container' },
    React.createElement(App, null)
), document.querySelector('body'));