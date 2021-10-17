import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import Home from './Example/Home';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

/*
có 2 loại components : class components và function components (function , arrow function)
dấu hiệu nhận biết một components : return một đống html

JSX
*/
function App() {
  return (
    <BrowserRouter><div className="App">
      <header className="App-header">
        <Nav />
        <img src={logo} className="App-logo" alt="logo" />

        {/* <MyComponent/> */}
        {/* <ListTodo /> */}
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/todo">
            <ListTodo />
          </Route>
          <Route path="/about">
            <MyComponent />
          </Route>
        </Switch>
      </header>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
    </BrowserRouter>


  );
}

export default App;
