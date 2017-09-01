import React, {Component } from 'react'
import { Router, Route, IndexRoute, browserHistory, hashHistory, applyRouterMiddleware } from 'react-router'
import { useScroll } from 'react-router-scroll'
import App from '../containers/App'
import Home from '../containers/Home'
import Apply from '../containers/Apply'
import ApplyPhotoUpdate from '../containers/ApplyPhotoUpdate'
import ApplyResult from '../containers/ApplyResult/index.js'
import List from '../containers/List'
import ApplyOnwer from '../containers/ApplyOnwer/index.js'
import ApplyEdit from '../containers/ApplyEdit/index.js'


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
      { path: '/apply', name: 'apply', component: Apply},
      { path: '/photo', name: 'photo', component: ApplyPhotoUpdate },
      { path: '/applyResult', name: 'applyResult', component: ApplyResult },
      { path: '/list', name: 'list', component: List},
      { path: '/applyOnwer', name: 'applyOnwer', component: ApplyOnwer},
      { path: '/applyEdit', name: 'applyEdit', component: ApplyEdit},
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
