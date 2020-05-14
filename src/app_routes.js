import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { HomePage, DocPage, NotFound } from './pages'
import { Footer } from './components'
import Menu from './components/menu/menu'

class app_routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Menu />
        <Route exact path="/" component={HomePage} />
        <Route path="/doc" component={DocPage} />
        {/* <Route path='*' exact={true} component={NotFound} /> */}
        <Footer />
      </BrowserRouter>
    );
  }
}
export default app_routes;