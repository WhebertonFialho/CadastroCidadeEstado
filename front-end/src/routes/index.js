import React from 'react';

const Dashboard = React.lazy(() => import('../views/dashboard'));
const Cidade = React.lazy(() => import('../views/cidade'));
const Estado = React.lazy(() => import('../views/estado'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/cidade', name: 'Cidade', element: Cidade },
  { path: '/estado', name: 'Estado', element: Estado }
]

export default routes