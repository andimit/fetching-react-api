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

        this.state.columns.map(( dynamicData, key ) =>
        {
            const data = [{
                columns: [0], this: dynamicData.fullName
            },
            {
                columns: [1], this: dynamicData.jobTitile
            },
            {
                columns: [2], this: dynamicData.age
            },
            {
                columns: [3], this: dynamicData.bonus
            }
            ]
        }
        )

        const columns = [{
            Header: 'Full name',
            accessor: 'fullName'
        },
        {
            Header: 'Job title',
            accessor: 'jobTitile'
        },
        {
            Header: 'Age',
            accessor: 'age'
        },
        {
            Header: 'Bonus',
            accessor: 'bonus'
        },
        ]

        return (
            <div id="container" className="container">
                <h1>Final Table</h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Full Name</th>
                                    <th>Job Title</th>
                                    <th>Age</th>
                                    <th>Bonus</th>
                                </tr>
                            </thead>
                            <tbody> {
                                this.state.rows.map(( row ) => (
                                    <tr>
                                        <td>{row[0]}</td>
                                        <td>{row[1]}</td>
                                        <td>{row[2]}</td>
                                        <td>{row[3]}</td>
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