import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Drawer from './components/drawer'
import Menu from './components/menu'

import { Basic, Nested } from './chapter/01'

const App: React.FC = () => {
  return (
    <Drawer title="React Router" renderMenu={<Menu />}>
      <div className="App">
        <Switch>
          <Route path="/basic-routing" component={Basic} />
          <Route path="/nested-routing" component={Nested} />
          <Route path="/" component={Basic} exact={true} />
        </Switch>
      </div>
    </Drawer>
  )
}

export default App
