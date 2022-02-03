import React, {useState, useEffect, useMemo} from 'react'
// import package/s
import { useTable, useSortBy } from 'react-table'
import { FaPen, FaTrash, FaQrcode, FaArrowDown, FaArrowUp } from "react-icons/fa";


function BasicTable ({columnHeads, tableData, hasDelete, hasEdit, hasQR, editModalFunction}) {

    const columns = useMemo(() => columnHeads, [columnHeads])
    const data = useMemo(() => tableData, [tableData])

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
                            tableData && rows.map((row, i) => {
                                prepareRow(row)
                                return (
                                    <tr {...row.getRowProps()}>
                                        {row.cells.map((cell) => {
                                            console.log(cell)
                                            if(cell.column.Header === "No.") {
                                                return <tr>
                                                    <td>{i + 1}</td>
                                                </tr>
                                            }

                                            if(cell.column.Header === "Faculty in Charge") {
                                                return <tr>
                                                    <td>{cell.row.original.firstName + " " + cell.row.original.middleName?.toUpperCase() + ". " + cell.row.original.lastName}</td>
                                                </tr>
                                            }

                                            if(cell.column.Header === "Date Created" || cell.column.Header === "Date") {
                                                return <td>{cell.row.original.createdAt?.split('T')[0]}</td>
                                                
                                            }

                                            if (cell.column.Header==='Actions' && hasEdit && hasDelete) {
                                                return <td className='iconBtnWrapper'>
                                                    <button className='iconBtn mr-10'>
                                                        <FaPen 
                                                            onClick={editModalFunction}
                                                        />
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
