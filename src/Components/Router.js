import React from "react"
import Home from "../Routes/Home"
import Detail from "../Routes/Detail"
import Search from "../Routes/Search"
import TV from "../Routes/TV"

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (

    <Router>

        <Switch>

            <Route path="/" exact component={Home} />
            <Route path="/Detail" exact component={Detail} />
            <Route path="/Search" exact component={Search} />
            <Route path="/TV" exact component={TV} />
            <Redirect from="*" to="/" />

        </Switch>
    </Router>

)