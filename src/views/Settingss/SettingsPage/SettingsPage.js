import React, { useState } from 'react'
import './SettingsPage.scss'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CFormInput,
  CRow,
  CCol,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/react'

const RolesAndPermissions = () => {
  // Module access and permissions sample data
  const modules = ['Employee', 'Holidays', 'Leaves', 'Events', 'Chat', 'Jobs']
  const permissions = ['Read', 'Write', 'Create', 'Delete', 'Import', 'Export']

  // Initial roles list
  const [roles, setRoles] = useState(['Administrator', 'CEO', 'Manager'])

  // Modal state
  const [modalVisible, setModalVisible] = useState(false)
  const [newRole, setNewRole] = useState('')

  // Handle adding a new role
  const handleAddRole = () => {
    if (newRole.trim()) {
      setRoles([...roles, newRole.trim()])
      setNewRole('')
      setModalVisible(false)
    }
  }

  return (
    <CRow className="p-4">
      {/* Roles & Permissions on the left */}
      <CCol md={3}>
        <CCard>
          <CCardHeader>
            <div className="">
              <span className="span">Roles & Permissions</span>
              <CButton className="btns" onClick={() => setModalVisible(true)}>
                Add Role
              </CButton>
            </div>
          </CCardHeader>
          <CCardBody>
            <ul>
              {roles.map((role, index) => (
                <li key={index}>{role}</li>
              ))}
            </ul>
          </CCardBody>
        </CCard>
      </CCol>

      {/* Add Role Modal */}
      <CModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        className="modal-dialog-centered"
      >
        <CModalHeader onClose={() => setModalVisible(false)} className='modal-headerss'>Add New Role</CModalHeader>
        <CModalBody>
          <CFormInput
            type="text"
            placeholder="Enter role name"
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
            className='input'
          />
        </CModalBody>
        <CModalFooter>
          <CButton className="btn1" onClick={() => setModalVisible(false)}>
            Cancel
          </CButton>
          <CButton className="btn2" onClick={handleAddRole}>
            Add Role
          </CButton>
        </CModalFooter>
      </CModal>

      <CCol md={9}>
        <CCard>
          <CCardHeader className="font-2">Module Access & Permissions</CCardHeader>
          <CCardBody>
            <CTable bordered responsive>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell className="font-1">Module</CTableHeaderCell>
                  <CTableHeaderCell className="font-1">Access</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody className="body-font">
                {modules.map((module, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell>{module}</CTableDataCell>
                    <CTableDataCell>
                      <label className="toggles-switch">
                        <input type="checkbox" style={{display:'none'}} />
                        <span className="slider round"></span>
                      </label>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>

            <hr />
            <CCardHeader className="module-heading">Module Access & Permissions</CCardHeader>
            <CCardBody>
              <CTable bordered responsive>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell>Module</CTableHeaderCell>
                    {permissions.map((permission, index) => (
                      <CTableHeaderCell key={index}>{permission}</CTableHeaderCell>
                    ))}
                  </CTableRow>
                </CTableHead>
                <CTableBody className="body-font">
                  {modules.map((module, index) => (
                    <CTableRow key={index}>
                      <CTableHeaderCell>{module}</CTableHeaderCell>
                      {permissions.map((permission, idx) => (
                        <CTableDataCell key={idx}>
                          <label className="toggle-switch">
                            <input type="checkbox" style={{display:'none'}} />
                            <span className="slider round"></span>
                          </label>
                        </CTableDataCell>
                      ))}
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default RolesAndPermissions
