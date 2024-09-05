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
  ]

  const [visible, setVisible] = useState(false)

  return (
    <>
      <CCard className="fluid">
        <CCardHeader>
          <CRow alignItems="center">
            <CCol>
              <h3 className="page-title">Admin Leaves</h3>
            </CCol>
            <CCol xs="auto">
              <CButton
                color="primary"
                className="btn-sm btn-rounded btns"
                onClick={() => setVisible(!visible)}
              >
                <GoPlusCircle /> Add Leave
              </CButton>
            </CCol>

            <CModal visible={visible} onClose={() => setVisible(false)} id="add_leave">
              <CModalHeader onClose={() => setVisible(false)}>
                <CModalTitle>Add Leave</CModalTitle>
              </CModalHeader>
              <CModalBody>
                <CRow>
                  <CCol xs={12}>
                    <CFormSelect className="modal-form-label" aria-label="Select Type of Leave">
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
                    <CFormInput className="modal-input" type="number" label="Number of Days" />
                  </CCol>
                  <CCol xs={6}>
                    <CFormInput className="modal-input" type="number" label="Remaining Leave" />
                  </CCol>
                </CRow>

                <CRow className="mt-3">
                  <CCol xs={12}>
                    <CFormTextarea className="modal-input" label="Leave Summary" rows="3" />
                  </CCol>
                </CRow>
              </CModalBody>
              <CModalFooter>
                <CButton color="secondary" onClick={() => setVisible(false)}>
                  Cancel
                </CButton>
                <CButton color="primary">Submit</CButton>
              </CModalFooter>
            </CModal>
          </CRow>
        </CCardHeader>
        <CCardBody>
          <CRow>
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

          <CRow className="filter-row align-items-center">
            <CCol sm="6" md="2">
              <CForm>
                <CFormLabel className="font">Employee Name</CFormLabel>
                <CFormInput className="font" placeholder="Employee Name" />
              </CForm>
            </CCol>
            <CCol sm="6" md="2">
              <CForm>
                <CFormLabel className="default">Leave Type</CFormLabel>
                <CFormSelect className="select">
                  <option className="option"> Leave Type</option>
                  <option className="option">Casual Leave</option>
                  <option className="option">Medical Leave</option>
                  <option className="option">Loss of Pay</option>
                </CFormSelect>
              </CForm>
            </CCol>
            <CCol sm="6" md="2">
              <CForm>
                <CFormLabel className="default">Leave Status</CFormLabel>
                <CFormSelect className="select">
                  <option className="option"> Leave Status</option>
                  <option className="option">Pending</option>
                  <option className="option">Approved</option>
                  <option className="option">Rejected</option>
                </CFormSelect>
              </CForm>
            </CCol>
            <CCol sm="6" md="2">
              <CForm>
                <CFormLabel className="date">From</CFormLabel>
                <CFormInput className="date" type="date" />
              </CForm>
            </CCol>
            <CCol sm="6" md="2">
              <CForm>
                <CFormLabel className="date" l>
                  To
                </CFormLabel>
                <CFormInput className="date" type="date" />
              </CForm>
            </CCol>
            <CCol sm="6" md="2">
              <CButton className="font" color="success">
                Search
              </CButton>
            </CCol>
          </CRow>

          <CRow>
            <CCol>
              <div className="table-responsive">
                <CTable hover className="custom-card">
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell>Employee</CTableHeaderCell>
                      <CTableHeaderCell>Leave Type</CTableHeaderCell>
                      <CTableHeaderCell>From</CTableHeaderCell>
                      <CTableHeaderCell>To</CTableHeaderCell>
                      <CTableHeaderCell>Days</CTableHeaderCell>
                      <CTableHeaderCell>Reason</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">Status</CTableHeaderCell>
                      <CTableHeaderCell className="text-end">Actions</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {employeeLeaves.map((employee) => (
                      <CTableRow key={employee.id}>
                        <CTableDataCell>
                          <div className="table-avatar-container">
                            <CAvatar className="avatar" src={employee.avatar} />
                            <div className="info">
                              <p href="#">{employee.name}</p>
                              <p className="mb-0 text-muted">
                                <small>{employee.position}</small>
                              </p>
                            </div>
                          </div>
                        </CTableDataCell>
                        <CTableDataCell>{employee.leaveType}</CTableDataCell>
                        <CTableDataCell>{employee.startDate}</CTableDataCell>
                        <CTableDataCell>{employee.endDate}</CTableDataCell>
                        <CTableDataCell>{employee.duration}</CTableDataCell>
                        <CTableDataCell>{employee.reason}</CTableDataCell>
                        <CTableDataCell className="text-center">
                          <CDropdown>
                            <CDropdownToggle
                              color="white"
                              className={`btn-sm btn-rounded d-flex align-items-center ${employee.statusColor}`}
                            >
                              <FaRegCircleDot className={`text-${employee.statusColor}`} />
                              <span className="ms-2">{employee.status}</span>
                              <IoMdArrowDropdown className="ms-2" />
                            </CDropdownToggle>
                            <CDropdownMenu>
                              <CDropdownItem href="#">
                                <FaRegCircleDot className="text-primary" /> New
                              </CDropdownItem>
                              <CDropdownItem href="#">
                                <FaRegCircleDot className="text-info" /> Pending
                              </CDropdownItem>
                              <CDropdownItem
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#approve_leave"
                              >
                                <FaRegCircleDot className=" text-success" /> Approved
                              </CDropdownItem>
                              <CDropdownItem href="#">
                                <FaRegCircleDot className=" text-danger" /> Declined
                              </CDropdownItem>
                            </CDropdownMenu>
                          </CDropdown>
                        </CTableDataCell>
                        <CTableDataCell className="text-end">
                          <CDropdown alignment="end">
                            <CDropdownToggle color="link">
                              <BsThreeDotsVertical />
                            </CDropdownToggle>
                            <CDropdownMenu>
                              <CDropdownItem
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#edit_leave"
                              >
                                <i className="fa-solid fa-pencil"></i> Edit
                              </CDropdownItem>
                              <CDropdownItem
                                href="#"
                                data-bs-toggle="modal"
                                data-bs-target="#delete_approve"
                              >
                                <i className="fa-regular fa-trash-can"></i> Delete
                              </CDropdownItem>
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
        </CCardBody>
      </CCard>
    </>
  )
}

export default LeavesPage
