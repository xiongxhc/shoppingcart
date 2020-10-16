import React from 'react'
import { Switch, Route } from 'react-router-dom'

import App from './App'
import Cart from './pages/Cart.js'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={ App } />
      <Route exact path='/cart' component={ Cart } />
    </Switch>
  )
}

export default Routes