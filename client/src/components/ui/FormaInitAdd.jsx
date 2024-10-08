import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axiosInstance from '../api/axiosInstance';
import { useNavigate } from 'react-router-dom';

function FormaInitAdd({ setInits }) {
  const navigate = useNavigate();

  const addInitHandler = (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));

    if (
      !formData.name ||
      !formData.motivation ||
      !formData.theme ||
      !formData.dateEnd ||
      !formData.level ||
      !formData.file
    ) {
      return alert('Заполните все поля!');
    }

    const trueFormData = new FormData();

    trueFormData.append('name', formData.name);
    trueFormData.append('motivation', formData.motivation);
    trueFormData.append('theme', formData.theme);
    trueFormData.append('dateEnd', formData.dateEnd);
    trueFormData.append('level', formData.level);
    trueFormData.append('file', formData.file);

    console.log('--------------------------', Object.fromEntries(trueFormData));
    axiosInstance
      .post('/inits', trueFormData, {
        headers: { 'Content-type': 'multipart/formdata' },
      })
      .then(({ data }) => {
        setInits((prev) => [...prev, data]);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });

    navigate('/');
  };

  return (
    <Form onSubmit={addInitHandler}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Название</Form.Label>
          <Form.Control type="text" placeholder="Название" name="name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Мотивация</Form.Label>
          <Form.Control type="text" placeholder="Мотивация" name="motivation" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Тема</Form.Label>
        <Form.Control placeholder="Тема" name="theme" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Дата Окончания</Form.Label>
        <Form.Control placeholder="DateEnd" name="dateEnd" type="date" />
      </Form.Group>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Уровень</Form.Label>
          <Form.Select name="level" defaultValue="Level...">
            <option>Уровень...</option>
            <option>Федеральный Округ</option>
            <option>Регион</option>
            <option>Муниципалитет</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control name="file" type="file" placeholder="Enter text" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Подтвердить
      </Button>
    </Form>
  );
}

export default FormaInitAdd;
