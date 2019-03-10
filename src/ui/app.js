import "./index.html"
import React from "react";
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom";
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import SignUp from "./pages/signin";
import Login from "./pages/login";
import {applyMiddleware, createStore} from "redux";
import User from "./reducers/user";
import {Provider} from "react-redux";
import thunk from "redux-thunk";

window.APP = createStore(User, {user: {username: null}}, applyMiddleware(thunk));


const App = (props) => {
    return <React.Fragment>
        <Provider store={window.APP}>
            <Router>
                <div id="div1">
                    <Route path='/signup' component={SignUp}/>
                    <Route path='/login' component={Login}/>
                </div>
            </Router>
        </Provider>
    </React.Fragment>
}

ReactDOM.render(<App/>, document.getElementById("root"));