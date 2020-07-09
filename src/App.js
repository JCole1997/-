import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './common/header/';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import store from './store';
import Login from './pages/login';
import Write from './pages/write';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail/:id" exact component={Detail}></Route>
          <Route path="/write" exact component={Write}></Route>
          <Route path="/login" exact component={Login}></Route>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
