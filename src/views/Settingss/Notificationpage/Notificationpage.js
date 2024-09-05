import React from 'react';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CRow,
  CCol,
  CContainer
} from '@coreui/react';
import './Notificationpage.scss';

const NotificationsSettings = () => {
  const modules = ['Employee', 'Holidays', 'Leaves', 'Events', 'Chat', 'Jobs'];

  return (
    <CContainer fluid className="p-4">
      <CRow>
        <CCol md={12}>
          <CCard>
            <CCardHeader className='heading'>Notifications Settings</CCardHeader>
            <CCardBody>
              <CTable bordered responsive>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell className='text'>Module</CTableHeaderCell>
                    <CTableHeaderCell className='text'>Notification</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {modules.map((module, index) => (
                    <CTableRow key={index}>
                      <CTableDataCell>{module}</CTableDataCell>
                      <CTableDataCell>
                        <label className="toggle-switch">
                          <input type="checkbox" style={{display:'none'}} />
                          <span className="slider round"></span>
                        </label>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  );
};

export default NotificationsSettings;
