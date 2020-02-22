import React, { Component } from "react";
import queryString from "query-string";
class Posts extends Component {
  state = {};
  render() {
    const { match, location } = this.props;
    const { year, month } = match.params;
    const { name } = queryString.parse(location.search);
    return (
      <div>
        <h1>Posts Page: User: {name}</h1>
        Year:{year}, Month:{month}
      </div>
    );
  }
}

export default Posts;
