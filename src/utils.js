import React, { Component } from "react";

class Spoiler extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: false };
    }

    render() {
        return (
            <React.Fragment>
                <h2 id="spoiler">{this.state.visible ? "⮟" : "⮞"} {this.props.title}</h2>

                {this.state.visible && 
                    <div id="content">
                        {this.props.children}
                    </div>
                }
            
                <div className="toggle">
                    <input className="button" type="button" value={this.state.visible ? "Hide" : "Spoiler!"} onClick={() => this.setState({ visible: !this.state.visible })}/>
                </div>
            </React.Fragment>
        );
    }
};

export default Spoiler;