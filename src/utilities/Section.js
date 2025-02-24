import React, { Component } from "react";

class Section extends Component {
    render() {
        return (
            <section className={this.props.className}>
                <h2 id="section">{this.props.title}</h2>

                <div id="content">
                    {this.props.children}
                </div>
            </section>
        );
    }
};

export default Section;