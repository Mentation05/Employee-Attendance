import React, { useState } from 'react'
import './AttendenceEmployee.scss'
import {
  CRow,
  CCol,
  CCard,
  CCardBody,
  CButton,
  CProgress,
  CProgressBar,
  CFormSelect,
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilClock } from '@coreui/icons'
import DatePicker from 'react-datepicker'

export default function AttendenceEmployee() {
  const [startDate, setStartDate] = useState(new Date())

  const attendanceData = [
    {
      date: '19 Feb 2019',
      punchIn: '10 AM',
      punchOut: '7 PM',
      production: '9 hrs',
      breakTime: '1 hrs',
      overtime: '0',
    },
    {
      date: '20 Feb 2019',
      punchIn: '10 AM',
      punchOut: '7 PM',
      production: '9 hrs',
      breakTime: '1 hrs',
      overtime: '0',
    },
  ]

  return (
    <>
      <div className="employee-attendence">
        <CRow>
          <CCol md={4}>
            <CCard className="punch-status">
              <CCardBody className="card-body">
                <h5 className="card-title">
                  Timesheet <small className="text-muted">11 Mar 2019</small>
                </h5>
                <div className="punch-det">
                  <h6>Punch In at</h6>
                  <p>Wed, 11th Mar 2019 10.00 AM</p>
                </div>
                <div className="punch-info">
                  <div className="punch-hours">
                    <span>3.45 hrs</span>
                  </div>
                </div>
                <div className="punch-btn-section">
                  <CButton className="punch-btn">Punch Out</CButton>
                </div>
                <div className="statistics">
                  <CRow>
                    <CCol md={6} xs={6} className="text-center">
                      <div className="stats-box">
                        <p>Break</p>
                        <h6>1.21 hrs</h6>
                      </div>
                    </CCol>
                    <CCol md={6} xs={6} className="text-center">
                      <div className="stats-box">
                        <p>Overtime</p>
                        <h6>3 hrs</h6>
                      </div>
                    </CCol>
                  </CRow>
                </div>
              </CCardBody>
            </CCard>
          </CCol>

          <CCol md={4}>
            <CCard className="att-statistics">
              <CCardBody>
                <h5 className="card-title">Statistics</h5>
                <div className="stats-list">
                  <div className="stats-info">
                    <p>
                      Today
                      <strong>
                        3.45 <small>/ 8 hrs</small>
                      </strong>
                    </p>
                    <CProgress className="lines">
                      <CProgressBar className="line" color="primary" value={31} />
                    </CProgress>
                  </div>
                  <div className="stats-info">
                    <p>
                      This Week
                      <strong>
                        28 <small>/ 40 hrs</small>
                      </strong>
                    </p>
                    <CProgress className="lines">
                      <CProgressBar className="line" color="warning" value={41} />
                    </CProgress>
                  </div>
                  <div className="stats-info">
                    <p>
                      This Month
                      <strong>
                        90 <small>/ 160 hrs</small>
                      </strong>
                    </p>
                    <CProgress className="lines">
                      <CProgressBar className="line" color="success" value={62} />
                    </CProgress>
                  </div>
                  <div className="stats-info">
                    <p>
                      Remaining
                      <strong>
                        90 <small>/ 160 hrs</small>
                      </strong>
                    </p>
                    <CProgress className="lines">
                      <CProgressBar className="line" color="danger" value={62} />
                    </CProgress>
                  </div>
                  <div className="stats-info">
                    <p>
                      Overtime <strong>4</strong>
                    </p>
                    <CProgress className="lines">
                      <CProgressBar className="line" color="info" value={22} />
                    </CProgress>
                  </div>
                </div>
              </CCardBody>
            </CCard>
          </CCol>

          <CCol md={4}>
            <CCard className="recent-activity">
              <CCardBody>
                <h5 className="card-title">Today Activity</h5>
                <ul className="res-activity-list">
                  <li>
                    <p className="mb-0">Punch In at</p>
                    <p className="res-activity-time">
                      <CIcon icon={cilClock} /> 10.00 AM
                    </p>
                  </li>
                  <li>
                    <p className="mb-0">Punch Out at</p>
                    <p className="res-activity-time">
                      <CIcon icon={cilClock} /> 11.00 AM
                    </p>
                  </li>
                  <li>
                    <p className="mb-0">Punch In at</p>
                    <p className="res-activity-time">
                      <CIcon icon={cilClock} /> 11.15 AM
                    </p>
                  </li>
                  <li>
                    <p className="mb-0">Punch Out at</p>
                    <p className="res-activity-time">
                      <CIcon icon={cilClock} /> 1.30 PM
                    </p>
                  </li>
                  <li>
                    <p className="mb-0">Punch In at</p>
                    <p className="res-activity-time">
                      <CIcon icon={cilClock} /> 2.00 PM
                    </p>
                  </li>
                  <li>
                    <p className="mb-0">Punch In at</p>
                    <p className="res-activity-time">
                      <CIcon icon={cilClock} /> 2.00 PM
                    </p>
                  </li>
                </ul>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>

        <CRow className="filter-row">
          <CCol sm={3}>
            <div className="input-block mb-3 form-focus">
              <div className="cal-icon">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  dateFormat="MM/dd/yyyy"
                  className="form-control"
                />
              </div>
              <label className="focus-label">Date</label>
            </div>
          </CCol>
          <CCol sm={3}>
            <div className="input-block mb-3 form-focus select-focus">
              <CFormSelect className="floating">
                <option>-</option>
                <option>Jan</option>
                <option>Feb</option>
                <option>Mar</option>
                <option>Apr</option>
                <option>May</option>
                <option>Jun</option>
                <option>Jul</option>
                <option>Aug</option>
                <option>Sep</option>
                <option>Oct</option>
                <option>Nov</option>
                <option>Dec</option>
              </CFormSelect>
              <label className="focus-label">Select Month</label>
            </div>
          </CCol>
          <CCol sm={3}>
            <div className="input-block mb-3 form-focus select-focus">
              <CFormSelect className="floating">
                <option>-</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
                <option>2015</option>
              </CFormSelect>
              <label className="focus-label">Select Year</label>
            </div>
          </CCol>
          <CCol sm={3}>
            <div className="input-block mb-3 form-focus select-focus">
              <CButton
                className="form-control btn-select"
                onClick={() => {
                  // Handle button click here
                }}
              >
                Search
              </CButton>
            </div>
          </CCol>
        </CRow>

        <CRow className="mt-4">
          <CCol>
            <CCard>
              <CCardBody>
                <CTable className='table-container' hover>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell>#</CTableHeaderCell>
                      <CTableHeaderCell>Date</CTableHeaderCell>
                      <CTableHeaderCell>Punch In</CTableHeaderCell>
                      <CTableHeaderCell>Punch Out</CTableHeaderCell>
                      <CTableHeaderCell>Production</CTableHeaderCell>
                      <CTableHeaderCell>Break</CTableHeaderCell>
                      <CTableHeaderCell>Overtime</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {attendanceData.map((entry, index) => (
                      <CTableRow key={index}>
                        <CTableDataCell>{index + 1}</CTableDataCell>
                        <CTableDataCell>{entry.date}</CTableDataCell>
                        <CTableDataCell>{entry.punchIn}</CTableDataCell>
                        <CTableDataCell>{entry.punchOut}</CTableDataCell>
                        <CTableDataCell>{entry.production}</CTableDataCell>
                        <CTableDataCell>{entry.breakTime}</CTableDataCell>
                        <CTableDataCell>{entry.overtime}</CTableDataCell>
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </div>
    </>
  )
}
