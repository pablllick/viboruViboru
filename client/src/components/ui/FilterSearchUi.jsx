import React, { useState } from 'react';
import { Button, Dropdown } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

export default function FilterSearchUi({
  search,
  filter,
  setFilter,
  setSearch,
  SubmitSearch,
}) {

  const [tempSearch, setTempSearch] = useState('');
  const clickFilterHadler = (e) => {
    console.log(e.currentTarget.dataset.value);

    setFilter(e.currentTarget.dataset.value);
  };
  return (
    <div style={{ display: 'flex', gap: 10, marginTop: 2 }}>
      <Dropdown>
        <Dropdown.Toggle id="dropdown-basic">
          Фильтр уровня инициативы
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item data-value="Федеральный" onClick={clickFilterHadler}>
            Федеральный
          </Dropdown.Item>
          <Dropdown.Item data-value="Муниципальный" onClick={clickFilterHadler}>
            Муниципальный
          </Dropdown.Item>
          <Dropdown.Item data-value="Региональный" onClick={clickFilterHadler}>
            Региональный
          </Dropdown.Item>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              data-value=""
              onClick={clickFilterHadler}
              style={{ height: 37, width: 130 }}
            >
              Очистить
            </Button>
          </div>
        </Dropdown.Menu>
      </Dropdown>
      <Form.Group
        className="mb-3"
        onSubmit={SubmitSearch}
        controlId="exampleForm.ControlInput1"
      >
        <Form.Control
          value={tempSearch}
          type="text"
          onChange={(e) => setTempSearch(e.target.value)}
          placeholder="Поиск по названию"
        />
      </Form.Group>
      <Button style={{ height: 37 }} onClick={() => {setSearch(tempSearch)}}>
        Поиск
      </Button>
    </div>
  );
}
