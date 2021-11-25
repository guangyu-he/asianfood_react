import React, { Component } from "react";
import axios from "axios";
import Listview from "../components/Suggestions";

const API_URL = "https://asianfood.heguangyu.net/return_location_react.php";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      results: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.getInfo = this.getInfo.bind(this);
  }

  getInfo = () => {
    axios.get(`${API_URL}?n=${this.state.query}`).then(({ data }) => {
      this.setState({
        results: data.split("<br>"),
      });
    });
  };

  handleInputChange = () => {
    this.setState(
      {
        query: this.search.value,
      },
      () => {
        if (this.state.query && this.state.query.length >= 1) {
          this.getInfo();
        } else if (!this.state.query) {
        }
      }
    );
  };

  render() {
    let names = [];
    for (let i = 0; i < this.state.results.length - 1; i++) {
      if (this.state.results[i] === undefined) {
      } else {
        names = [...names, this.state.results[i].split(",")[0]];
      }
    }
    return (
      <form>
        <input
          placeholder="Search for..."
          ref={(input) => (this.search = input)}
          onChange={this.handleInputChange}
        />
        <Listview results={names} />
        {/**/}
      </form>
    );
  }
}

export default Search;
