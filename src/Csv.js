
import React, { Component } from 'react';
import Papa from 'papaparse';
var csvfile = "./MJFreeway Export - sales.csv";

class Csv extends Component {

  constructor(props) {
    // Call super class
    super(props);

    // Bind this to function updateData (This eliminates the error)
    this.updateData = this.updateData.bind(this);
    this.state = {
        data: []
      };
  }


  componentDidMount() {
    Papa.parse(csvfile, {
        header: true,
        download: true,
        skipEmptyLines: true,
        // Here this is also available. So we can call our custom class method
        complete: this.updateData
      });
    }

  updateData(result) {
      console.log(result)
    const data = result.data;
    // Here this is available and we can call this.setState (since it's binded in the constructor)
    this.setState({data: data}); // or shorter ES syntax: this.setState({ data });
  }

  render() {
      console.log(this.state)
    // Your render function
    return <div>Data</div>
  }
}

export default Csv;