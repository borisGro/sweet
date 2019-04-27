import React from 'react';


export default class Name extends React.Component {

    render() {
        return (
            <div>
                <h3 className="header-name">
                 {this.props.name}
                 </h3>
            </div>
        )
    }
}