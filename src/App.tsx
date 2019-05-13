import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Drawer from './components/drawer'
import Menu from './components/menu'

import { Basic, Nested } from './chapter/01'
import {
  MatchingOne,
  MatchingTwo,
  MatchingThree,
  RouteRenderingProps,
  Navigation,
} from './chapter/02'

const App: React.FC = () => {
  return (
    <Drawer title="React Router" renderMenu={<Menu />}>
      <div className="App">
        <Switch>
          {/* Quick Start */}
          <Route path="/basic-routing" component={Basic} />
          <Route path="/nested-routing" component={Nested} />

          {/* Basic Component */}
          <Route path="/matching-one" component={MatchingOne} />
          <Route path="/matching-two" component={MatchingTwo} />
          <Route path="/matching-three" component={MatchingThree} />
          <Route
            path="/route-rendering-props"
            component={RouteRenderingProps}
          />
          <Route path="/navigation" component={Navigation} />

          <Route path="/" component={Basic} exact={true} />
        </Switch>
      </div>
    </Drawer>
  )
}

export default App
