import { React, useState } from 'react'
import './Leave.scss'
import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CButton,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CAvatar,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CFormTextarea,
  CPagination,
  CPaginationItem,
} from '@coreui/react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaRegCircleDot } from 'react-icons/fa6'
import { IoMdArrowDropdown } from 'react-icons/io'
import { GoPlusCircle } from 'react-icons/go'

const LeavesPage = () => {
  const employeeLeaves = [
    {
      id: 5,
      name: 'Emily Davis',
      position: 'Product Manager',
      avatar:
        'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=500&auto=format&fit=crop&q=60',
      leaveType: 'Sick Leave',
      startDate: '10 Jul 2019',
      endDate: '12 Jul 2019',
      duration: '3 days',
      reason: 'Flu',
      status: 'Pending',
      statusColor: 'text-info',
    },
    {
      id: 6,
      name: 'Chris Lee',
      position: 'UI/UX Designer',
      avatar:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=500&auto=format&fit=crop&q=60',
      leaveType: 'Casual Leave',
      startDate: '20 Aug 2019',
      endDate: '21 Aug 2019',
      duration: '2 days',
      reason: 'Family Event',
      status: 'Rejected',
      statusColor: 'text-danger',
    },
    {
      id: 7,
      name: 'David Wilson',
      position: 'IT Support',
      avatar:
        'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60',
      leaveType: 'Emergency Leave',
      startDate: '10 Oct 2019',
      endDate: '12 Oct 2019',
      duration: '3 days',
      reason: 'Car Accident',
      status: 'Pending',
      statusColor: 'text-info',
    },
    {
      id: 8,
      name: 'David Wilson',
      position: 'IT Support',
      avatar:
        'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60',
      leaveType: 'Emergency Leave',
      startDate: '10 Oct 2019',
      endDate: '12 Oct 2019',
      duration: '3 days',
      reason: 'Car Accident',
      status: 'Pending',
      statusColor: 'text-info',
    },
    {
      id: 9,
      name: 'David Wilson',
      position: 'IT Support',
      avatar:
        'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60',
      leaveType: 'Emergency Leave',
      startDate: '10 Oct 2019',
      endDate: '12 Oct 2019',
      duration: '3 days',
      reason: 'Car Accident',
      status: 'Pending',
      statusColor: 'text-info',
    },
    {
      id: 10,
      name: 'David Wilson',
      position: 'IT Support',
      avatar:
        'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60',
      leaveType: 'Emergency Leave',
      startDate: '10 Oct 2019',
      endDate: '12 Oct 2019',
      duration: '3 days',
      reason: 'Car Accident',
      status: 'Pending',
      statusColor: 'text-info',
    },
    {
      id: 11,
      name: 'David Wilson',
      position: 'IT Support',
      avatar:
        'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60',
      leaveType: 'Emergency Leave',
      startDate: '10 Oct 2019',
      endDate: '12 Oct 2019',
      duration: '3 days',
      reason: 'Car Accident',
      status: 'Pending',
      statusColor: 'text-info',
    },
    {
      id: 12,
      name: 'David Wilson',
      position: 'IT Support',
      avatar:
        'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60',
      leaveType: 'Emergency Leave',
      startDate: '10 Oct 2019',
      endDate: '12 Oct 2019',
      duration: '3 days',
      reason: 'Car Accident',
      status: 'Pending',
      statusColor: 'text-info',
    },
    {
      id: 13,
      name: 'David Wilson',
      position: 'IT Support',
      avatar:
        'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60',
      leaveType: 'Emergency Leave',
      startDate: '10 Oct 2019',
      endDate: '12 Oct 2019',
      duration: '3 days',
      reason: 'Car Accident',
      status: 'Pending',
      statusColor: 'text-info',
    },
    {
      id: 14,
      name: 'David Wilson',
      position: 'IT Support',
      avatar:
        'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60',
      leaveType: 'Emergency Leave',
      startDate: '10 Oct 2019',
      endDate: '12 Oct 2019',
      duration: '3 days',
      reason: 'Car Accident',
      status: 'Pending',
      statusColor: 'text-info',
    },
    {
      id: 15,
      name: 'David Wilson',
      position: 'IT Support',
      avatar:
        'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60',
      leaveType: 'Emergency Leave',
      startDate: '10 Oct 2019',
      endDate: '12 Oct 2019',
      duration: '3 days',
      reason: 'Car Accident',
      status: 'Pending',
      statusColor: 'text-info',
    },
    {
      id: 16,
      name: 'David Wilson',
      position: 'IT Support',
      avatar:
        'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60',
      leaveType: 'Emergency Leave',
      startDate: '10 Oct 2019',
      endDate: '12 Oct 2019',
      duration: '3 days',
      reason: 'Car Accident',
      status: 'Pending',
      statusColor: 'text-info',
    },
    {
      id: 17,
      name: 'David Wilson',
      position: 'IT Support',
      avatar:
        'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60',
      leaveType: 'Emergency Leave',
      startDate: '10 Oct 2019',
      endDate: '12 Oct 2019',
      duration: '3 days',
      reason: 'Car Accident',
      status: 'Pending',
      statusColor: 'text-info',
    },
  ]

  const [visible, setVisible] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  // Calculate the total pages
  const totalPages = Math.ceil(employeeLeaves.length / itemsPerPage)

  // Get the data to display for the current page
  const currentData = employeeLeaves.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )

  return (
    <>
      <CCard className="leave-container">
        <CCardHeader>
          <CRow className="title">
            <CCol>
              <h3 className="page-title">Admin Leaves</h3>
            </CCol>
            <CCol xs="auto">
              <CButton
                color="primary"
                className="modal-add-button"
                onClick={() => setVisible(!visible)}
              >
                <GoPlusCircle /> Add Leave
              </CButton>
            </CCol>

            {/* Modal start */}
            <CModal visible={visible} onClose={() => setVisible(false)} id="add_leave">
              <CModalHeader onClose={() => setVisible(false)}>
                <CModalTitle>Add Leave</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <CRow>
                  <CCol xs={12}>
                    <CFormSelect className="modal-input-select" aria-label="Select Type of Leave">
                      <option className="modal-option">Select Type of Leave</option>
                      <option className="modal-option" value="1">
                        Casual Leave
                      </option>
                      <option className="modal-option" value="2">
                        Sick Leave
                      </option>
                      <option className="modal-option" value="3">
                        Earned Leave
                      </option>
                    </CFormSelect>
                  </CCol>
                </CRow>

                <CRow className="mt-3">
                  <CCol xs={6}>
                    <CFormInput className="modal-input" type="date" label="From Date" />
                  </CCol>
                  <CCol xs={6}>
                    <CFormInput className="modal-input" type="date" label="To Date" />
                  </CCol>
                </CRow>

                <CRow className="mt-3">
                  <CCol xs={6}>
                    <CFormInput className="modal-input" type="text" label="Number of Days" />
                  </CCol>
                  <CCol xs={6}>
                    <CFormInput className="modal-input" type="text" label="Remaining Leave" />
                  </CCol>
                </CRow>

                <CRow className="mt-3">
                  <CCol xs={12}>
                    <CFormTextarea className="modal-input" label="Leave Summary" rows="3" />
                  </CCol>
                </CRow>
              </CModalBody>
              <CModalFooter>
                <CButton className="close" onClick={() => setVisible(false)}>
                  Cancel
                </CButton>
                <CButton className="save">Submit</CButton>
              </CModalFooter>
            </CModal>
            {/* Modal ends */}
          </CRow>
        </CCardHeader>
        <CCardBody>
          <CRow className="card-section">
            <CCol md="3" className="mb-4">
              <CCard className="customs-card p-3">
                <CCardBody>
                  <h6>Today Presents</h6>
                  <h4>12 / 60</h4>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md="3" className="mb-4">
              <CCard className="customs-card p-3">
                <CCardBody>
                  <h6>Planned Leaves</h6>
                  <h4>
                    8 <span>Today</span>
                  </h4>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md="3" className="mb-4">
              <CCard className="customs-card p-3">
                <CCardBody>
                  <h6>Unplanned Leaves</h6>
                  <h4>
                    0 <span>Today</span>
                  </h4>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md="3" className="mb-4">
              <CCard className="customs-card p-3">
                <CCardBody>
                  <h6>Pending Requests</h6>
                  <h4>12</h4>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>

          <CRow className="filter-row align-items-center input-section">
            <CCol className="input-box" sm="6" md="2">
              <CForm>
                <CFormLabel className="default">Employee Name</CFormLabel>
                <CFormInput className="input" placeholder="Employee Name" />
              </CForm>
            </CCol>
            <CCol className="input-box" sm="6" md="2">
              <CForm>
                <CFormLabel className="default">Leave Type</CFormLabel>
                <CFormSelect className="modal-input-select">
                  <option className="option"> Leave Type</option>
                  <option className="option">Casual Leave</option>
                  <option className="option">Medical Leave</option>
                  <option className="option">Loss of Pay</option>
                </CFormSelect>
              </CForm>
            </CCol>
            <CCol className="input-box" sm="6" md="2">
              <CForm>
                <CFormLabel className="default">Leave Status</CFormLabel>
                <CFormSelect className="modal-input-select">
                  <option className="option"> Leave Status</option>
                  <option className="option">Pending</option>
                  <option className="option">Approved</option>
                  <option className="option">Rejected</option>
                </CFormSelect>
              </CForm>
            </CCol>
            <CCol className="input-box" sm="6" md="2">
              <CForm>
                <CFormLabel className="date">From</CFormLabel>
                <CFormInput className="input" type="date" />
              </CForm>
            </CCol>
            <CCol className="input-box" sm="6" md="2">
              <CForm>
                <CFormLabel className="date" l>
                  To
                </CFormLabel>
                <CFormInput className="input" type="date" />
              </CForm>
            </CCol>
            <CCol className="input-box" sm="6" md="2">
              <CButton className="search">Search</CButton>
            </CCol>
          </CRow>

          <CRow>
            <CCol>
              <div className="table-responsive">
                <CTable hover className="table-container">
                  <CTableHead>
                    <CTableRow className="table-heading">
                      <CTableHeaderCell>Employee</CTableHeaderCell>
                      <CTableHeaderCell>Leave Type</CTableHeaderCell>
                      <CTableHeaderCell>From</CTableHeaderCell>
                      <CTableHeaderCell>To</CTableHeaderCell>
                      <CTableHeaderCell>Days</CTableHeaderCell>
                      <CTableHeaderCell>Reason</CTableHeaderCell>
                      <CTableHeaderCell>Status</CTableHeaderCell>
                      <CTableHeaderCell>Actions</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody className="table-body">
                    {currentData.map((employee) => (
                      <CTableRow key={employee.id}>
                        <CTableDataCell>
                          <div className="table-avatar-container">
                            <CAvatar className="avatar" src={employee.avatar} />
                            <div className="info">
                              <p className="name" href="#">
                                {employee.name}
                              </p>{' '}
                              &nbsp;
                              <span className="mb-0 name text-muted">
                                <small>{employee.position}</small>
                              </span>
                            </div>
                          </div>
                        </CTableDataCell>
                        <CTableDataCell className="text-start mont">
                          {employee.leaveType}
                        </CTableDataCell>
                        <CTableDataCell className="text-start mont">
                          {employee.startDate}
                        </CTableDataCell>
                        <CTableDataCell className="text-start mont">
                          {employee.endDate}
                        </CTableDataCell>
                        <CTableDataCell className="text-start mont">
                          {employee.duration}
                        </CTableDataCell>
                        <CTableDataCell className="text-start mont">
                          {employee.reason}
                        </CTableDataCell>
                        <CTableDataCell className="text-start mont">
                          <CDropdown className="dropdownscontainer">
                            <CDropdownToggle
                              color="white"
                              className={`btn-sm btn-rounded d-flex align-items-center ${employee.statusColor}`}
                            >
                              <FaRegCircleDot className={`text-${employee.statusColor}`} />
                              <span className="ms-2">{employee.status}</span>
                              <IoMdArrowDropdown className="ms-2" />
                            </CDropdownToggle>
                            <CDropdownMenu className="dropdwonmenus">
                              <CDropdownItem className="dropdownItems">
                                <FaRegCircleDot className="text-primary" /> New
                              </CDropdownItem>
                              <CDropdownItem className="dropdownItems">
                                <FaRegCircleDot className="text-info" /> Pending
                              </CDropdownItem>
                              <CDropdownItem className="dropdownItems">
                                <FaRegCircleDot className="text-success" /> Approved
                              </CDropdownItem>
                              <CDropdownItem className="dropdownItems">
                                <FaRegCircleDot className="text-danger" /> Rejected
                              </CDropdownItem>
                            </CDropdownMenu>
                          </CDropdown>
                        </CTableDataCell>
                        <CTableDataCell className="text-start mont">
                          <CDropdown className="actions-container">
                            <CDropdownToggle
                              color="white"
                              className="btn-sm btn-rounded d-flex align-items-center"
                            >
                              <BsThreeDotsVertical />
                            </CDropdownToggle>
                            <CDropdownMenu className="dropdownmenus">
                              <CDropdownItem className="dropdownItems">Edit</CDropdownItem>
                              <CDropdownItem className="dropdownItems">Delete</CDropdownItem>
                            </CDropdownMenu>
                          </CDropdown>
                        </CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
              </div>
            </CCol>
          </CRow>
          {/* Pagination */}
          {totalPages > 1 && (
            <CPagination aria-label="Page navigation pagination">
              <CPaginationItem
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previous
              </CPaginationItem>
              {[...Array(totalPages)].map((_, i) => (
                <CPaginationItem
                  key={i}
                  active={i + 1 === currentPage}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </CPaginationItem>
              ))}
              <CPaginationItem
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </CPaginationItem>
            </CPagination>
          )}
        </CCardBody>
      </CCard>
    </>
  )
}

export default LeavesPage
