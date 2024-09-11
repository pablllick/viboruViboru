import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function InitCardUi({ init }) {
  const navigate = useNavigate();

  return (
    <Card>
      <Card.Header>{init.name}</Card.Header>
      <Card.Body>
        <Card.Title>{init.level}</Card.Title>
        <Card.Text>
          {init.motivation.slice(0, 40) +
            (init.motivation.length > 40 ? '...' : '')}
        </Card.Text>
        <Button
          onClick={() => {
            navigate(`/${init.id}`);
          }}
          variant="primary"
        >
          Узнать больше
        </Button>
      </Card.Body>
    </Card>
  );
}

export default InitCardUi;
