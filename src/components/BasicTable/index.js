import React, { useMemo } from 'react'
// import package/s
import { useTable } from 'react-table'
import { FaPen, FaTrash } from "react-icons/fa";

function BasicTable ({columnHeads, tableData }) {

    const columns = useMemo(() => columnHeads, [])
    const data = useMemo(() => tableData, [])

    const tableInstance = useTable({
        columns,
        data
    })

    const { 
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows, 
        prepareRow
    } = tableInstance

    return (
        <div className='customTableDiv'>
            <table className='tableStyle' {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => {
                                        console.log(cell.column.Header)
                                        if (cell.column.Header==='Actions') {
                                            return <td className='iconBtnWrapper'>
                                                <button className='iconBtn mr-10'>
                                                    <FaPen />
                                                </button>
                                                <button className='iconBtn'>
                                                    <FaTrash />
                                                </button>
                                            </td>
                                        }
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })
                                        
                                    }
                                    
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
        
    )
}

export default BasicTable
