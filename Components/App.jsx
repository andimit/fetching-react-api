class App extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            rows: [],
            columns: []
        }
    }

    componentDidMount()
    {

        fetch( "http://ickata.net/sag/api/staff/bonuses/" )
            .then( function ( response )
            {
                return response.json();
            } )
            .then( data =>
            {
                this.setState( { rows: data.rows, columns: data.columns } );
            } );

    }

    render()
    {

        return (
            <div id="container" className="container">
                <h1>Final Table with React JS</h1>
                <table className="datagrid">
                    <thead>
                        <tr> {
                            this.state.columns.map(( column, index ) =>
                            {
                                return ( <th>{column}</th> )
                            }
                            )
                        }
                        </tr>
                    </thead>
                    <tbody> {
                        this.state.rows.map( row => (
                            <tr>{row.map( cell => (
                                <td>{typeof cell === 'number' ? cell.toFixed( 2 ) : cell}</td>
                            ) )}
                            </tr>
                        ) )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}


ReactDOM.render( <div id="container"><App /></div>, document.querySelector( 'body' ) );