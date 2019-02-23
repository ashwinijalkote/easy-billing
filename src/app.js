import "./index.html"
import React from "react";

import {Link, Route, Switch, BrowserRouter as Router} from "react-router-dom";
import ReactDOM from "react-dom";

const App = (props) => {
    return <React.Fragment>
        <Router>
            <div id="div 1">
                <Link to="/mad">Madness</Link>
                <Route path='/mad' component={(props) => <div>madddy ashwini</div>}/>
            </div>
        </Router>
        <Router>
            <div id="div 2">
                <Link to="/mad">Madness</Link>
                <Route path='/mad' component={(props) => <div>madddy gourav</div>}/>
            </div>
        </Router>
    </React.Fragment>
}


setTimeout(() => {
    ReactDOM.render(<App/>, document.getElementById("root"));
}, 1000);

