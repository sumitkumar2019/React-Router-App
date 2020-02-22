import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import Posts from "./posts";
import User from "./users";
class Dashboard extends Component {
  render() {
    return (
      <div>
        <h1>Dashboard Page</h1>
        <ul>
          <li>
            <Link to="/admin/posts">Posts</Link>
            <Link to="/admin/users">Users</Link>
          </li>
          <Route path="/admin/posts" component={Posts}></Route>
          <Route path="/admin/users" component={User}></Route>
        </ul>
      </div>
    );
  }
}

export default Dashboard;
