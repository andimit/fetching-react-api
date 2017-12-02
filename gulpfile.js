var gulp = require( 'gulp' );
var babel = require( 'gulp-babel' );
var rename = require( 'gulp-rename' );

gulp.task( 'default', function () { } );

gulp.task( 'transpile', function ()
{
    return gulp.src( ['./**/**/*.jsx'] )
        .pipe( babel( {
            presets: ['react']
        } ) )
        .pipe( rename( function ( path )
        {
            if ( path.dirname == 'HelloFinalApp/Components' )
            {
                path.basename += '.transpiled';
            } else if ( path.dirname == 'Components' )
            {
                path.dirname = 'scripts/transpiled';
            }
        } ) )
        .pipe( gulp.dest( './' ) );
} );

gulp.task( 'watch', function ()
{
    gulp.watch( 'jsx/**/*.jsx', ['transpile'] );
} );
