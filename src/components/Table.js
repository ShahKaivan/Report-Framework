import React from 'react';

const Table = ({data,columns}) => {
    return (
        <table>
            <thread>
                <tr>
                    {
                        columns.map(col => (
                            <th key={col.key}>{col.label}</th>

                    ))}
                </tr>            
            </thread>
            <tbody>
                {data.map(row =>(
                    <tr key={row.id}>
                        {columns.map(col => (
                            <td key={col.key}>{row[col.key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;