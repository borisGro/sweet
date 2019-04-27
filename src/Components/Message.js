import React from 'react'

export default class Message extends React.Component {

    render() {
        return (

            <div className="message-container">
                <h1 className="message-text"> 
                   {this.props.message} 
                </h1>
            </div>
        )
    }
}