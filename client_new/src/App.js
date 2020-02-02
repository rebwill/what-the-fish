// Libraries
import React, { Component } from "react";

// Components
import FishSelector from "./components/fishSelector";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import IntroContainer from "./components/introContainer";

// Files
// import logo from "./logo.svg";
import "./App.scss";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seafood: [],
      isLoaded: false,
      fishIsChosen: false
    };
  }

  componentDidMount() {
    this.fetchSeafood();
  }

  fetchSeafood = () => {
    fetch("/seafood")
      .then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error();
        }
      })
      .then(data => {
        this.setState({
          seafood: data.seafood,
          isLoaded: true
        });
      })
      .catch(console.log);
  };

  render() {
    if (this.state.seafood !== [] && this.state.isLoaded === true) {
      return (
        <div className="App">
          <div className="page-container">
            <Navbar />
            <IntroContainer />
            <FishSelector
              className="fish-selector"
              fishDataArr={this.state.seafood}
            />
            <Footer />
          </div>
        </div>
      );
    } else if (this.state.isLoaded === false) {
      return (
        <div className="App">
          <Navbar />
          <IntroContainer />
          <Footer />
        </div>
      );
    }
  }
}

export default Home;
