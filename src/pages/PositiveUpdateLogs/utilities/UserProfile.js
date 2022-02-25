import React from 'react'
// import package/s
import { Form } from 'react-bootstrap'

const PositiveUserProfile = ({ data }) => {
    
  return (
    <>
        <div className='content-center-modal'>
            <Form.Text>
                This form only contains information uploaded by the infected user.
                All information are strictly confidential.
            </Form.Text>
            <div className='mt-3'>
                <h3>User Affiliation</h3>
                <Form.Group className="mb-2 mt-2 d-flex" controlId="formBasicEmail">
                    <div className='form-inline-display'>
                        <Form.Label>User Affiliation</Form.Label>
                        <Form.Control 
                            type="text"
                            value={data.userType} 
                            required
                        />
                    </div>
                    {
                        data.userType === "Student" && 
                        <div className='form-inline-display'>
                            <Form.Label>Student Number </Form.Label>
                            <Form.Control 
                                type="text"
                                value={data.studentNumber}  
                                required
                            />
                        </div>
                    }
                    {
                        data.userType === "Worker" && 
                        <div className='form-inline-display'>
                            <Form.Label>Job Title</Form.Label>
                            <Form.Control 
                                type="text"
                                value={data.jobTitle}  
                                required
                            />
                        </div>
                    }
                    {
                        (data.userType === "Student" || data.userType === "Faculty") && 
                        <div className='form-inline-display'>
                            <Form.Label>Department </Form.Label>
                            <Form.Control 
                                type="text"
                                value={data.collegeDepartment}  
                                required
                            />
                        </div>
                    }
                </Form.Group>
            </div>
            <div className='mt-3'>
                <h3>Full Name</h3>
                <Form.Group className="mb-2 mt-2 d-flex" controlId="formBasicEmail">
                    <div className='form-inline-display'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={data.firstName}  
                            required
                        />
                    </div>
                    <div className='form-inline-display'>
                        <Form.Label>Middle Name </Form.Label>
                        <Form.Control 
                            type="text" 
                            value={data.middleName}  
                            required
                        />
                    </div>
                    <div className='form-inline-display'>
                        <Form.Label>Last Name </Form.Label>
                        <Form.Control 
                            type="text" 
                            value={data.lastName}  
                            required
                        />
                    </div>
                    <div className='form-inline-display small-input'>
                        <Form.Label>Suffix </Form.Label>
                        <Form.Control 
                            type="text" 
                            value={data.nameExtension}  
                            required
                        />
                    </div>
                </Form.Group>
            </div>
            <div className='mt-3'>
                <h3>Address</h3>
                <Form.Group className="mb-2 mt-2 d-flex" controlId="formBasicEmail">
                    <div className='form-inline-display'>
                        <Form.Label>Lot Number</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={data.lotNumber} 
                            required
                        />
                    </div>
                    <div className='form-inline-display'>
                        <Form.Label>Street Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={data.streetName} 
                            required
                        />
                    </div>
                </Form.Group>
                <Form.Group className="mb-2 mt-2 d-flex" controlId="formBasicEmail">
                    <div className='form-inline-display'>
                        <Form.Label>District/Subdivision</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={data.disctrict} 
                            required
                        />
                    </div>
                    <div className='form-inline-display'>
                        <Form.Label>Barangay</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={data.barangay} 
                            required
                        />
                    </div>
                </Form.Group>
                <Form.Group className="mb-2 mt-2 d-flex" controlId="formBasicEmail">
                    <div className='form-inline-display'>
                        <Form.Label>City</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={data.city} 
                            required
                        />
                    </div>
                    <div className='form-inline-display'>
                        <Form.Label>Province</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={data.province} 
                            required
                        />
                    </div>
                </Form.Group>
            </div>
            <div className='mt-3'>
                <h3>Contact Number</h3>
                <Form.Group className="mb-2 mt-2 d-flex" controlId="formBasicEmail">
                    <div className='custom-width'>
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control 
                            type="text" 
                            value={data.mobileNumber} 
                            required
                        />
                    </div>
                </Form.Group>
            </div>
        </div>
    </>
    );
  }
  
export default PositiveUserProfile;