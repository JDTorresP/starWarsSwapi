import React, { Component } from 'react';
import Stars from '../simple/Stars.jsx';
import Character from '../simple/Character.jsx';
import '../../styles/basic/characters.css'; 
import axios from 'axios';
export default class Characters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            todos:true,
            id_movie:1
        };
        this.bindApiData= this.bindApiData.bind(this);
      }

      componentDidMount(){
          if (typeof this.props.match.params.id !== "undefined"){
              this.setState({todos:false,id_movie:this.props.match.params.id})
              this.bindApiData(this.props.match.params.id);
          }else{
              this.bindApiData("NA");
          } 
      }
     bindApiData(id){
         if(id==="NA"){
            let URL = "https://swapi.co/api/";
            axios.get(URL +"people")
            .then(response => {
                this.setState({data:response.data.results});
            })
            .catch((error) => {
                console.log('error ' + error);
            });
         }else{
            let URL = "https://swapi.co/api/films/";
            axios.get(URL+id)
            .then(response => {
                this.setState({data_movie:response.data, data:response.data.characters});
                 console.log('los meros datos ' + JSON.stringify(response.data, null, 4));
            })
            .catch((error) => {
                console.log('error ' + error);
            });
         }
        
    }
    render() {
        let  title=(<div className="titulo_Seccion"> <h1>Loading people ...</h1></div>);
        let characters =(<div> There are no characters right now :( , Please check your internet connection !</div>);
        if(this.state.todos){
            title=<div className="titulo_Seccion"> <h1>All the main Characters</h1></div>;
        }else{
            if(typeof this.state.data_movie !== "undefined")
            title=<div className="titulo_Seccion"> <h1>Main Characters of {this.state.data_movie.title}</h1></div>;
        }
        if(typeof this.state.data !== "undefined" && this.state.data.length>0){
            characters =this.state.data.map(function(el,i){
                return <Character
                key ={i}
                src ={el}
                />
            },this);
        }
        
        return (
            <div>
                <Stars/>
                {title}
                <div className="container_films">
                    {characters}
                </div>
            </div>
        )
    }
}
