import Header from 'components/Header/Header';
import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <Header>
        <Navigate />
      </Header>
      <main>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

export default Layout;
