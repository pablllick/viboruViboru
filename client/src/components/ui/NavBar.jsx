import React from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import FilterSearchUi from './FilterSearchUi';

export default function NavBar({
  user,
  logoutHandler,
  filter,
  search,
  setFilter,
  setSearch,
}) {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Nav className="me-auto">
          <NavLink to="/" className="nav-link">
            Главная
          </NavLink>

          {user.data && (
            <>
              {user.data.fedDistrict &&
                user.data.municipality &&
                user.data.region && (
                  <NavLink to="/inits/add" className="nav-link">
                    Добавить инициативу
                  </NavLink>
                )}

              <FilterSearchUi
                filter={filter}
                search={search}
                setSearch={setSearch}
                setFilter={setFilter}
              />
            </>
          )}
        </Nav>
        <Nav>
          {!user.data && (
            <>
              <NavLink to="/account/login" className="nav-link">
                Войти
              </NavLink>
              <NavLink to="/account/new" className="nav-link">
                Регистрация
              </NavLink>
              <span className="nav-link">|</span>
            </>
          )}
          <NavLink
            style={{ textDecoration: 'none' }}
            to={`/users/${user?.data?.id}`}
          >
            <span className="nav-link">
              {user.data ? user.data.name : 'Гость'}
            </span>
          </NavLink>
          {user.data && (
            <span className="nav-link">
              <Button
                onClick={logoutHandler}
                variant="outline-danger"
                size="sm"
              >
                Выйти
              </Button>
            </span>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
