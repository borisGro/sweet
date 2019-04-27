import React from 'react';


export default class Love extends React.Component {

constructor() {
    super();
    this.state = {
        loved: false
    };
    this.handleLoveClick =
    this.handleLoveClick.bind(this);
}

handleLoveClick() {
    this.setState({
        loved: !this.state.loved
    });
}

    render() {
        const heart = this.state.loved ?
    <span role="img" aria-label="Empty Heart emoji">🖤 Unlove </span> : <span role="img" aria-label="Whole Heart emoji">❤️ Love </span>

        return (
        <div className="love-container">
        <button className="love-btn" onClick={this.handleLoveClick}>{heart}</button>
        </div>
        )
    }
}