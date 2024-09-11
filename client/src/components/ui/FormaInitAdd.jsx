import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

function FormaInitAdd() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>motivation</Form.Label>
          <Form.Control type="password" placeholder="motivation" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Theme</Form.Label>
        <Form.Control placeholder="Theme" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>DateEnd</Form.Label>
        <Form.Control placeholder="DateEnd" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Level</Form.Label>
          <Form.Select defaultValue="Level...">
            <option>Level...</option>
            <option>FedDistrict</option>
            <option>Region</option>
            <option>Municipality</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormaInitAdd;
