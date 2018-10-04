import React, {Component} from 'react';
import {withAuth} from '@okta/okta-react';
import {Guides} from './Guides.js';
import Help from './components/presentational/Help.js';

export default withAuth(class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: null,
      user: null
    };

    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({authenticated});
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  componentDidMount() {
    if (this.props.auth) {
      this.props.auth.getUser().then(user => {
        this.setState({
          authenticated: this.state.authenticated,
          user: user
        });
      });
    }
  }

  async login() {
    this.props.auth.login('/');
  }

  async logout() {
    this.props.auth.logout('/').then(
      () => {
        this.setState({
          authenticated: null,
          user: null
        });
      }
    );
  }

  render() {
    const loginOrLogoutButton = this.state.authenticated
      ? <div className="ui button inverted "
        onClick={this.logout}>
        Logout
      </div>
      : <div className="ui button inverted "
        onClick={this.login}>
        Login with Okta
      </div>;

    let welcome_string = '';
    if(this.state.authenticated && this.state.user){
      welcome_string = ' Welcome, ' + this.state.user.given_name
        + '!';
    }

    return (
      <div className="App">
        <div className="ui inverted attached segment">
          <div>
            {loginOrLogoutButton}
            {welcome_string}
            <Help/>
          </div>
          <div className="ui hidden clearing divider"/>
          <div className="ui inverted vertical very padded center aligned massive segment">
          Technique Guide
          </div>
        </div>
        <Guides/>
      </div>
    );
  }
});
