import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from 'react-router-dom';
import ArrowComponent from './practice/arrowr_com';

let router = createBrowserRouter([{ path: '/arrow', element: <ArrowComponent /> }]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
