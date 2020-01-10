import React from "react"

import "../../styles/views/home"

export interface HomeProps {}

export interface HomeState {
    count: number
}

export default
class Home
extends React.Component<HomeProps, HomeState> {

    state = {
        count: 0
    }

    handleClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return <>
            <div className="v-home">
                <div>
                    {this.state.count}
                </div>
                <button
                    className="btn"
                    onClick={this.handleClick}
                >
                    Toggle
                </button>
            </div>
        </>
    }
}