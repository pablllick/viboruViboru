import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import axiosInstance from '../api/axiosInstance';

function FormaUpdateUser({ setUser, user,setShow,show  }) {
  const updateHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));
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
        setUser({ status: 'logged', data: data.user });
      })
      .catch((error) => {
        alert(error);
      });
      setShow(!show);
  };


  return (
    <>
      <Form onSubmit={updateHandler}>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1" style={{ width: '15%' }}>
            Имя
          </InputGroup.Text>
          <Form.Control
            placeholder="Введите ваше имя"
            defaultValue={user.data.name}
            name="name"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1" style={{ width: '15%' }}>
            Фамилия
          </InputGroup.Text>
          <Form.Control
            defaultValue={user.data.lastName}
            name="lastName"
            placeholder="Введите вашу Фамилию"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1" style={{ width: '15%' }}>
            Отчество
          </InputGroup.Text>
          <Form.Control
            defaultValue={user.data.surname}
            name="surname"
            placeholder="Введите ваше Отчество"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1" style={{ width: '15%' }}>
            Федеральный Округ
          </InputGroup.Text>
          <Form.Control
            placeholder="Введите ваш Федеральный округ"
            aria-label="Username"
            aria-describedby="basic-addon1"
            defaultValue={user.data.fedDistrict}
            name="fedDistrict"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1" style={{ width: '15%' }}>
            Регион
          </InputGroup.Text>
          <Form.Control
            defaultValue={user.data.region}
            name="region"
            placeholder="Введите ваш Регион"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1" style={{ width: '15%' }}>
            Муниципалитет
          </InputGroup.Text>
          <Form.Control
            defaultValue={user.data.municipality}
            name="municipality"
            placeholder="Введите ваш Муниципалитет"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
        <Button variant="outline-success" type="submit" >
          Подтвердить
        </Button>{' '}
      </Form>
    </>
  );
}

export default FormaUpdateUser;
