import React from "react"
import { Switch, Route } from "react-router-dom"

import "./styles/universal"
import "./styles/main"
import "./styles/fonts"
import "./styles/helpers/normalize.sass"

import Home from "./views/Home"
import NotFound from "./views/NotFound"

export interface AppState {

}

export interface AppProps {

}

export default
class App
extends React.Component<AppProps, AppState> {

    render() {
        return <>
            <Switch>
                <Route 
                    path="/"
                    exact
                    component={Home}
                />
                <Route component={NotFound}/>
            </Switch>
        </>
    }
}