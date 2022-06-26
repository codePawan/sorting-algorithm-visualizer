import React, { Component } from "react";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import SortingVisualization from "./components/sortingvisualizer";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <NavBar />
        <main className="container">
          <SortingVisualization/>
        </main>
        
        <Footer />
      </>
    );
  }
}

export default App;
