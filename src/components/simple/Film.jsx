import React, { Component } from 'react';
import '../../styles/basic/film.css';
import { Link } from "react-router-dom";

const images=[
    {name:'A New Hope',src:'https://res.cloudinary.com/caavat/image/upload/v1571184507/rappi/posters/anewhope-01.png'},
    {name:'Attack of the Clones',src:'https://res.cloudinary.com/caavat/image/upload/v1571184508/rappi/posters/attackclone-01.png'},
    {name:'The Phantom Menace',src:'https://res.cloudinary.com/caavat/image/upload/v1571184510/rappi/posters/aphantom-01.png'},
    {name:'Revenge of the Sith',src:'https://res.cloudinary.com/caavat/image/upload/v1571184513/rappi/posters/revengeof-01.png'},
    {name:'Return of the Jedi',src:'https://res.cloudinary.com/caavat/image/upload/v1571184518/rappi/posters/returnofjedi-01.png'},
    {name:'The Empire Strikes Back',src:'https://res.cloudinary.com/caavat/image/upload/v1571184506/rappi/posters/empirestrikes-01.png'},
    {name:'The Force Awakens',src:'https://res.cloudinary.com/caavat/image/upload/v1571184510/rappi/posters/forceawake-01.png'},
]
export default class Film extends Component {
    findsrcImage(nameP){
        let re= images.filter((i)=>{
            return i.name===nameP
        })
        return re;
    }
    getIdCharacter(el){
        return 1
    }

    render() {
        let imgSrc=this.findsrcImage(this.props.title);
        let src =""
        console.log(imgSrc);
        if(typeof imgSrc !== "undefined" && imgSrc.length>0){
            src =imgSrc[0].src;
        }
        let charAvatars=this.props.characters.map(function(el,i){
            return <li key={i}>
                     <Link  to={`/characters/${this.getIdCharacter(el)}`} >
                        <img src = {'https://res.cloudinary.com/caavat/image/upload/v1571189010/rappi/icons/icons-'+Math.floor(Math.random() * 15)+'.png'} alt="character_image"/>
                     </Link>
                    </li>
           
        },this);

        return (
            <div className="card">
                <div className="poster">
                    <img src = {src} alt="movieposter"/>
                </div>
                <div className="details">
                <h2>{this.props.title}<br/><span>Director: {this.props.director}</span><br/><span>Producer: {this.props.producer}</span></h2>

                <div className="rating">
                    <span>Chapter: {this.props.episode}</span>
                </div>

                <div className="tags">
                    <span className="scifi">Sci Fi</span>
                </div>

                <div className="info">
                    <p>{this.props.opening_crawl}</p>
                </div>

                <div className="star">
                    <h4>Cast</h4>
                    <ul>
                        {charAvatars}
                    </ul>
                </div>
                </div>
            </div>
        )
    }
}
