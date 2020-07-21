import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Filter";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
//import LoginNav from "./components/LoginNav"
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop"
import Reggie from "./pages/Registration";
import Results from "./pages/Results";
import Footer from "./components/Footer";
//import {ThemeProvider} from "react-bootstrap";
import "./app.css"
import Planned from './pages/Planned';
import Completed from "./pages/Completed";




class App extends Component {
  state = {
    sideDrawerOpen: false
  };



  //=============Sidedrawer Functionality for moible dispaly==========================


  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }


  //===================================================================================

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (

      <div className="page-container">
        <div className="content-wrap">
          <Router>
            <div style={{height: '100%'}}>
              <Nav drawerClickHandler={this.drawerToggleClickHandler} />
              <SideDrawer show={this.state.sideDrawerOpen} />
              {backdrop}

              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/landing" component={Landing} />
                <Route exact path="/about" component={About} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/login" component={Login}
                  userName={this.state.userName}
                  password={this.state.password}
                  checkInformation={this.checkInformation} />
                <Route exact path="/planned" component={Planned} />
                <Route exact path="/completed" component={Completed} />
                <Route exact path="/results" component={Results} />
                <Route exact path="/reggie" component={Reggie}
                  validateRegistration={this.validateRegistration} />
                <Route exact path="/repo" component={() => {window.location.href = 'https://github.com/habibtaghavi08/DateCreate'; return null;}} />
                <Route exact path="/dannielle" component={() => {window.location.href = 'https://d-taylor6403.github.io/Professional-Portfolio/'; return null;}} />
                <Route exact path="/mike" component={() => {window.location.href = 'https://mlusso06.github.io/Responsive-Portfolio/index.html'; return null;}} />
                <Route exact path="/celeste" component={() => {window.location.href = 'https://github.com/cdlewis42'; return null;}} />
                <Route exact path="/travis" component={() => {window.location.href = 'https://github.com/drtravis4'; return null;}} />
                <Route exact path="/habib" component={() => {window.location.href = 'https://github.com/habibtaghavi08'; return null;}} />
                <Route exact path="/tos" component={() => {window.location.href = './component/modal'; return null;}} />
                <Route component={NoMatch} />


              </Switch>
            </div>
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
