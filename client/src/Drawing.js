import React, { Component } from 'react';
import Canvas from 'simple-react-canvas';

class Drawing extends Component {
    render() {
        return (this.props.drawing) ? (
            <div className="Drawing">
                <div className="Drawing-title">
                    {this.props.drawing.name}
                    <Canvas drawingEnabled={true} />
                </div>
            </div>
        ) : null;
    }
}

export default Drawing;