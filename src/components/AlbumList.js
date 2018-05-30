import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = {
        albums: [],
    }

    componentWillMount = () => {
        this.getAlbums();
    }

    getAlbums = async () => {
        let response = await fetch(
            'https://rallycoding.herokuapp.com/api/music_albums'
        );
        let albums = await response.json()
        this.setState((prevState, props) => {
            return { albums: [...prevState, ...albums] }
        });
    }

    renderAlbums = () => (
        this.state.albums.map(album => <AlbumDetail key={ album.title } album={ album }/>)
    )

    render() {
        return (
            <ScrollView>
              { this.renderAlbums() }
            </ScrollView>
        )
    };
}

export default AlbumList
