import React, { Component } from "react";

class Popup extends Component {
    render() {
        return (
            <React.Fragment>
                {/* This will cover the behind of the popup and when the user clicks out it will close the popup */}
                {this.props.visible && (<div className="clickable" onClick={this.props.onClose}/>)}

                {/* This will display the popup */}
                {this.props.visible && (
                    <div className="popup">
                        <div className="popup-header">
                            <h2 className="popup-title">{this.props.title}</h2>
                        </div>
                        <div className="popup-content">
                            {this.props.children}
                        </div>
                    </div>
            )}
            </React.Fragment>
        );
    }
}

export default Popup;