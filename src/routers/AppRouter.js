import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { history } from "../helpers";
import { connect } from "react-redux";
import {DeviceHome} from "../components";

class AppRouter extends React.Component {
    constructor(props) {
        super(props);
        const { dispatch } = this.props;
        history.listen((location, action) => {

            let locationPathname = location.pathname;
        });
    }


    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={DeviceHome} />
                    </Switch>
                </Router>

            </div>
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}
const connectedApp = connect(mapStateToProps)(AppRouter);
export { connectedApp as AppRouter };            
