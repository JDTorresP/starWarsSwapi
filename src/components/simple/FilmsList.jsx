import React, { Component } from 'react';
import '../../styles/basic/filmsList.css';
import Film from './Film.jsx';
import axios from 'axios';

export default class FilmsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[]
        };
        this.bindApiData= this.bindApiData.bind(this);
      }

    componentDidMount(){
        this.bindApiData();
     }
     bindApiData(){
        let URL = "https://swapi.co/api/";
        axios.get(URL +"films")
        .then(response => {
            this.setState({data:response.data.results});
            //console.dir('los meros datos ' + JSON.stringify(response.data.results, null, 4));
        })
        .catch((error) => {
            console.log('error ' + error);
        });
    }
    render() {
        let films =(<div> No movies yet :( , Please check your internet connection !</div>);
        if(typeof this.state.data !== "undefined" && this.state.data.length>0){
            films =this.state.data.map(function(el,i){
                return <Film
                key ={i}
                title={el.title}
                episode={el.episode_id}
                opening_crawl={el.opening_crawl}
                director={el.director}
                producer={el.producer}
                release_date={el.release_date}
                characters={el.characters}
                src={this.findsrcImage}
                />
            },this);
        }
        return (
            <div className="container_films">
                {films}
            </div>
           
        )
    }
}
