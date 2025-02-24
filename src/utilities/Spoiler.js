import React, { Component } from "react";

class Spoiler extends Component {
    constructor(props) {
        super(props);
        this.state = { visible: props.visible || false, noToggle: props.noToggle || false };
    }

    render() {
        return (
            <React.Fragment>
                <section>
                    {!this.state.noToggle && (<h2 id="spoiler">{this.state.visible ? "⮟" : "⮞"} {this.props.title}</h2>)}
                    {this.state.noToggle && (<h2 id="spoiler">{this.props.title}</h2>)}

                    {this.state.visible && (
                        <div id="content">
                            {this.props.children}
                        </div>
                    )}

                    {!this.state.noToggle && (
                        <div className="toggle">
                            <input className="button" type="button" value={this.state.visible ? "Hide" : "Spoiler!"} onClick={() => this.setState({ visible: !this.state.visible })}/>
                        </div>
                    )}
                </section>
            </React.Fragment>
        );
    }
};

export default Spoiler;