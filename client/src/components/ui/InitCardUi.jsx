import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function InitCardUi({ init }) {
  const navigate = useNavigate();

  return (
    <Card>
      <Card.Header>
        <Card.Title style={{ marginTop: '2.5%' }}>
          <p>{init.name}</p>
        </Card.Title>
      </Card.Header>
      <Card.Body>
        <p>Уровень: {init.level}</p>

        <Card.Text>
          {init.motivation.slice(0, 40) +
            (init.motivation.length > 40 ? '...' : '')}
        </Card.Text>
        <Button
          onClick={() => {
            navigate(`/inits/${init.id}`);
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
