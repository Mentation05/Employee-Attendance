import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { Container, Row, Col, Card, Button, Form, InputGroup, Modal } from 'react-bootstrap';
import './Clients.scss';

const clients = [
  { id: 1, name: 'Barry Cuda', role: 'CEO', company: 'Global Technologies', image: 'https://images.unsplash.com/photo-1724709972210-4beb408de580?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',  },
  { id: 2, name: 'Tressa Wexler', role: 'Manager', company: 'Delta Infotech', image: 'https://images.unsplash.com/photo-1633242389742-c16e2d0a5bfb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',  },
  { id: 3, name: 'Ruby Bartlett', role: 'CEO', company: 'Cream Inc', image: 'https://images.unsplash.com/photo-1575862469264-0a2e53494cdf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8',  },
  { id: 4, name: 'Misty Tison', role: 'CEO', company: 'Wellware Company', image:'https://images.unsplash.com/photo-1593250996075-20ca77b2e13f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',  },
  { id: 5, name: 'Daniel Deacon', role: 'CEO', company: 'Mustang Technologies', image: 'https://images.unsplash.com/photo-1592979073287-84efcc0c9078?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D',},
  { id: 6, name: 'Walter Weaver', role: 'CEO', company: 'International Software Inc', image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D',},
  { id: 7, name: 'Amanda Warren', role: 'CEO', company: 'Mercury Software Inc', image: 'https://images.unsplash.com/photo-1724709972210-4beb408de580?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',},
  { id: 8, name: 'Betty Carlson', role: 'CEO', company: 'Carlson Tech', image: 'https://images.unsplash.com/photo-1633242389742-c16e2d0a5bfb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',  },
];

const ClientCard = ({ client }) => (
  <Col md={6} lg={4} xl={3} className="mb-4">
    <Card className="client-card">
      <Card.Img variant="top" src={client.image} className="client-img" />
      <Card.Body className="text-center">
        <Card.Title>{client.company}</Card.Title>
        <Card.Text>{client.name}<br />{client.role}</Card.Text>
        <Button variant="outline-primary" className="me-2">Message</Button>
        <Link to={`/profile/${client.id}`}>
          <Button variant="outline-secondary">View Profile</Button>
        </Link>
      </Card.Body>
    </Card>
  </Col>
);
const Clients = () => {
  const [showModal, setShowModal] = useState(false);
  const [newClient, setNewClient] = useState({
    name: '',
    role: '',
    company: '',
    image: ''
  });

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewClient({ ...newClient, [name]: value });
  };
  const handleSubmit = () => {
    // Logic to add the client to the list
    setShowModal(false);
  };

  return (
    <Container fluid className="clients-page">
      <Row className="mb-3">
        <Col md={4}>
          <InputGroup>
            <Form.Control placeholder="Client ID" />
          </InputGroup>
        </Col>
        <Col md={4}>
          <Form.Control placeholder="Client Name" />
        </Col>
        <Col md={4}>
          <Form.Select>
            <option>Select Company</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
            <option>D</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="text-end mb-3">
          <Button variant="success">Search</Button>
          <Button variant="warning" className="ms-2" onClick={handleShow}>Add Client</Button>
        </Col>
      </Row>
      <Row>
        {clients.map((client) => (
          <ClientCard key={client.id} client={client} />
        ))}
      </Row>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Client Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter client name"
                name="name"
                value={newClient.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Role</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter role"
                name="role"
                value={newClient.role}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter company name"
                name="company"
                value={newClient.company}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image URL"
                name="image"
                value={newClient.image}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Clients;
