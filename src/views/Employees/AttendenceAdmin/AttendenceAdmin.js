import React, { useState } from 'react'
import './AttendenceAdmin.scss'
import {
  CContainer,
  CTable,
  CTableBody,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
  CImage,
  CRow,
  CCol,
  CForm,
  CFormInput,
  CFormSelect,
  CButton,
  CCard,
  CCardBody,
  CCardImage,
  CCardTitle,
  CCardText,
  CPagination,
  CPaginationItem,
} from '@coreui/react'

const AttendenceAdmin = () => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1)
  const employees = [
    {
      name: 'John Doe',
      image:
        'https://images.unsplash.com/photo-1724709972210-4beb408de580?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      status: Array(31).fill('P'),
    },
    {
      name: 'Jane Smith',
      image:
        'https://images.unsplash.com/photo-1633242389742-c16e2d0a5bfb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      status: Array(31).fill('A'),
    },
    {
      name: 'Bob Johnson',
      image:
        'https://images.unsplash.com/photo-1575862469264-0a2e53494cdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8',
      status: Array(31)
        .fill('P')
        .map((s, i) => ([5, 12, 19].includes(i + 1) ? 'A' : 'P')),
    },
    {
      name: 'Alice Brown',
      image:
        'https://images.unsplash.com/photo-1593250996075-20ca77b2e13f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      status: Array(31)
        .fill('P')
        .map((s, i) => ([10, 11, 12].includes(i + 1) ? 'L' : 'P')),
    },
    {
      name: 'Eve Davis',
      image:
        'https://images.unsplash.com/photo-1592979073287-84efcc0c9078?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
      status: Array(31)
        .fill('P')
        .map((s, i) => ([15].includes(i + 1) ? 'A' : 'P')),
    },
    {
      name: 'Michael Lee',
      image:
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
      status: Array(31)
        .fill('P')
        .map((s, i) => ([3, 20, 28].includes(i + 1) ? 'A' : 'P')),
    },
    {
      name: 'John Doe',
      image:
        'https://images.unsplash.com/photo-1724709972210-4beb408de580?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      status: Array(31).fill('P'),
    },
    {
      name: 'Jane Smith',
      image:
        'https://images.unsplash.com/photo-1633242389742-c16e2d0a5bfb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      status: Array(31).fill('A'),
    },
    {
      name: 'Bob Johnson',
      image:
        'https://images.unsplash.com/photo-1575862469264-0a2e53494cdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8',
      status: Array(31)
        .fill('P')
        .map((s, i) => ([5, 12, 19].includes(i + 1) ? 'A' : 'P')),
    },
    {
      name: 'Alice Brown',
      image:
        'https://images.unsplash.com/photo-1593250996075-20ca77b2e13f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      status: Array(31)
        .fill('P')
        .map((s, i) => ([10, 11, 12].includes(i + 1) ? 'L' : 'P')),
    },
    {
      name: 'Eve Davis',
      image:
        'https://images.unsplash.com/photo-1592979073287-84efcc0c9078?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
      status: Array(31)
        .fill('P')
        .map((s, i) => ([15].includes(i + 1) ? 'A' : 'P')),
    },
    {
      name: 'Michael Lee',
      image:
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
      status: Array(31)
        .fill('P')
        .map((s, i) => ([3, 20, 28].includes(i + 1) ? 'A' : 'P')),
    },
    {
      name: 'John Doe',
      image:
        'https://images.unsplash.com/photo-1724709972210-4beb408de580?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      status: Array(31).fill('P'),
    },
    {
      name: 'Jane Smith',
      image:
        'https://images.unsplash.com/photo-1633242389742-c16e2d0a5bfb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      status: Array(31).fill('A'),
    },
    {
      name: 'Bob Johnson',
      image:
        'https://images.unsplash.com/photo-1575862469264-0a2e53494cdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8',
      status: Array(31)
        .fill('P')
        .map((s, i) => ([5, 12, 19].includes(i + 1) ? 'A' : 'P')),
    },
    {
      name: 'Alice Brown',
      image:
        'https://images.unsplash.com/photo-1593250996075-20ca77b2e13f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      status: Array(31)
        .fill('P')
        .map((s, i) => ([10, 11, 12].includes(i + 1) ? 'L' : 'P')),
    },
    {
      name: 'Eve Davis',
      image:
        'https://images.unsplash.com/photo-1592979073287-84efcc0c9078?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
      status: Array(31)
        .fill('P')
        .map((s, i) => ([15].includes(i + 1) ? 'A' : 'P')),
    },
    {
      name: 'Michael Lee',
      image:
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
      status: Array(31)
        .fill('P')
        .map((s, i) => ([3, 20, 28].includes(i + 1) ? 'A' : 'P')),
    },
    {
      name: 'John Doe',
      image:
        'https://images.unsplash.com/photo-1724709972210-4beb408de580?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      status: Array(31).fill('P'),
    },
    {
      name: 'Jane Smith',
      image:
        'https://images.unsplash.com/photo-1633242389742-c16e2d0a5bfb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      status: Array(31).fill('A'),
    },
    {
      name: 'Bob Johnson',
      image:
        'https://images.unsplash.com/photo-1575862469264-0a2e53494cdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8',
      status: Array(31)
        .fill('P')
        .map((s, i) => ([5, 12, 19].includes(i + 1) ? 'A' : 'P')),
    },
    {
      name: 'Alice Brown',
      image:
        'https://images.unsplash.com/photo-1593250996075-20ca77b2e13f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      status: Array(31)
        .fill('P')
        .map((s, i) => ([10, 11, 12].includes(i + 1) ? 'L' : 'P')),
    },
    {
      name: 'Eve Davis',
      image:
        'https://images.unsplash.com/photo-1592979073287-84efcc0c9078?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
      status: Array(31)
        .fill('P')
        .map((s, i) => ([15].includes(i + 1) ? 'A' : 'P')),
    },
    {
      name: 'Michael Lee',
      image:
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
      status: Array(31)
        .fill('P')
        .map((s, i) => ([3, 20, 28].includes(i + 1) ? 'A' : 'P')),
    },
    {
      name: 'John Doe',
      image:
        'https://images.unsplash.com/photo-1724709972210-4beb408de580?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      status: Array(31).fill('P'),
    },
    {
      name: 'Jane Smith',
      image:
        'https://images.unsplash.com/photo-1633242389742-c16e2d0a5bfb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      status: Array(31).fill('A'),
    },
    {
      name: 'Bob Johnson',
      image:
        'https://images.unsplash.com/photo-1575862469264-0a2e53494cdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8',
      status: Array(31)
        .fill('P')
        .map((s, i) => ([5, 12, 19].includes(i + 1) ? 'A' : 'P')),
    },
    {
      name: 'Alice Brown',
      image:
        'https://images.unsplash.com/photo-1593250996075-20ca77b2e13f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      status: Array(31)
        .fill('P')
        .map((s, i) => ([10, 11, 12].includes(i + 1) ? 'L' : 'P')),
    },
    {
      name: 'Eve Davis',
      image:
        'https://images.unsplash.com/photo-1592979073287-84efcc0c9078?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
      status: Array(31)
        .fill('P')
        .map((s, i) => ([15].includes(i + 1) ? 'A' : 'P')),
    },
    {
      name: 'Michael Lee',
      image:
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
      status: Array(31)
        .fill('P')
        .map((s, i) => ([3, 20, 28].includes(i + 1) ? 'A' : 'P')),
    },
    {
      name: 'John Doe',
      image:
        'https://images.unsplash.com/photo-1724709972210-4beb408de580?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      status: Array(31).fill('P'),
    },
    {
      name: 'Jane Smith',
      image:
        'https://images.unsplash.com/photo-1633242389742-c16e2d0a5bfb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      status: Array(31).fill('A'),
    },
    {
      name: 'Bob Johnson',
      image:
        'https://images.unsplash.com/photo-1575862469264-0a2e53494cdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8',
      status: Array(31)
        .fill('P')
        .map((s, i) => ([5, 12, 19].includes(i + 1) ? 'A' : 'P')),
    },
    {
      name: 'Alice Brown',
      image:
        'https://images.unsplash.com/photo-1593250996075-20ca77b2e13f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      status: Array(31)
        .fill('P')
        .map((s, i) => ([10, 11, 12].includes(i + 1) ? 'L' : 'P')),
    },
    {
      name: 'Eve Davis',
      image:
        'https://images.unsplash.com/photo-1592979073287-84efcc0c9078?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',
      status: Array(31)
        .fill('P')
        .map((s, i) => ([15].includes(i + 1) ? 'A' : 'P')),
    },
    {
      name: 'Michael Lee',
      image:
        'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',
      status: Array(31)
        .fill('P')
        .map((s, i) => ([3, 20, 28].includes(i + 1) ? 'A' : 'P')),
    },
  ]

  const [currentPage, setCurrentPage] = useState(1)
  const employeesPerPage = 10

  const indexOfLastEmployee = currentPage * employeesPerPage
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage
  const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee)

  const totalPages = Math.ceil(employees.length / employeesPerPage)

  return (
    <>
      <CContainer fluid className="attendence">
        <CRow className="mb-3 gx-2">
          <CCol xs={12} sm={2} className="mb-2 mb-sm-0">
            <CFormInput
              placeholder="Employee ID"
              className="input w-100"
              style={{ height: '2.5rem' }}
            />
          </CCol>
          <CCol xs={12} sm={2} className="mb-2 mb-sm-0">
            <CFormInput
              placeholder="Employee Name"
              className="input w-100"
              style={{ height: '2.5rem' }}
            />
          </CCol>
          <CCol xs={12} sm={2} className="mb-2 mb-sm-0">
            <CFormSelect className="w-100 input" style={{ height: '2.5rem' }}>
              <option>Select Month</option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i} value={i + 1}>
                  {new Date(0, i).toLocaleString('default', { month: 'long' })}
                </option>
              ))}
            </CFormSelect>
          </CCol>
          <CCol xs={12} sm={2} className="mb-2 mb-sm-0">
            <CFormSelect className="w-100 input" style={{ height: '2.5rem' }}>
              <option>Select Year</option>
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i} value={new Date().getFullYear() - i}>
                  {new Date().getFullYear() - i}
                </option>
              ))}
            </CFormSelect>
          </CCol>
          <CCol xs={12} sm={2} className="mb-2 mb-sm-0">
            <CButton color="btn" className="w-100" style={{ height: '2.5rem' }}>
              Search
            </CButton>
          </CCol>
        </CRow>
      </CContainer>

      <CContainer fluid className="my-5 main-container">
        <div className="table-responsive">
          <CTable bordered>
            <thead className="table-dark">
              <CTableRow>
                <CTableHeaderCell className="heading">Employee</CTableHeaderCell>
                {days.map((day) => (
                  <CTableHeaderCell key={day} className="day">
                    Day {day}
                  </CTableHeaderCell>
                ))}
              </CTableRow>
            </thead>
            <CTableBody>
              {currentEmployees.map((employee, index) => (
                <CTableRow key={index}>
                  <CTableDataCell className="d-flex align-items-center">
                    <div className="profile-pic-container me-2">
                      <CImage src={employee.image} alt={employee.name} className="profile-pic" />
                    </div>
                    <span className="employee-name">{employee.name}</span>
                  </CTableDataCell>
                  {employee.status.map((status, i) => (
                    <CTableDataCell
                      key={i}
                      className={
                        status === 'P'
                          ? 'text-success'
                          : status === 'A'
                            ? 'text-danger'
                            : 'text-warning'
                      }
                    >
                      {status}
                    </CTableDataCell>
                  ))}
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </div>
        <CPagination aria-label="Employee Pagination" className="mt-3">
          <CPaginationItem
            disabled={currentPage === 1}
            className="privious"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </CPaginationItem>
          {[...Array(totalPages).keys()].map((page) => (
            <CPaginationItem
              key={page + 1}
              active={currentPage === page + 1}
              onClick={() => setCurrentPage(page + 1)}
              className="paginations"
            >
              {page + 1}
            </CPaginationItem>
          ))}
          <CPaginationItem
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="next"
          >
            Next
          </CPaginationItem>
        </CPagination>
      </CContainer>
    </>
  )
}

export default AttendenceAdmin
