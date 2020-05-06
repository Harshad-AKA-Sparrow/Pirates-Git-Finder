import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import axios from 'axios';
import About from './components/views/About';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import SingleUser from './components/users/SingleUser';

class App extends Component {
  state = {
    users: [],
    singleUser: {},
    repos: [],
    loading: false,
    alert: null,
  };
  async componentDidMount() {
    this.setState({
      loading: true,
    });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GIT_CLIENT_ID}&client_secret=${process.env.REACT_APP_GIT_SECRET}`
    );
    this.setState({
      users: res.data,
      loading: false,
    });
  }

  //Get single user....

  getSingleUser = async (username) => {
    this.setState({
      loading: true,
    });
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GIT_CLIENT_ID}&client_secret=${process.env.REACT_APP_GIT_SECRET}`
    );
    this.setState({
      singleUser: res.data,
      loading: false,
    });
  };

  //Get single user repos

  getSingleUserReops = async (username) => {
    this.setState({
      loading: true,
    });
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GIT_CLIENT_ID}&client_secret=${process.env.REACT_APP_GIT_SECRET}`
    );
    this.setState({
      repos: res.data,
      loading: false,
    });
  };

  //Git Search User...

  searchUser = async (text) => {
    // console.log(text);
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GIT_CLIENT_ID}&client_secret=${process.env.REACT_APP_GIT_SECRET}`
    );
    setTimeout(
      () =>
        this.setState({
          users: res.data.items,
          loading: false,
        }),
      300
    );
  };
  //Clear Out Git Users......

  clearUser = () => this.setState({ users: [], loading: false });

  //Show Alert Msg.....

  showAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => this.setState({ alert: null }), 5000);
  };
  render() {
    const { alert, singleUser, users, repos, loading } = this.state;
    return (
      <Router>
        <div className='App'>
          <Navbar />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUser={this.searchUser}
                      clearUser={this.clearUser}
                      showBtn={users.length > 0 ? true : false}
                      showAlert={this.showAlert}
                    />
                    <Users users={users} loading={loading} />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/single-user/:login'
                render={(props) => (
                  <SingleUser
                    {...props}
                    getSingleUser={this.getSingleUser}
                    singleUser={singleUser}
                    getSingleUserRepos={this.getSingleUserReops}
                    loading={loading}
                    repos={repos}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
