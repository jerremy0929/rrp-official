import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Basic, Nested } from './01-quick-start'
import {
  MatchingOne,
  MatchingTwo,
  MatchingThree,
  RouteRenderingProps,
  Navigation,
} from './02-basic-components'

export default () => {
  return (
    <Switch>
      {/* Quick Start */}
      <Route path="/guides/basic-routing" component={Basic} />
      <Route path="/guides/nested-routing" component={Nested} />

      {/* Basic Component */}
      <Route path="/guides/matching-one" component={MatchingOne} />
      <Route path="/guides/matching-two" component={MatchingTwo} />
      <Route path="/guides/matching-three" component={MatchingThree} />
      <Route
        path="/guides/route-rendering-props"
        component={RouteRenderingProps}
      />
      <Route path="/guides/navigation" component={Navigation} />

      <Route path="/" component={Basic} exact={true} />
    </Switch>
  )
}
