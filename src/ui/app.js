import "./index.html"
import React from "react";
import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom";
import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import SignUp from "./pages/signup";


const App = (props) => {
    return <React.Fragment>
        <Router>
            <div id="div 1">
                <Link to="/signup">Sign Up</Link>
                <Route path='/signup' component={SignUp}/>
            </div>
        </Router>
    </React.Fragment>
}

ReactDOM.render(<App/>, document.getElementById("root"));