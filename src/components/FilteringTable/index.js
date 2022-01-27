import React from 'react'
import { useTable, useFilters } from 'react-table'
import ColumnFilter from '../ColumnFilter'

const FilteringTable = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const { 
        getTableProps,
        getTableBodyProps,
        headerGroups,
        footerGroups,
        rows,
        prepareRow
    } = useTable({
            columns, 
            data
        }, ColumnFilter)

    return (
        <div>
            
        </div>
    )
}

export default FilteringTable
