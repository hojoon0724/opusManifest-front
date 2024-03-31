import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from './App';
import Compositions from './pages/compositions';
import Dashboard from './pages/dashboard';
import compositionsLoader from './loaders';
import { createAction, deleteAction, updateAction } from './actions';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Compositions />} loader={compositionsLoader} />
      <Route path="dashboard" element={<Dashboard />} loader={compositionsLoader} />
      <Route path="/compositions" action={createAction} />
      <Route path="/compositions/:id" action={updateAction} />
      <Route path="/compositions/:id" action={deleteAction} />
    </Route>
  )
);

export default router;
