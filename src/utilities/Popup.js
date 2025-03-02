import React, { Component } from "react";
import { motion } from "framer-motion";

class Popup extends Component {
    render() {
        return (
            <React.Fragment>
            {/* This will cover the behind of the popup and when the user clicks out it will close the popup */}
            {this.props.visible && (<div className="clickable" onClick={this.props.onClose}/>)}

            {/* This will display the popup */}
            {this.props.visible && (
                <motion.div className="popup" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="popup-header">
                        <h2 className="popup-title">{this.props.title}</h2>
                    </div>
                    <div className="popup-content">
                        {this.props.children}
                    </div>
                </motion.div>
            )}
            </React.Fragment>
        );
    }
}

export default Popup;