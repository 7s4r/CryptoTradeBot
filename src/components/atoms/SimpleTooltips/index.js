import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import AddIcon from 'material-ui-icons/Add'
import Button from 'material-ui/Button'
import Tooltip from 'material-ui/Tooltip'
import { FormControl } from 'material-ui/Form'
import Input, { InputLabel } from 'material-ui/Input'
import Select from 'material-ui/Select'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'

const styles = theme => ({
  absolute: {
    flip: false,
    position: 'absolute',
    bottom: 32,
    right: 32,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 150,
  },
})

class SimpleTooltips extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  state = {
    open: false,
    currencyPair: '',
  }

  handleChange = name => (event) => {
    this.setState({ [name]: Number(event.target.value) })
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleRequestClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { classes } = this.props

    return (
      <div>
        <Tooltip placement="bottom" title="Create order">
          <Button onClick={this.handleClickOpen} fab color="primary" className={classes.absolute}>
            <AddIcon />
          </Button>
        </Tooltip>
        <Dialog open={this.state.open} onRequestClose={this.handleRequestClose}>
          <DialogTitle>Create order</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address here.
            </DialogContentText>
            <form className={classes.container}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="age-native-simple">Select currency pair</InputLabel>
                <Select
                  native
                  value={this.state.currencyPair}
                  onChange={this.handleChange('currencyPair')}
                  input={<Input id="age-native-simple" />}
                >
                  <option value="" />
                  <option value="BTCUSD">BTCUSD</option>
                  <option value="ETHUSD">ETHUSD</option>
                  <option value="LTCUSD">LTCUSD</option>
                </Select>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleRequestClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleRequestClose} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default withStyles(styles)(SimpleTooltips)
