import React from "react"

import "../../styles/views/not-found"

export interface NotFoundProps {}

export interface NotFoundState {}

export default
class NotFound
extends React.Component<NotFoundProps, NotFoundState> {
    render() {
        return <>
            <div className="v-not-found">
                <h1>Page not found! :)</h1>
            </div>
        </>
    }
}