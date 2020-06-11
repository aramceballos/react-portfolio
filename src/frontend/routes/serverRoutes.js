import { Home } from '../pages/Home.jsx';
import { Projects } from '../pages/Projects';
import { Certificates } from '../pages/Certificates';
import { NotFound } from '../pages/NotFound';

const serverRoutes = () => [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    exact: true,
    path: '/projects',
    component: Projects,
  },
  {
    exact: true,
    path: '/register',
    component: Certificates,
  },
  {
    name: 'NotFound',
    component: NotFound,
  },
];

export default serverRoutes;
