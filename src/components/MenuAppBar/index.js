import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import Menu, { MenuItem } from 'material-ui/Menu'

const styles = () => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
})

class MenuAppBar extends Component {
  state = {
    auth: true,
    anchorEl: null,
  }

  handleChange = (event, checked) => {
    this.setState({ auth: checked })
  }

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleRequestClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { classes, history } = this.props
    const { auth, anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography type="title" color="inherit" className={classes.flex}>
            CryptoTradeBot
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-owns={open ? 'menu-appbar' : null}
                aria-haspopup="true"
                onClick={this.handleMenu}
                color="contrast"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onRequestClose={this.handleRequestClose}
              >
                <MenuItem onClick={() => history.push('/dashboard')}>Dashboard</MenuItem>
                <MenuItem onClick={() => history.push('/currencies')}>Currencies</MenuItem>
                <MenuItem onClick={() => history.push('/orders')}>Orders</MenuItem>
                <MenuItem onClick={() => history.push('/diary')}>Diary</MenuItem>
                <MenuItem onClick={() => history.push('/signals')}>Signals</MenuItem>
                <MenuItem onClick={() => history.push('/strategies')}>Strategies</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    )
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.any,
}

export default withStyles(styles)(withRouter(MenuAppBar))
