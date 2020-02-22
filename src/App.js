import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Product from "./component/product";
import Dashboard from "./component/dashboard";
import Posts from "./component/posts";
import Home from "./component/home";
import Navbar from "./component/navbar";
import ProductDetails from "./component/productDetails";
import NotFound from "./component/notFound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main role="main" className="container mx-auto mt-5 pt-5">
        <Switch>
          <Route path="/product/:id" component={ProductDetails}></Route>
          <Route path="/product" component={Product}></Route>
          {/** This route comonent send extra 3 props to the component i.e history location and match */}
          <Route
            path="/posts/:year?/:month?"
            render={props => <Posts sortBy="newest" {...props} />}
          ></Route>
          <Route path="/admin" component={Dashboard}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Route path="/" exact component={Home}></Route>
          <Redirect from="/xyz" to="/not-found" />
          <Redirect from="/messages" to="/posts" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
