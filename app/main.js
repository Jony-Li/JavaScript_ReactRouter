'use strict';
import "semantic-ui/semantic.min.css!";
import React, {Component} from "react";
import ReactDOM from "react-dom";
import {HashRouter, Route, Link} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div>
                <div className="ui secondary pointing menu">
                    <Link to="/" className="item">Home</Link>
                    <Link to="/about" className="item">About</Link>
                    <Link to="/inbox" className="item">Inbox</Link>
                </div>
                {this.props.children}
            </div>
        );
    }
}

const Home = () => (
    <div>
        <h3>Home</h3>
    </div>
)

const About = () => (
    <div>
        <h3>About</h3>
    </div>
)

const Message = ({match}) => (
    <div>
        <h3>new messages</h3>
        {console.log(match.params.id)}
        <h3>{match.params.id}</h3>

    </div>
)

const Inbox = ({match}) => (
    <div>
        <h3>Topics</h3>
        {/*<!--进行Route嵌套 -->*/}
        {/*http://localhost:3000/#/inbox/messages/:20*/}
        <Route path={`${match.url}/messages/:id`} component={Message}/>
        {console.log(match.url)}
    </div>
)

ReactDOM.render(
    (<HashRouter>
        <App>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/inbox" component={Inbox}/>
        </App>
    </HashRouter>),
    document.getElementById("app")
);