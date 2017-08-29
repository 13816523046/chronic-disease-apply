import React, {Component } from 'react'
import { Router, Route, IndexRoute, browserHistory, hashHistory, applyRouterMiddleware } from 'react-router'
import { useScroll } from 'react-router-scroll'
import App from '../containers/App'
import Main from '../containers/Main/index'
import Home from '../containers/Home'
import Apply from '../containers/Apply'
import ApplyPhotoUpdate from '../containers/ApplyPhotoUpdate'

const config = [
  {
    path: '/',
    component: App,
    // default index
    indexRoute: {
      component: Home
    },
    childRoutes: [
      { path: '/home', name: 'home', component: Home },
      { path: '/main', name: 'main', component: Main },
      { path: '/apply', name: 'apply', component: Apply},
      { path: '/photo', name: 'photo', component: ApplyPhotoUpdate },
    ]
   },
]

const route = (
  <Router
    history={hashHistory}
    routes={config}
    render={applyRouterMiddleware(useScroll())}>
  </Router>
)


export default route
