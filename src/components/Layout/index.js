import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import {useStyles} from './Styles'
import Header from '../Header'

const Layout = ({children}) => {
  const classes = useStyles()

  return (
    <div className={classes.pageWrapper}>
      <CssBaseline/>
      <Header/>
      <main className={classes.content}>
        {children}
      </main>
    </div>
  )
}

export default Layout
