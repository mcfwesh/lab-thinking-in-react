import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilterableProductTable from './Components/FilterableProductTable';

export default class App extends Component {
  render() {
    return (
      <div>
        <FilterableProductTable />
      </div>
    );
  }
}
