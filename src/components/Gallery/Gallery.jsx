import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';
import s from './Gallery.scss';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.renderItems = this.renderItems.bind(this);
    }
    renderItems() {
        return this.props.items.map(function (item) {
           return <GalleryItem key={item.id} {...item} />
        });
    }

    // use blueimp to show the slideshow on click
    componentDidMount() {
       let links = document.getElementsByClassName('gallery');
       $('.gallery').off('click').bind('click', event => {
            blueimp.Gallery(links, {
                index: event.currentTarget,
                event: event
            });
       });
    }

    render() {
        return (
            <div className ="row" >
                {this.renderItems()}
             </div>   
        );
    }
};

export default Gallery ;