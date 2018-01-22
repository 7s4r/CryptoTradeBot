import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import { withStyles } from 'material-ui/styles'
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table'
import Paper from 'material-ui/Paper'
import api from '../../services/api'
import './styles.css'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  paddingDefault: {
    padding: 0,
    paddingLeft: 15,
    paddingRight: 0,
  },
})

const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={10000}
    classNames="fade"
  >
    {children}
  </CSSTransition>
)

class CurrencyList extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
  }

  state = {
    list: [],
    show: true,
  }

  componentWillMount() {
    this.getData()
  }

  componentDidMount() {
    this.interval = setInterval(() => this.getData(), 10000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  getData = async () => {
    const currencies = await api.request('https://api.bitfinex.com/v2/tickers?symbols=tBTCUSD,tLTCUSD,tETHUSD,tXRPUSD,tIOTAUSD')

    this.setState({
      list: currencies,
      show: !this.state.show,
    })
  }

  render() {
    const { classes } = this.props

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell classes={{ paddingDefault: classes.paddingDefault }}>Symbol</TableCell>
              <TableCell padding="none">Last</TableCell>
              <TableCell padding="none">Change</TableCell>
              <TableCell padding="none">Volume</TableCell>
              <TableCell padding="none">High</TableCell>
              <TableCell>Low</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.list.map(n => (
              <TableRow key={n[1]}>
                <TableCell classes={{ paddingDefault: classes.paddingDefault }}>
                  <a href={`/currency/${n[0].replace('t', '')}`}>{n[0].replace('t', '')}</a>
                </TableCell>
                <TableCell padding="none">{n[7].toFixed(2)}$</TableCell>
                <TableCell padding="none">{n[5].toFixed(2)}$ ({n[6].toFixed(2)}%)</TableCell>
                <TableCell padding="none">{n[8].toFixed(2)}</TableCell>
                <TableCell padding="none">{n[9].toFixed(2)}</TableCell>
                <Fade in={this.state.show}><TableCell>{n[10].toFixed(2)}</TableCell></Fade>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(CurrencyList)
