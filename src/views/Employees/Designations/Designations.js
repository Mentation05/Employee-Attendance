import React, { useState } from 'react';
import './Designations.scss';
import {
  CContainer,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardTitle,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CForm,
  CFormInput,
  CFormSelect,
  CTable,
  CTableHead,
  CTableBody,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CPagination,
  CPaginationItem,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from '@coreui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const employees = [
  { id: 1, designation: 'Web Designer', department: 'Web Development' },
  { id: 2, designation: 'Web Developer', department: 'Web Development' },
  { id: 3, designation: 'Android Developer', department: 'Application Development' },
  { id: 4, designation: 'IOS Developer', department: 'Application Development' },
  { id: 5, designation: 'UI Designer', department: 'Application Development' },
  { id: 6, designation: 'UX Designer', department: 'Application Development' },
  { id: 7, designation: 'IT Technician', department: 'Application Development' },
  { id: 8, designation: 'Product Manager', department: 'Application Development' },
  { id: 9, designation: 'SEO Analyst', department: 'Application Development' },
  { id: 10, designation: 'Front End Designer', department: 'Application Development' },
  { id: 11, designation: 'Backend Developer', department: 'Web Development' },
  { id: 12, designation: 'Full Stack Developer', department: 'Web Development' },
  { id: 13, designation: 'Graphic Designer', department: 'Marketing' },
  { id: 14, designation: 'Content Writer', department: 'Marketing' },
  { id: 15, designation: 'Social Media Manager', department: 'Marketing' },
  { id: 16, designation: 'Digital Marketing Specialist', department: 'Marketing' },
  { id: 17, designation: 'Sales Executive', department: 'Sales' },
  { id: 18, designation: 'Customer Support', department: 'Support' },
  { id: 19, designation: 'Technical Support Specialist', department: 'Support' },
  { id: 20, designation: 'HR Manager', department: 'HR' },
  { id: 21, designation: 'Recruitment Specialist', department: 'HR' },
  { id: 22, designation: 'Office Manager', department: 'Administration' },
  { id: 23, designation: 'Administrative Assistant', department: 'Administration' },
  { id: 24, designation: 'Operations Manager', department: 'Operations' },
  { id: 25, designation: 'Project Manager', department: 'Operations' },
  { id: 26, designation: 'Business Analyst', department: 'Business' },
  { id: 27, designation: 'Finance Manager', department: 'Finance' },
  { id: 28, designation: 'Accountant', department: 'Finance' },
  { id: 29, designation: 'Data Analyst', department: 'Data Science' },
  { id: 30, designation: 'Data Scientist', department: 'Data Science' },
  { id: 31, designation: 'Software Engineer', department: 'Engineering' },
  { id: 32, designation: 'System Architect', department: 'Engineering' },
  { id: 33, designation: 'DevOps Engineer', department: 'Engineering' },
  { id: 34, designation: 'QA Engineer', department: 'Quality Assurance' },
  { id: 35, designation: 'Security Analyst', department: 'Security' },
  { id: 36, designation: 'Network Engineer', department: 'Network' },
  { id: 37, designation: 'IT Support', department: 'IT' },
  { id: 38, designation: 'Help Desk Technician', department: 'IT' },
  { id: 39, designation: 'Technical Writer', department: 'Documentation' },
  { id: 40, designation: 'Customer Success Manager', department: 'Customer Success' },
  { id: 41, designation: 'Product Designer', department: 'Design' },
  { id: 42, designation: 'UX Researcher', department: 'Design' },
  { id: 43, designation: 'UI Developer', department: 'Web Development' },
  { id: 44, designation: 'Application Support Analyst', department: 'Support' },
  { id: 45, designation: 'Database Administrator', department: 'Database' },
  { id: 46, designation: 'Business Development Manager', department: 'Business' },
  { id: 47, designation: 'Marketing Coordinator', department: 'Marketing' },
  { id: 48, designation: 'Sales Manager', department: 'Sales' },
  { id: 49, designation: 'Technical Project Manager', department: 'Project Management' },
  { id: 50, designation: 'IT Director', department: 'IT' },
];

