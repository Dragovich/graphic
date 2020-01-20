import React from "react"

export default (props) => (
    <div className="Input">
        <div>y</div>
        <input
            type="text"
            value={props.y}
            name="y"
            onChange={props.updateY}
        />
        <div>x0</div>
        <input
            type="number"
            name="x0"
            value={props.x0}
            onChange={props.updateX0}
        />
        <div>x1</div>
        <input
            type="number"
            value={props.x1}
            name="x1"
            onChange={props.updateX1}
        />
        <br/>
        <br/>
    </div>
)
