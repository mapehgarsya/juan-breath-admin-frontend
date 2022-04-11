import React from 'react'
// component/s
import { Form } from 'react-bootstrap'
import BasicTable from '../../../components/BasicTable'
import { VisitationHistroyCOLUMNS } from '../../../components/BasicTable/columns'

const VisitationHistoryTable = ({ data }) => {
    
  return (
    <div className='content-center-modal'>
      <Form.Text>
          This table shows the visitation record of a user for the last 15 days prior to reporting. 
      </Form.Text>
      <BasicTable 
        columnHeads = {VisitationHistroyCOLUMNS}
        tableData = {data}
        />
    </div>
    );
  }
  
export default VisitationHistoryTable;