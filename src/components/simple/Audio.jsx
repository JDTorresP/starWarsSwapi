import React, { Component } from 'react';
import '../../styles/basic/audio.css';

export default class Audio extends Component {
    constructor(props) {
        super(props);
        this.state = {
           mute:true,
           srcMusic:"https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.mp3"
        };
      }
    switchQuietPls(){
        this.setState({mute:!this.state.mute},this.checkAudio());
    }
    checkAudio(){
        var player = document.getElementById('radio');
        setTimeout(()=>{
            if(this.state.mute === true){
                player.pause();
            }else if(this.state.mute === false){
                player.src = this.state.srcMusic;
                player.load();
                player.currentTime=0;
                player.play();
            }
        }, 10);      
    }
    render() {
        let clBar="bar", mtB="",atP=1;
        if(this.state.mute===true){
            clBar="bar noAnim";
            mtB="mute";
            atP=0;
        }
        
        return (
            <div>
                <div className={mtB}>
                    <audio id="radio" preload="auto" autoPlay={atP}>
                    <source src={this.state.srcMusic} type="audio/mpeg"/>
                    </audio>
                </div>
                <div id="bars" onClick={()=>{this.switchQuietPls();}}>
                    <div className={clBar}></div>
                    <div className={clBar}></div>
                    <div className={clBar}></div>
                    <div className={clBar}></div>
                    <div className={clBar}></div>
                    <div className={clBar}></div>
                    <div className={clBar}></div>
                    <div className={clBar}></div>
                </div>
            </div>
        )
    }
}
