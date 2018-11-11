import React, { Component } from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 6px;
  border: 1px solid #e5e5e5;
  padding: 0 20px;
  box-sizing: border-box;
`;

class Search extends Component {
  handleChange = e => {
    this.props.searchTrack(e.target.value);
  };

  render() {
    return (
      <Input
        type="text"
        onChange={this.handleChange}
        placeholder="Search for tracks"
      />
    );
  }
}

export default Search;
