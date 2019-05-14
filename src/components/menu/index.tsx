import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  // menu one
  <ul>
    <li>
      <h1>Guides</h1>
      {/* menu two */}
      <ul>
        <li>
          <h2>Quick Start</h2>
          {/* menu three */}
          <ul>
            <li>
              <Link to="/guides/basic-routing">Basic Routing</Link>
            </li>
            <li>
              <Link to="/guides/nested-routing">Nested Routing</Link>
            </li>
          </ul>
        </li>

        <li>
          <h2>Basic Component</h2>
          {/* menu three */}
          <ul>
            <li>
              <Link to="/guides/matching-one">Route Matching - One</Link>
            </li>
            <li>
              <Link to="/guides/matching-two">Route Matching - Two</Link>
            </li>
            <li>
              <Link to="/guides/matching-three">Route Matching - Three</Link>
            </li>
            <li>
              <Link to="/guides/route-rendering-props">
                Route Rendering Props
              </Link>
            </li>
            <li>
              <Link to="/guides/navigation">Navigation</Link>
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
)
