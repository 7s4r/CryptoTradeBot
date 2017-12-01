import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

const styles = {
  card: {
    width: '100%',
    marginTop: 10,
  },
  media: {
    height: 200,
  },
}

function SimpleMediaCard(props) {
  const { classes } = props
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="https://material-ui-next.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography type="headline" component="h2">
            CryptoTradeBot
          </Typography>
          <Typography component="p">
            Manage your cryptocurrency portfolio, trade & receive buy signals
          </Typography>
        </CardContent>
        <CardActions>
          <Button dense color="primary">
            Login
          </Button>
          <Button dense color="primary">
            Create account
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleMediaCard)
