import React, { Component } from "react"
import axios from 'axios'
const StateContext = React.createContext()

class StateContextProvider extends Component {
    state = {
        data: [],
    }

    getInfo = () => {
        axios
            .get('https://www.scorebat.com/video-api/v1/')
            .then((d) => {
                this.setState({
                    data: d.data
                })
            })
            .catch((error) => console.log(error))
    }

    getEmbed = (input) => {
        const EMBED_REGEX = /https([0-9]|[^0-9])+/gm
        const matches = input.toString().match(EMBED_REGEX)
        if (matches === null) {
            return null
        }
        if (matches.length > 1) {
            return null
        }
        return matches[0].slice(0, 97)
    }

    render() {
        return (
            <StateContext.Provider value={{ data: this.state.data, getInfo: this.getInfo, getEmbed: this.getEmbed }}>
                {this.props.children}
            </StateContext.Provider>
        )
    }
}

export { StateContextProvider, StateContext }