import React from "react";
import Love from "./Love";
import Loader from './Loader'

export default class DataFetcher extends React.Component {

constructor(props) {
    super(props);


    this.state = {
        loading: true,
        person: null,
        quote: null,
    }

}
    async componentDidMount() {
     const url = "https://api.randomuser.me/";
     const quoteUrl = "https://api.kanye.rest/";
     const response = await fetch(url);
     const quoteLoaded = await fetch(quoteUrl)
     const data = await response.json();
     const quoteText = await quoteLoaded.json();
     this.setState({person: data.results[0], quote: quoteText.quote,  loading: false})
    }

    render() {
        return (
        <div> 
            {this.state.loading || !this.state.person ? (
                 <div><Loader /></div>
             ) : ( 
              <div className="card-container">
                  <img className="avatar" src={this.state.person.picture.medium} />
                  <div className="header-name"><h3>{this.state.person.name.first} {this.state.person.name.last}</h3></div>
                  <div className="message-container">
                    <div className="message-text">{this.state.quote}</div>
                  </div>
                  <Love />
              </div>
        
             )}
             </div>
             )
        }
    }