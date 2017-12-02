const fs = require( 'fs' );
const express = require( 'express' );
const React = require( 'react' );
const renderToString = require( 'react-dom/server' ).renderToString;

const HelloFinalApp = require( './HelloFinalApp/Components/app.transpiled.js' );
const server = express();

server.get( '/favicon.ico', function ( request, response )
{
    response.status( 404 ).end();
} );

server.get( '/app', function ( request, response )
{
    fs.readFile(
        './HelloFinalApp/app.html',
        { encoding: 'utf-8' },
        function ( error, html )
        {
            if ( error )
            {
                return response.status( 500 ).end( error.message );
            }

            response.end(
                html.replace(
                    '<!-- Here our React app will render -->',
                    renderToString( React.createFactory( HelloFinalAppS )() )
                )
            );
        }
    );