import React, { Component } from 'react';
import '../../styles/complex/character.css';
import '../../styles/basic/filmsList.css';
import axios from 'axios';
export default class Character extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            movies:[],
            class_card:"card2"
        };
        this.bindApiData= this.bindApiData.bind(this);
      }
      componentDidMount(){
        this.bindApiData();
     }
     bindApiData(){
        let URL = this.props.src;
        if (typeof this.props.match !== "undefined"){
            URL = "https://swapi.co/api/people/"+this.props.match.params.id;  
            this.setState({class_card:"card3"});  
            axios.get(URL)
            .then(response => {
                this.setState({data:response.data});
            })
            .catch((error) => {
                console.log('error ' + error);
            }); 
        }else{
            this.setState({data:URL});
        }
       
       
    }
   getNamesMovie(el){
    axios.get(el)
    .then(response => {
        this.setState({movies:this.state.movies.push({name:response.data.title,phrase:response.data.opening_crawl})})
    })
    .catch((error) => {
        console.log('error ' + error);
    });
   }
    render() {
        return (
            <div className={this.state.class_card}>
                <div className="character_title"> <h2>NAME: {this.state.data.name}</h2></div>
                <p>Eye Color: {this.state.data.eye_color}</p>
                <p>Gender: {this.state.data.gender}</p>
                <p>Skin Color: {this.state.data.skin_color}</p>
                <p>Birth Year: {this.state.data.birth_year}</p>
                <p>Height: {this.state.data.height}</p>
             </div>
        )
    }
}
