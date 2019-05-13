import React from 'react'
import { Link, Route } from 'react-router-dom'

const About = () => <h2>About</h2>
const Contact = () => <h2>Contact</h2>
const Always = () => <h2>Always</h2>

export default () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/matching-one/about">About</Link>
          </li>
          <li>
            <Link to="/matching-one/contact">Users</Link>
          </li>
        </ul>
      </nav>

      <Route path="/matching-one/about" component={About} />
      <Route path="/matching-one/contact" component={Contact} />
      <Route component={Always} />
    </div>
  )
}
