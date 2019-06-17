import React from 'react'
import { Route, Link, Switch } from 'react-router-dom'

import Home from '@/views/Home/Home'
import Counter from '@/views/Counter'

const PrimaryLayout = () => (
  <div className="primary-layout">
    <header>
      <Link to="/">toHome</Link>&emsp;|&emsp;
      <Link to="/count">toCount</Link>
    </header>
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/count" exact component={Counter} />
      </Switch>
    </main>
  </div>
)

export default PrimaryLayout
