import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import axiosInstance from '../api/axiosInstance';

function FormaUpdateUser({ setUser, user }) {
  const updateHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
    console.log('--------------------------', formData);

    if (
      !formData.name ||
      !formData.lastName ||
      !formData.surname ||
      !formData.fedDistrict ||
      !formData.region ||
      !formData.municipality
    ) {
      return alert('Заполните все поля!');
    }
    axiosInstance
      .patch('/users', formData)
      .then(({ data }) => {
        setUser({ status: 'logged', data });
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <>
      <Form onSubmit={updateHandler}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1" style={{ width: '10%' }}>
            Name
          </InputGroup.Text>
          <Form.Control
            placeholder="Name"
            defaultValue={user.name}
            name="name"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1" style={{ width: '10%' }}>
            lastName
          </InputGroup.Text>
          <Form.Control
            defaultValue={user.lastName}
            name="lastName"
            placeholder="lastName"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1" style={{ width: '10%' }}>
            surname
          </InputGroup.Text>
          <Form.Control
            defaultValue={user.surname}
            name="surname"
            placeholder="surname"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1" style={{ width: '10%' }}>
            fedDistrict
          </InputGroup.Text>
          <Form.Control
            placeholder="fedDistrict"
            aria-label="Username"
            aria-describedby="basic-addon1"
            defaultValue={user.fedDistrict}
            name="fedDistrict"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1" style={{ width: '10%' }}>
            region
          </InputGroup.Text>
          <Form.Control
            defaultValue={user.region}
            name="region"
            placeholder="region"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1" style={{ width: '10%' }}>
            municipality
          </InputGroup.Text>
          <Form.Control
            defaultValue={user.municipality}
            name="municipality"
            placeholder="municipality"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <Button variant="outline-success" type="submit">
          Success
        </Button>{' '}
      </Form>
    </>
  );
}

export default FormaUpdateUser;
