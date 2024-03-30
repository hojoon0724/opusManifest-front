import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import App from './App';
import Compositions from './pages/compositions';
import compositionsLoader from './loaders';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="compositions" element={<Compositions />} loader={compositionsLoader} />
    </Route>
  )
);

export default router;
