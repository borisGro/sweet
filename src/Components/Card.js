import React from 'react';
import Avatar from './Avatar';
import Message from './Message';
import Name from './Name';
import Love from './Love';

export default class Card extends React.Component {

    render() {
        return (
      <div className="card-container">
         <div className="main-content">
                <Avatar avatar= {this.props.avatar} />
                <Name name= {this.props.name} />
                <Message message= {this.props.message} />
        </div>
        <div className="foot-content">
                <Love />

        </div>
            </div>
        )
    }
}