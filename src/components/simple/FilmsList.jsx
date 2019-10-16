import React, { Component } from 'react';
import '../../styles/basic/filmsList.css';
import Film from './Film.jsx';
import axios from 'axios';
export default class FilmsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            open: false,
            isOpen: false,
            episode :"Episode IV",
            title: "A new Hope",
            para:"lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsum"


        };
        this.bindApiData= this.bindApiData.bind(this);
      }

      onOpenModal = ( epi, tit, parag) => {
        this.setState({ open: true, episode:epi,title:tit,para:parag});
        setTimeout(()=>{
            this.onCloseModal();
        },50000)
        };
        
        onCloseModal = () => {
        this.setState({ open: false });
        };
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
    romanize(num) {
        var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
        for ( i in lookup ) {
          while ( num >= lookup[i] ) {
            roman += i;
            num -= lookup[i];
          }
        }
        return roman;
      }
    render() {
        let films =(<div> No movies yet :( , Please check your internet connection !</div>);
        if(typeof this.state.data !== "undefined" && this.state.data.length>0){
            films =this.state.data.map(function(el,i){
                return <Film
                key ={i}
                id ={i}
                title={el.title}
                episode={el.episode_id}
                opening_crawl={el.opening_crawl}
                director={el.director}
                producer={el.producer}
                release_date={el.release_date}
                characters={el.characters}
                src={this.findsrcImage}
                click ={this.onOpenModal}
                />
            },this);
        }
        const { open } = this.state;
        return (
            <div>
                {open? <div className="modal_text">
                        <span class="close heavy" onClick={()=>{this.onCloseModal()}}></span>
                        <div></div>
                            <section class="star-wars">
                                <div class="crawl">
                                <div class="title">
                                    <p>Episode {this.romanize(parseInt(this.state.episode))}</p>
                                    <h1>{this.state.title}</h1>
                                </div>
                                <p>{this.state.para}</p>      
                                </div>
                            </section>
                        </div>:
                    <div className="container_films">
                        {films}
                    </div>
                }
            </div>
            
           
        )
    }
}
