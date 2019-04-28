import React from "react";

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
                 <div>fetching...</div>
             ) : ( 
              <div>
                  <div>{this.state.person.name.first}</div>
                  <div>{this.state.person.name.last}</div>
                  <img src={this.state.person.picture.medium} />
                  <div >{this.state.quote} </div>
              </div>
        
             )}
             </div>
             )
        }
    }