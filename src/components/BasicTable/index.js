import React, {useState, useEffect, useMemo} from 'react'
// import package/s
import { useTable, useSortBy } from 'react-table'
import { FaPen, FaTrash, FaQrcode, FaArrowDown, FaArrowUp } from "react-icons/fa";

function BasicTable ({columnHeads, tableData, hasDelete, hasEdit, hasQR }) {

    const columns = useMemo(() => columnHeads, [])
    const data = useMemo(() => tableData, [])

    const [hasErrors, setHasErrors] = useState(false);

    const tableInstance = useTable({
        columns,
        data
    }, useSortBy)

    const { 
        getTableProps, 
        getTableBodyProps,
        headerGroups, 
        rows, 
        prepareRow
    } = tableInstance

    return (
        <div className='customTableDiv'>
            {
                !hasErrors && <table className='tableStyle' {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        <span>
                                            {column.isSorted ? (column.isSortedDesc ? <FaArrowDown className='ml-5'/> : <FaArrowUp className='ml-5'/>) : ''}
                                        </span>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {
                            // this section renders the data inside an array
                            tableData.length > 0 && rows.map(row => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map((cell) => {
                                            if (cell.column.Header==='Actions' && hasEdit && hasDelete) {
                                                return <td className='iconBtnWrapper'>
                                                    <button className='iconBtn mr-10'>
                                                        <FaPen />
                                                    </button>
                                                    <button className='iconBtn'>
                                                        <FaTrash />
                                                    </button>
                                                </td>
                                            }
                                            else if (cell.column.Header==='Actions' && hasEdit && hasDelete && hasQR) {
                                                return <td className='iconBtnWrapper'>
                                                    <button className='iconBtn mr-10' title="QR Code">
                                                        <FaQrcode />
                                                    </button>
                                                    <button className='iconBtn mr-10' title="Edit">
                                                        <FaPen />
                                                    </button>
                                                    <button className='iconBtn' title="Delete">
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
                        {
                                tableData.length === 0 && <tr><td>No data to be displayed at the moment</td></tr>
                            }
                    </tbody>
                </table>
            }
        </div>
        
    )
}

export default BasicTable
