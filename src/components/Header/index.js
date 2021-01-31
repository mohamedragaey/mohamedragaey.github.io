import * as React from 'react'
import logo from './../../images/cover.png'
import {Container, Grid} from '@material-ui/core'
import {useStyles} from './Styles'

const Header = () => {
  const classes = useStyles()
  return (
    <header className={classes.header}>
      <Container maxWidth='lg'>
        <Grid container justify='center'>
          <Grid item lg={6}>
            <img src={logo} alt='logo'/>
          </Grid>
        </Grid>
      </Container>
    </header>
  )
}

export default Header
