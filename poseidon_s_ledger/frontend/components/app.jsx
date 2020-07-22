import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div className='App'>
        <header>

        </header>
        <h1>Working</h1>
        <footer>

        </footer>
    </div>
)

export default App