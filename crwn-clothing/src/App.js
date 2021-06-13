import React from 'react';
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { HomePage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';

class App extends React.Component {

  componentDidMount() {
    const { setCurrentUser } = this.props;

    // This would mean the user is null
    setCurrentUser(null);

    // This would mean the user is not null
    setCurrentUser({id: 1});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
