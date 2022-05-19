import React, { useMemo } from 'react'
// import css
import './permissionsStyle.css'
// import package/s
import { useTable, useSortBy } from 'react-table'
import { FaPen, FaTrash, FaQrcode, FaArrowDown, FaArrowUp, FaEye } from "react-icons/fa";
import Spinner from 'react-bootstrap/Spinner'
import Badge from 'react-bootstrap/Badge'
function BasicTable ({ 
    columnHeads, 
    tableData, 
    hasTracing, 
    hasDelete, 
    hasEdit, 
    hasQR, 
    isFetching, 
    editModalFunction, 
    deleteModalFunction, 
    qrModalFunction,
    tracerModalFunction 

}) {

    const columns = useMemo(() => columnHeads, [columnHeads])
    const data = useMemo(() => tableData, [tableData])

    const tableInstance = useTable({
        columns,
        data
    },
    // useFilters,
    useSortBy
)

    const { 
        getTableProps, 
        getTableBodyProps,
        headerGroups, 
        rows, 
        prepareRow
    } = tableInstance

    const convertTo112HourFormat = time => {
        // Check correct time format and split into components
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

        if (time.length > 1) {
        // If time format correct
        time = time.slice(1); // Remove full string match value
        time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join('');
    };

    return (
        <div className='customTableDiv'>
            {
                isFetching && 
                    <tr className='d-flex justify-content-center w-100 mt-3 mb-3'>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </tr>
            }
            {
                !isFetching && (<table className='tableStyle' {...getTableProps()}>
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
                                            if(cell.column.Header === "No.") {
                                                return <td>{i + 1}</td>
                                            }

                                            if(cell.column.Header === "Faculty Name" || cell.column.Header === "Name") {
                                                return <td>{cell.row.original.firstName + " " + cell.row.original.middleName?.toUpperCase() + " " + cell.row.original.lastName}</td>
                                            }

                                            if(cell.column.Header === "Users Contact No.") {
                                                return <td>{cell.row.original.userId.mobileNumber}</td>
                                            }

                                            if(cell.column.Header === "Date") {
                                                return <td>{cell.row.original.date}</td>
                                            }

                                            if(cell.column.Header === "Role Name") {
                                                return <td><b>{cell.row.original.name.toUpperCase()}</b></td>
                                            }

                                            if(cell.column.Header === "Time") {
                                                return <td>{convertTo112HourFormat(cell.row.original.time)}</td>
                                            }

                                            if(cell.column.Header === "Close Contact Number") {
                                                return <td>{cell.row.original.userId.mobileNumber}</td>
                                            }
                                            
                                            if(cell.column.Header === "Health Status") {
                                                return <td style={{ fontWeight: "bold", color: cell.row.original.userHealthStatus === "positive" ? "red" : "#30b8a6" }}>
                                                    {cell.row.original.userHealthStatus}
                                                </td>
                                            }

                                            if(cell.column.Header === "Registration Date") {
                                                return <td>{cell.row.original.createdAt.split('T')[0]}</td>
                                            }

                                            if(cell.column.Header === "Action") {
                                                return <td className={cell.row.original.action === "Scanned the QR Code" ? 'entry' : 'exit' } >{cell.row.original.action}</td>
                                            }
                                            //Permissions
                                            if(cell.column.Header === "Permissions") {
                                                return <td><div className='permission-container'>
                                                    {
                                                        cell.row.original.permissions.map((data) => {
                                                            return <Badge className={data.name.split(":")[0]}>{data.name}</Badge>
                                                        })
                                                    }
                                                    </div>
                                                </td>
                                            }
                                            
                                            if(cell.column.Header === "Date Created" || cell.column.Header === "Date") {
                                                return <td>{cell.row.original.createdAt?.split('T')[0]}</td>   
                                            }

                                            if(hasTracing && cell.column.Header==='Actions') {
                                                return <td className='iconBtnWrapper'>
                                                    <button className='accentBtn mt-0 mb-0' title="Delete" onClick={() => tracerModalFunction(cell.row.original?.mobileNumber)}>
                                                        <FaEye/> Trace Contacts
                                                    </button>
                                                </td>
                                            }

                                            // note you can merge this line of code even further
                                            if (cell.column.Header==='Actions' && hasEdit && hasDelete && !hasQR) {
                                                return <td className='iconBtnWrapper'>
                                                    <button className='iconBtn mr-10' title="Edit">
                                                        <FaPen 
                                                            color="#2a749f"
                                                            onClick={() => editModalFunction(cell.row.original?._id)}
                                                        />
                                                    </button>
                                                    <button className='iconBtn' title="Delete">
                                                        <FaTrash 
                                                            color='red'
                                                            onClick={() => deleteModalFunction(cell.row.original?._id)}
                                                        />
                                                    </button>
                                                </td>
                                            }
                                            else if (cell.column.Header==='Actions' && hasEdit && hasDelete && hasQR) {
                                                return <td className='iconBtnWrapper'>
                                                    <button className='iconBtn mr-10' title="QR Code">
                                                        <FaQrcode 
                                                            color="black"
                                                            onClick={() => qrModalFunction(cell.row.original?._id)}
                                                        />
                                                    </button>
                                                    <button className='iconBtn mr-10' title="Edit">
                                                        <FaPen 
                                                            color="#2a749f"
                                                            onClick={() => editModalFunction(cell.row.original?._id)}
                                                        />
                                                    </button>
                                                    <button className='iconBtn' title="Delete">
                                                        <FaTrash 
                                                            color='red'
                                                            onClick={() => deleteModalFunction(cell.row.original?._id)}
                                                        />
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
                </table>)
            }
        </div>
        
    )
}

export default BasicTable
