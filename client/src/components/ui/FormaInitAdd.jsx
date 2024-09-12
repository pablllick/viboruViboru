import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axiosInstance from '../api/axiosInstance';

function FormaInitAdd({ setInits }) {
  const addInitHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    console.log('--------------------------', formData);

    if (
      !formData.name ||
      !formData.motivation ||
      !formData.theme ||
      !formData.dateEnd ||
      !formData.level
    ) {
      return alert('Заполните все поля!');
    }
    axiosInstance
      .post('/inits', formData)
      .then(({ data }) => {
        setInits((prev) => [...prev, data]);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <Form onSubmit={addInitHandler}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" name="name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>motivation</Form.Label>
          <Form.Control
            type="text"
            placeholder="motivation"
            name="motivation"
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Theme</Form.Label>
        <Form.Control placeholder="Theme" name="theme" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>DateEnd</Form.Label>
        <Form.Control placeholder="DateEnd" name="dateEnd" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Level</Form.Label>
          <Form.Select name="level" defaultValue="Level...">
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
