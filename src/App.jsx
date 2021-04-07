import React, { useEffect, useContext } from 'react'
import { Route, Switch } from "react-router-dom"
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'
import { StateContext } from './State'
import theme1 from './theme'

import Nav from './components/Nav'
import Footer from './components/Footer'

import Highlights from './pages/Highlights'
import Competitions from './pages/Competitions'
import Video from './pages/Video'

function App() {
  const { getInfo } = useContext(StateContext)

  useEffect(() => {
    getInfo()
    console.log('success!')
  }, [])

  return (
    <ThemeProvider theme={theme1}>
      <CssBaseline />
      <Nav />
      <Switch>
        <Route exact path="/">
          <Highlights />
        </Route>
        <Route path="/comps">
          <Competitions />
        </Route>
        <Route exact path="/:sides">
          <Video />
        </Route>
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
