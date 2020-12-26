import React from "react"
import Home from "../Routes/Home"
//import Detail from "../Routes/Detail"
import Search from "../Routes/Search"
import TV from "../Routes/TV"

import Header from "./Header";

import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (

    <Router>

        <Header />

        <Switch>

            <Route path="/" exact component={Home} />
            <Route path="/tv" exact component={TV} />
            <Route path="/search" exact component={Search} />

            <Redirect from="*" to="/" />

        </Switch>

    </Router>

)