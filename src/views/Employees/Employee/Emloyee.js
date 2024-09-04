import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup, Modal } from 'react-bootstrap';
import "./Emloyee.scss";

const employees = [
  { id: 1, name: 'John Doe', role: 'Web Designer', image: 'path_to_image' },
  { id: 2, name: 'Richard Miles', role: 'Web Developer', image: 'path_to_image' },
  { id: 3, name: 'John Smith', role: 'Android Developer', image: 'path_to_image' },
  { id: 4, name: 'Mike Litorus', role: 'iOS Developer', image: 'path_to_image' },
  { id: 5, name: 'Wilmer Deluna', role: 'Team Leader', image: 'path_to_image' },
  { id: 6, name: 'Jeffrey Warden', role: 'Web Developer', image: 'path_to_image' },
  { id: 7, name: 'Bernardo Galaviz', role: 'Web Developer', image: 'path_to_image' },
  { id: 8, name: 'Lesley Grauer', role: 'Team Leader', image: 'path_to_image' },
];

const EmployeeCard = ({ employee }) => (
  <Col md={6} lg={4} xl={3} className="mb-4">
    <Card>
      <Card.Img variant="top" src={employee.image} />
      <Card.Body className="text-center">
        <Card.Title>{employee.name}</Card.Title>
        <Card.Text>{employee.role}</Card.Text>
        <Button variant="outline-secondary">Details</Button>
      </Card.Body>
    </Card>
  </Col>
);

const Employees = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <Container fluid>
      <Row className="mb-3">
        <Col md={4}>
          <InputGroup>
            <Form.Control placeholder="Employee ID" />
          </InputGroup>
        </Col>
        <Col md={4}>
          <Form.Control placeholder="Employee Name" />
        </Col>
        <Col md={4}>
          <Form.Select>
            <option>Select Designation</option>
            {/* Add more designations here */}
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="text-end mb-3">
          <Button variant="success">Search</Button>
          <Button variant="warning" className="ms-2" onClick={handleShow}>
            Add Employee
          </Button>
        </Col>
      </Row>
      <Row>
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </Row>

      {/* Add Employee Modal */}
      <Modal show={showModal} onHide={handleClose} size="lg" className="add-employee-modal">
        <Modal.Header closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter first name" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter last name" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter username" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter password" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formConfirmPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Confirm password" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formEmployeeID">
                  <Form.Label>Employee ID</Form.Label>
                  <Form.Control type="text" placeholder="Enter employee ID" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formJoiningDate">
                  <Form.Label>Joining Date</Form.Label>
                  <Form.Control type="date" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="text" placeholder="Enter phone number" />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formCompany">
                  <Form.Label>Company</Form.Label>
                  <Form.Control type="text" placeholder="Enter company name" />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group controlId="formDepartment">
                  <Form.Label>Department</Form.Label>
                  <Form.Control as="select">
                    <option>Select Department</option>
                    {/* Add department options here */}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="formDesignation">
                  <Form.Label>Designation</Form.Label>
                  <Form.Control as="select">
                    <option>Select Designation</option>
                    {/* Add designation options here */}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            {/* Add Module Permissions as needed */}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Employees;
