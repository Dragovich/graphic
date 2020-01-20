import React, {Component} from 'react';

class Graphic extends Component {
    updateGraphic = () => {
        const x0 = parseInt(this.props.x0)
        const x1 = parseInt(this.props.x1)
        const y = this.props.y
        const firstSegment = -x0
        const secondSegment = x1
        const sumSegment = firstSegment + secondSegment
        const firstSegmentPath = firstSegment / sumSegment
        let a, b;
        const coefficient = ([a, b] = y.split(/x\+?/), 1 / b ? [a || 1, b || 0] : [0, y])
        const startFrom = (firstSegment + parseInt(coefficient[1])) / sumSegment

        const canvas = document.getElementById('canvas')
        if (canvas.getContext) {
            const ctx = canvas.getContext('2d')

            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.beginPath()

            ctx.moveTo(0, 100)
            ctx.lineTo(200, 100)

            if ((x0 < 0) && (x1 > 0)) {
                // os' y
                ctx.moveTo(200 * firstSegmentPath, 0)
                ctx.lineTo(200 * firstSegmentPath, 200)
            }

            // os' x
            ctx.strokeText(x0, 10, 95)
            ctx.strokeText(x1, 185, 95)

            // line
            ctx.fillStyle = 'red';
            ctx.translate(200 * startFrom, 100);
            ctx.rotate(-Math.atan(coefficient[0]));
            ctx.fillRect(0,0,200,0.5);
            ctx.rotate(Math.PI);
            ctx.fillRect(0,0,200,0.5);
            ctx.setTransform(1, 0, 0, 1, 0, 1);

            ctx.stroke()
        }
    }

    componentDidMount() {
        this.updateGraphic()
    }

    componentDidUpdate() {
        this.updateGraphic()

    }

    render() {
        return (
            <div className="Graphic" style={{border: "0.5px solid green", width: 200, height: 200, margin: "0 auto"}}>
                <canvas id="canvas" width="200px" height="200px"/>
            </div>
        )
    }
}

export default Graphic
