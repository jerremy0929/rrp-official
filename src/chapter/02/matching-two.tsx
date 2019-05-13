import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'

const Home = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Contact = () => <h2>Contact</h2>

export default () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/matching-two">Home</Link>
          </li>
          <li>
            <Link to="/matching-two/about">About</Link>
          </li>
          <li>
            <Link to="/matching-two/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/matching-two" component={Home} exact={true} />
        <Route path="/matching-two/about" component={About} />
        <Route path="/matching-two/contact" component={Contact} />
      </Switch>
    </div>
  )
}
