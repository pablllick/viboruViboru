import Container from 'react-bootstrap/Container';
import { Outlet } from 'react-router-dom';
import Loader from './hoc/Loader';
import NavBar from './ui/NavBar';

export default function Layout({
  user,
  logoutHandler,
  filter,
  search,
  setSearch,
  setFilter,
}) {
  return (
    <Loader showSpinner={user.status === 'fetching'}>
      <Container>
        <NavBar
          user={user}
          logoutHandler={logoutHandler}
          filter={filter}
          search={search}
          setFilter={setFilter}
          setSearch={setSearch}
        />
        <Outlet />
      </Container>
    </Loader>
  );
}
