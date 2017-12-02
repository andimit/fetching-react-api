class App extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            data: [],
        }
    }

    componentDidMount()
    {
        fetch('http://ickata.net/sag/api/staff/bonuses/').then(function (response) {return response.json();
}).then((data) => {
    console.log( data.rows );
    console.log( data.columns )
    this.setState({ data: data.rows});this.setState({ data: data.columns }) }); 
    }


    render()
    {

        this.state.data.map(( dynamicData, key ) =>
        {
            const data = [{
                columns: [0], this: dynaimcData.fullName
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
                <div id="rows" className="rows">
                    <div id="columns" className="columns">
                        <h1 className="title">Final Table</h1>
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

                                this.state.data.map(( dynamicData ) => (
                                    <tr className="trow">
                                    <td> {dynamicData.fullName}</td>
                                    <td> {dynamicData.jobTitile} </td>
                                    <td> {dynamicData.age} </td>
                                    <td> {dynamicData.bonus} </td>
                                </tr>
                                    ))
}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div >
        )
    }
}


ReactDOM.render( <div id="container"><App /></div>, document.querySelector( 'body' ) );