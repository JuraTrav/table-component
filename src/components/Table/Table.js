import React, { Component } from 'react';

class Table extends Component {
    render() {
        const { columns, data, summary } = this.props;
        var tfoot;

        let thead = columns.map((index, key) => <td key={key}>{index}</td>);

        let tbody = data.map((row, k) =>
            <tr key={k}> 
                {columns.map((index, j) => 
                    <td key={j}>{row[index]}</td>
                )}
            </tr>
        );

        if(summary){
            tfoot = summary.map((index, k) => {
                    if(summary.indexOf(index) === 0){
                        return <td key={k} colSpan={4}>{data.reduce((p, n) => p + n[index], 0)}</td>
                    } else {
                        return <td key={k}>{data.reduce((p, n) => p + n[index], 0).toFixed(2)}</td>
                    }               
            });
        } 

        return (
            <table>
                <thead>
                    <tr>
                        {thead}
                    </tr>
                </thead>
                <tbody>
                    {tbody}
                </tbody>
                {summary &&
                    <tfoot>
                        <tr>
                            {tfoot}
                        </tr> 
                    </tfoot>
                }
            </table>
        );
    }
}

export default Table;
