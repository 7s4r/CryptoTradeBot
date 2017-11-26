import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'material-ui/Button'

class LoginPage extends Component {
  static propTypes = {
    auth: PropTypes.object,
  }

  login = () => {
    this.props.auth.login()
  }

  render() {
    const { isAuthenticated } = this.props.auth

    return (
      <div>
        {
          isAuthenticated() && (
            <h4>
              You are logged in!
            </h4>
          )
        }
        {
          !isAuthenticated() && (
            <h4>
              You are not logged in! Please{' '}
              <Button raised color="primary" onClick={this.login}>Log In</Button>
              {' '}to continue.
            </h4>
          )
        }
      </div>
    )
  }
}

export default LoginPage
