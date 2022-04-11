import React from 'react'
// component/s
import { Form } from 'react-bootstrap'
import BasicTable from '../../../components/BasicTable'
import { CloseContactCOLUMNS } from '../../../components/BasicTable/columns'

const CloseContactTable = ({ data }) => {
    
  return (
    <div className='content-center-modal'>
      <div className='filterandReportGrp'>
          <button className='primaryBtn genReportBtn'>Alert All Close Contacts</button>
      </div>
      <Form.Text>
          This table shows the list possible close contacts of the infected individual based on the date and time the matches on the same location. 
      </Form.Text>
      <BasicTable 
        columnHeads = {CloseContactCOLUMNS}
        tableData = {data}
        />
    </div>
    );
  }
  
export default CloseContactTable;