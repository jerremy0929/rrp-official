import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Drawer from './components/drawer'
import Menu from './components/menu'

import { Basic } from './chapter/01'

const App: React.FC = () => {
  return (
    <Drawer title="React Router" renderMenu={<Menu />}>
      <div className="App">
        <Switch>
          <Route path="/basic-routing" component={Basic} />
          <Route path="/" component={Basic} exact={true} />
        </Switch>
      </div>
    </Drawer>
  )
}

export default App
