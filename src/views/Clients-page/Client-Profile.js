import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ClientProfile = ({ clients }) => {
  const { id } = useParams();
  const client = clients.find(client => client.id === parseInt(id));

  if (!client) {
    return <div>Client not found</div>;
  }

  return (
    <Container>
      <Row className="mt-4">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={client.image} />
            <Card.Body>
              <Card.Title>{client.company}</Card.Title>
              <Card.Text>
                {client.name}<br />
                {client.role}<br />
                {/* Add more client details here as needed */}
              </Card.Text>
              <Button variant="primary">Send Message</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          {/* Add detailed information about the client here */}
          <h2>{client.name}</h2>
          <p><strong>Role:</strong> {client.role}</p>
          <p><strong>Company:</strong> {client.company}</p>
          {/* Add more details like phone, email, address, etc. */}
        </Col>
      </Row>
    </Container>
  );
};

export default ClientProfile;