const Departments = () => {
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [visibleDelete, setVisibleDelete] = useState(false);
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(employees.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleEdit = () => {
    setVisibleEdit(true);
  };

  const handleDelete = () => {
    setVisibleDelete(true);
  };

  const handleCloseEdit = () => setVisibleEdit(false);
  const handleCloseDelete = () => setVisibleDelete(false);
  const handleCloseAdd = () => setVisibleAdd(false);

  const paginatedEmployees = employees.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <CContainer fluid>
      <CRow className="mb-3">
        <CCol xs={12} className="text-end">
          <CButton className="add-btn" onClick={() => setVisibleAdd(true)}>
            Add Designation
          </CButton>
        </CCol>
      </CRow>
      <CRow>
        <CCol xs={12}>
          <CTable hover>
            <CTableHead>
              <CTableRow className="tablerow">
                <CTableHeaderCell>#</CTableHeaderCell>
                <CTableHeaderCell>Designation</CTableHeaderCell>
                <CTableHeaderCell>Department</CTableHeaderCell>
                <CTableHeaderCell>Action</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {paginatedEmployees.map((employee) => (
                <CTableRow key={employee.id} className="tabledata">
                  <CTableDataCell>{employee.id}</CTableDataCell>
                  <CTableDataCell>{employee.designation}</CTableDataCell>
                  <CTableDataCell>{employee.department}</CTableDataCell>
                  <CTableDataCell>
                    <CDropdown>
                      <CDropdownToggle color="warning" className="p-1">
                      </CDropdownToggle>
                      <CDropdownMenu className='action-menus p-0'>
                        <CDropdownItem
                          onClick={handleEdit}
                          className='Action-edit'
                        >
                          <FontAwesomeIcon icon={faEdit} className="me-2 " size='sm' /> Edit
                        </CDropdownItem>
                        <CDropdownItem onClick={handleDelete} className='Action-delete'>
                          <FontAwesomeIcon icon={faTrash} className="me-2" size='sm' /> Delete
                        </CDropdownItem>
                      </CDropdownMenu>
                    </CDropdown>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
          <CPagination aria-label="Page navigation">
            <CPaginationItem
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="back"
            >
              Previous
            </CPaginationItem>
            {[...Array(totalPages)].map((_, i) => (
              <CPaginationItem
                key={i + 1}
                active={i + 1 === currentPage}
                onClick={() => handlePageChange(i + 1)}
                className="number"
              >
                {i + 1}
              </CPaginationItem>
            ))}
            <CPaginationItem
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="next"
            >
              Next
            </CPaginationItem>
          </CPagination>
        </CCol>
      </CRow>

      {/* Add Department Modal */}
      <CModal
        alignment="center"
        visible={visibleAdd}
        onClose={handleCloseAdd}
        aria-labelledby="AddDepartmentTitle"
      >
        <CModalHeader>
          <CModalTitle id="AddDepartmentTitle">Add New Department</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <CFormInput className="input mb-3" type="text" placeholder="Designation Name" />
            <CFormInput className="input" type="text" placeholder="Department " />
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton className="close" onClick={handleCloseAdd}>
            Close
          </CButton>
          <CButton className="save">Save changes</CButton>
        </CModalFooter>
      </CModal>

      {/* Edit Department Modal */}
      <CModal
        alignment="center"
        visible={visibleEdit}
        onClose={handleCloseEdit}
        aria-labelledby="EditDepartmentTitle"
        className="editmodel"
      >
        <CModalHeader className="title">
          <CModalTitle id="EditDepartmentTitle">Edit Designation</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CForm>
            <CFormInput type="text" placeholder="Designation Name" className="mb-3 input" />
            <CFormInput className="input" type="text" placeholder="Department" />
          </CForm>
        </CModalBody>
        <CModalFooter>
          <CButton className="cancle" onClick={handleCloseEdit}>
            Close
          </CButton>
          <CButton className="delete">Save changes</CButton>
        </CModalFooter>
      </CModal>

      {/* Delete Department Modal */}
      <CModal
        alignment="center"
        visible={visibleDelete}
        onClose={handleCloseDelete}
        aria-labelledby="DeleteDepartmentTitle"
        className="deleteModal"
      >
        <CModalHeader className="title">
          <CModalTitle id="DeleteDepartmentTitle">Delete Designation</CModalTitle>
        </CModalHeader>
        <CModalBody></CModalBody>
        <p className="text">Are you sure you want to delete this Designation?</p>
        <CModalFooter>
          <CButton className="cancle" onClick={handleCloseDelete}>
            Cancel
          </CButton>
          <CButton className="delete" onClick={handleDelete}>
            Delete
          </CButton>
        </CModalFooter>
      </CModal>
    </CContainer>
  );
};

export default Departments;
