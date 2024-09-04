import React, { useState } from 'react';
import "./Departments.scss";
import {
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CForm,
  CFormInput,
  CRow,
  CCol,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
} from '@coreui/react';

const DepartmentManagement = () => {
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [departmentName, setDepartmentName] = useState('');
  const [selectedDepartmentId, setSelectedDepartmentId] = useState(null);

  const departments = [
    { id: 1, name: 'Web Development' },
    { id: 2, name: 'Application Development' },
    { id: 3, name: 'IT Management' },
    { id: 4, name: 'Accounts Management' },
    { id: 5, name: 'Support Management' },
    { id: 6, name: 'Marketing' },
  ];

  const handleEdit = (id) => {
    const department = departments.find((dept) => dept.id === id);
    setSelectedDepartmentId(id);
    setDepartmentName(department.name);
    setEditModalVisible(true);
  };

  const handleEditSave = () => {
    // Save changes logic here
    setEditModalVisible(false);
  };

  const handleDelete = (id) => {
    setSelectedDepartmentId(id);
    setDeleteModalVisible(true);
  };

  const handleDeleteConfirm = () => {
    // Delete department logic here
    setDeleteModalVisible(false);
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Department Management</h2>
        <CButton className="add-btn" onClick={() => setEditModalVisible(true)}>
          Add Department
        </CButton>
      </div>
      <CTable hover responsive className="table table-striped">
        <CTableHead>
          <CTableRow className='tablerow'>
            <CTableHeaderCell>#</CTableHeaderCell>
            <CTableHeaderCell>Department Name</CTableHeaderCell>
            <CTableHeaderCell>Action</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {departments.map((dept, index) => (
            <CTableRow key={dept.id} className='tabledata'>
              <CTableDataCell>{index + 1}</CTableDataCell>
              <CTableDataCell>{dept.name}</CTableDataCell>
              <CTableDataCell>
                <CButton className='Action-edit' size="sm" onClick={() => handleEdit(dept.id)}>
                  Edit
                </CButton>{' '}
                <CButton className='Action-delete' size="sm" onClick={() => handleDelete(dept.id)}>
                  Delete
                </CButton>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>

      {/* Edit Modal */}
      <CModal
        alignment="center"
        visible={editModalVisible}
        onClose={() => setEditModalVisible(false)}
        aria-labelledby="EditDepartmentModalTitle"
        className='editmodel'
      >
        <CModalHeader className='title'>
          <CModalTitle id="EditDepartmentModalTitle">
            {selectedDepartmentId ? 'Edit Department' : 'Add Department'}
          </CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <CRow className="mb-3">
              <CCol xs={12}>
                <CFormInput
                  type="text"
                  placeholder="Department Name"
                  value={departmentName}
                  onChange={(e) => setDepartmentName(e.target.value)}
                  className='input'
                />
              </CCol>
            </CRow>
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton className="cancle" onClick={() => setEditModalVisible(false)}>
            Cancel
          </CButton>
          <CButton className="delete" onClick={handleEditSave}>
            Save changes
          </CButton>
        </CModalFooter>
      </CModal>

      {/* Delete Confirmation Modal */}
      <CModal
        alignment="center"
        visible={deleteModalVisible}
        onClose={() => setDeleteModalVisible(false)}
        aria-labelledby="DeleteDepartmentModalTitle"
        className='deleteModal'
      >
        <CModalHeader className='title'>
          <CModalTitle id="DeleteDepartmentModalTitle">Confirm Deletion</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <p className="text">Are you sure you want to delete this department?</p>
        </CModalBody>
        <CModalFooter>
          <CButton className="cancle" onClick={() => setDeleteModalVisible(false)}>
            Cancel
          </CButton>
          <CButton className="delete" onClick={handleDeleteConfirm}>
            Delete
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};

export default DepartmentManagement;
