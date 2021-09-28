import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ReactLoading from 'react-loading';

const Home = lazy(() => import("./Components/Home/default"));
const Login = lazy(() => import("./Components/Login/default"));

const App = () => {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<ReactLoading type={'spin'} color={'black'} height={300} width={300} />}>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/" component={Login} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
