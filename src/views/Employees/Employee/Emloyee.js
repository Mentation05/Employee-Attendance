import React, { useState } from 'react';
import "./Employee.scss";
import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardImage,
  CCardTitle,
  CCardText,
  CButton,
  CFormInput,
  CFormSelect,
  CFormTextarea,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CForm,
} from '@coreui/react'
import DatePicker from 'react-datepicker'

const employees = [
  {
    id: 0,
    name: 'John Doe',
    role: 'Web Designer',
    image:
      'https://images.unsplash.com/photo-1499323888381-7fd102a793de?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  // ... other employees
]

const EmployeeCard = ({ employee }) => (
  <CCol xs={12} sm={6} md={4} lg={3} className="mb-4">
    <CCard className="employee-card">
      <CCardImage className="employee-image" src={employee.image} alt={employee.name} />
      <CCardBody>
        <CCardTitle className="title">{employee.name}</CCardTitle>
        <CCardText className="text">{employee.role}</CCardText>
      </CCardBody>
    </CCard>
  </CCol>
)

const Employees = () => {
  const [visibleXL, setVisibleXL] = useState(false)
  const [joiningDate, setJoiningDate] = useState(null)

  return (
    <CContainer fluid className="input-container">
      <CRow className="mb-3">
        <CCol xs={12} sm={6} md={3} className="mb-2">
          <CFormInput className="input" placeholder="Employee ID" />
        </CCol>
        <CCol xs={12} sm={6} md={3} className="mb-2">
          <CFormInput className="input" placeholder="Employee Name" />
        </CCol>
        <CCol xs={12} sm={6} md={3} className="mb-2">
          <CFormSelect className="input">
            <option>Select Designation</option>
            <option>Web Developer</option>
            <option>App Developer</option>
            <option>UI/UX Developer</option>
            <option>Video Editor</option>
            <option>Manager</option>
          </CFormSelect>
        </CCol>
        <CCol xs={12} sm={6} md={3} className="mb-2 d-flex align-items-center">
          <CButton color="success" className="btn me-2">
            Search
          </CButton>
          <CButton color="success" className="btn" onClick={() => setVisibleXL(true)}>
            Add Employee
          </CButton>
        </CCol>
      </CRow>

      <CRow>
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </CRow>

      <CModal
        size="xl"
        visible={visibleXL}
        onClose={() => setVisibleXL(false)}
        aria-labelledby="ExtraLargeModalTitle"
      >
        <CModalHeader>
          <CModalTitle id="ExtraLargeModalTitle">Add New Employee</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <CRow className="mb-3">
              <CCol xs={12}>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <CFormInput className="modal-input" type="text" placeholder="First Name" />
                      </td>
                      <td>
                        <CFormInput className="modal-input" type="text" placeholder="Last Name" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <CFormInput className="modal-input" type="email" placeholder="Email" />
                      </td>
                      <td>
                        <CFormInput className="modal-input" type="text" placeholder="Username" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <CFormInput
                          className="modal-input"
                          type="password"
                          placeholder="Password"
                        />
                      </td>
                      <td>
                        <CFormInput
                          className="modal-input"
                          type="password"
                          placeholder="Confirm Password"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <CFormInput className="modal-input" type="text" placeholder="Employee ID" />
                      </td>
                      <td>
                        <DatePicker
                          selected={joiningDate}
                          onChange={(date) => setJoiningDate(date)}
                          placeholderText="Joining Date"
                          className="form-control modal-input"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <CFormInput className="modal-input" type="tel" placeholder="Phone" />
                      </td>
                      <td>
                        <CFormInput className="modal-input" type="text" placeholder="Company" />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <CFormSelect className='modal-input-select'>
                          <option>Select Designation</option>
                          <option>Web Developer</option>
                          <option>App Developer</option>
                          <option>UI/UX Developer</option>
                          <option>Video Editor</option>
                          <option>Manager</option>
                        </CFormSelect>
                      </td>
                      <td>
                        <CFormSelect className='modal-input-select'>
                          <option>Select Designation</option>
                          <option>Web Developer</option>
                          <option>App Developer</option>
                          <option>UI/UX Developer</option>
                          <option>Video Editor</option>
                          <option>Manager</option>
                        </CFormSelect>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CCol>
            </CRow>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton className="modal-btn-close" onClick={() => setVisibleXL(false)}>
            Close
          </CButton>
          <CButton className="modal-btn-save">Save changes</CButton>
        </CModalFooter>
      </CModal>
    </CContainer>
  )
}

export default Employees
