import React from 'react'
import { RouteComponentProps, Route, Link } from 'react-router-dom'

const Home = () => <h2>Home</h2>
const About = () => <h2>About</h2>
const Topic = ({ match }: RouteComponentProps<{ id: string }>) => (
  <h2>Requested Param: {match.params.id}</h2>
)
const NotFound = () => <h3>Please select a topic.</h3>
const Topics = ({ match }: RouteComponentProps) => (
  <div>
    <h2>Topics</h2>
    {/* <p>Params: {match.params}</p> */}
    <p>Path: {match.path}</p>
    <p>Url: {match.url}</p>

    <ul>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v State</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:id`} component={Topic} />
    <Route path={match.path} exact={true} render={NotFound} />
  </div>
)

export default () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/nested-routing/">Home</Link>
        </li>
        <li>
          <Link to="/nested-routing/about">About</Link>
        </li>
        <li>
          <Link to="/nested-routing/topics">Topics</Link>
        </li>
      </ul>

      <Route path="/nested-routing" component={Home} exact={true} />
      <Route path="/nested-routing/about" component={About} />
      <Route path="/nested-routing/topics" component={Topics} />
    </div>
  )
}
