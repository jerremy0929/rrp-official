import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Drawer from './components/drawer'
import Menu from './components/menu'

import Chapter01 from './chapter/01'
import Chapter02 from './chapter/02'

const App: React.FC = () => {
  return (
    <Drawer title="React Router" renderMenu={<Menu />}>
      <div className="App">
        <Switch>
          <Route path="/lesson01" component={Chapter01} />
          <Route path="/lesson02" component={Chapter02} />
          <Route path="/" component={Chapter01} exact={true} />
        </Switch>
      </div>
    </Drawer>
  )
}

export default App
