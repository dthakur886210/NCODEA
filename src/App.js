import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Login from './components/Login';
import Details from './components/Details';
import Error from './components/Error';
import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";


function App() {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/details", element: <Details /> },
    { path: "*", element: <Error /> },
    // ...
  ]);
  return routes;
}
  const AppWrapper = () => {
    return (
      <Router>
        <App />
      </Router>
    );
  };
  
  export default AppWrapper;