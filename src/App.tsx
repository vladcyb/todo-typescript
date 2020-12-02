import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginPage from './components/auth/LoginPage'
import IndexPage from './components/IndexPage'
import routes from './routes'
import RegisterPage from './components/auth/RegisterPage'
import TodosPage from './components/TodosPage'
import PrivateRoute from './components/PrivateRoute'
import { useSelector } from 'react-redux'
import { getUser } from './store/userReducer/selectors'


function App() {

  const { token } = useSelector(getUser)

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={routes.root} exact>
            <IndexPage />
          </Route>
          <PrivateRoute path={routes.login.root} condition={!token} redirectPath={routes.todos.root}>
            <LoginPage />
          </PrivateRoute>
          <PrivateRoute path={routes.register.root} condition={!token} redirectPath={routes.todos.root}>
            <RegisterPage />
          </PrivateRoute>
          <PrivateRoute path={routes.todos.root} condition={!!token} redirectPath={routes.login.root}>
            <TodosPage />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  )
}

export default App
