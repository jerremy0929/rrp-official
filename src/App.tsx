import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Drawer from './components/drawer'
import Menu from './components/menu'

import Lesson01 from './components/lesson01'
import Lesson02 from './components/lesson02'

const App: React.FC = () => {
  return (
    <Drawer title="React Router" renderMenu={<Menu />}>
      <div className="App">
        <Switch>
          <Route path="/lesson01" component={Lesson01} />
          <Route path="/lesson02" component={Lesson02} />
          <Route path="/" component={Lesson01} exact={true} />
        </Switch>
      </div>
    </Drawer>
  )
}

export default App
