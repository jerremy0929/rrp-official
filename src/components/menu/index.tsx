import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <ul>
    {/* Quick Start */}
    <li>
      <Link to="/basic-routing">Quick Start: Basic Routing</Link>
    </li>
    <li>
      <Link to="/nested-routing">Quick Start: Nested Routing</Link>
    </li>

    {/* Basic Component */}
    <li>
      <Link to="/matching-one">Basic Component: Route Matching - One</Link>
    </li>
    <li>
      <Link to="/matching-two">Basic Component: Route Matching - Two</Link>
    </li>
    <li>
      <Link to="/matching-three">Basic Component: Route Matching - Three</Link>
    </li>
    <li>
      <Link to="/route-rendering-props">
        Basic Component: Route Rendering Props
      </Link>
    </li>
    <li>
      <Link to="/navigation">Basic Component: Navigation</Link>
    </li>
  </ul>
)
