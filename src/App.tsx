import React from 'react'
import './App.scss'
import { Grid } from '@material-ui/core'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginPage from './components/auth/LoginPage'
import IndexPage from './components/IndexPage'
import routes from './routes'
import RegisterPage from './components/auth/RegisterPage'
import TodosPage from './components/TodosPage'


function App() {

  return (
    <Grid
      className="App"
      container
      justify="center"
      wrap="nowrap"
    >
      <Router>
        <Switch>
          <Route path={routes.root} exact>
            <IndexPage />
          </Route>
          <Route path={routes.login.root}>
            <LoginPage />
          </Route>
          <Route path={routes.register.root}>
            <RegisterPage />
          </Route>
          <Route path={routes.todos.root}>
            <TodosPage />
          </Route>
        </Switch>
      </Router>
    </Grid>
  )
}

export default App
