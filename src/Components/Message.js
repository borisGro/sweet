import React from 'react'

export default class Message extends React.Component {

    render() {
        return (

            <div className="message-container">
                <div className="message-text"> 
                   {this.props.message} 
               </div>
            </div>
        )
    }
}