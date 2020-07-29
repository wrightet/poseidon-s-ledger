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

// const App = () => ()
//     // <div className='App'>
//     //     <header>

//     //     </header>
//     //     <h1>Working</h1>
//     //     <footer>

//     //     </footer>
//     // </div>
//     <h1>works</h1>
// )

class App extends React.Component{
    constructor(props) {
        super(props);
        
    }

    render(){
        console.log('hi')
        return(
            <h1> hi</h1>
        )
    }
    
}

export default App;