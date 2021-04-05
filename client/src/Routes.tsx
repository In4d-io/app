import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Home } from './containers/home/home'
import { Regl } from './containers/regl/regl'
import { Three } from './containers/three/three'
import { WorldView } from './containers/worldview/worldview'

type RouteType = {
  path: string,
  name: string,
  container: React.FC,
  isTool: boolean,
}


export const APP_ROUTES: Array<RouteType> = [{
  path: "",
  name: "home",
  container: Home,
  isTool: false,
}, {
  path: 'threejs',
  name: 'Three.JS',
  container: Three,
  isTool: true,
}, {
  path: 'regl',
  name: 'Regl.JS',
  container: Regl,
  isTool: true,
}, {
  path: 'regl-worldview',
  name: 'Regl Worldview',
  container: WorldView,
  isTool: true,
}]

export const Routes = () => {
  return (
    <Switch>
      {APP_ROUTES.map(route => {
        const { path, container } = route
        return (
          <Route
            key={`/${path}`}
            exact path={`/${path}`}
            component={container}
          />
        )
      })}
    </Switch>
  )
}