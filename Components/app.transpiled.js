"use strict";

var _createClass = function () { function defineProperties( target, props ) { for ( var i = 0; i < props.length; i++ ) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ( "value" in descriptor ) descriptor.writable = true; Object.defineProperty( target, descriptor.key, descriptor ); } } return function ( Constructor, protoProps, staticProps ) { if ( protoProps ) defineProperties( Constructor.prototype, protoProps ); if ( staticProps ) defineProperties( Constructor, staticProps ); return Constructor; }; }();

function _classCallCheck( instance, Constructor ) { if ( !( instance instanceof Constructor ) ) { throw new TypeError( "Cannot call a class as a function" ); } }

function _possibleConstructorReturn( self, call ) { if ( !self ) { throw new ReferenceError( "this hasn't been initialised - super() hasn't been called" ); } return call && ( typeof call === "object" || typeof call === "function" ) ? call : self; }

function _inherits( subClass, superClass ) { if ( typeof superClass !== "function" && superClass !== null ) { throw new TypeError( "Super expression must either be null or a function, not " + typeof superClass ); } subClass.prototype = Object.create( superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } } ); if ( superClass ) Object.setPrototypeOf ? Object.setPrototypeOf( subClass, superClass ) : subClass.__proto__ = superClass; }

var App = function ( _React$Component )
{
    _inherits( App, _React$Component );

    function App()
    {
        _classCallCheck( this, App );

        var _this = _possibleConstructorReturn( this, ( App.__proto__ || Object.getPrototypeOf( App ) ).call( this ) );

        _this.state = {
            rows: [],
            columns: []
        };
        return _this;
    }

    _createClass( App, [{
        key: "componentDidMount",
        value: function componentDidMount()
        {
            var _this2 = this;

            fetch( "http://ickata.net/sag/api/staff/bonuses/" ).then( function ( response )
            {
                return response.json();
            } ).then( function ( data )
            {
                _this2.setState( { rows: data.rows, columns: data.columns } );
            } );
        }
    }, {
        key: "render",
        value: function render()
        {

            return React.createElement(
                "div",
                { id: "container", className: "container" },
                React.createElement(
                    "h1",
                    null,
                    "Final Table with React JS"
                ),
                React.createElement(
                    "table",
                    { className: "table" },
                    React.createElement(
                        "thead",
                        null,
                        React.createElement(
                            "tr",
                            null,
                            " ",
                            this.state.columns.map( function ( column, index )
                            {
                                return React.createElement(
                                    "th",
                                    null,
                                    column
                                );
                            } )
                        )
                    ),
                    React.createElement(
                        "tbody",
                        null,
                        " ",
                        this.state.rows.map( function ( row )
                        {
                            return React.createElement(
                                "tr",
                                null,
                                React.createElement(
                                    "td",
                                    null,
                                    row[0]
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    row[1]
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    row[2]
                                ),
                                React.createElement(
                                    "td",
                                    null,
                                    row[3]
                                )
                            );
                        } )
                    )
                )
            );
        }
    }] );

    return App;
}( React.Component );

ReactDOM.render( React.createElement(
    "div",
    { id: "container" },
    React.createElement( App, null )
), document.querySelector( 'body' ) );