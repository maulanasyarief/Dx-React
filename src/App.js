import React, { Component } from 'react';
import 'devextreme/dist/css/dx.common.css';
import './themes/generated/theme.base.css';
import { BrowserRouter } from 'react-router-dom';
import Approuter from './app_routes';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Approuter />
            </BrowserRouter>
        );
    }
}

export default App;