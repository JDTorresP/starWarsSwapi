import React, { Component } from 'react';
import FilmsList from '../simple/FilmsList.jsx';
import Stars from '../simple/Stars.jsx';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Stars/>
                <FilmsList/>
            </div>
        )
    }
}
