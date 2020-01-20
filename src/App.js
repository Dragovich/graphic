import React, {Component} from 'react'
import Input from './Input/Input'
import Graphic from './Graphic/Graphic'
import './App.css'

class App extends Component {
    state = {
        x0: -10.0,
        x1: 5.0,
        y: "-3x-3",
    }

    updateX0 = (e) => {
        if (this.state.x1 > parseInt(e.target.value))
            this.setState({
                x0: e.target.value
            })
    }

    updateX1 = (e) => {
        if (this.state.x0 < parseInt(e.target.value))
            this.setState({
                x1: e.target.value
            })
    }

    updateY = (e) => {
        this.setState({
            y: e.target.value === "" || e.target.value === "-" ? "1x" : e.target.value
        })
    }

    render() {
        return (
            <div style={{textAlign: "center", verticalAlign: "middle"}}>
                <div>y = {this.state.y}</div>
                <br/>
                <Graphic
                    x0={this.state.x0}
                    x1={this.state.x1}
                    y={this.state.y}
                />
                <br/>
                <Input
                    x0={this.state.x0}
                    x1={this.state.x1}
                    y={this.state.y}
                    updateX0={e => this.updateX0(e)}
                    updateX1={e => this.updateX1(e)}
                    updateY={e => this.updateY(e)}
                />
            </div>
        )
    }
}

export default App
