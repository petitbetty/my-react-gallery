import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';

let options = {
  galleryItems: [
    { id: 1, title: "Cute Puppies", subtitle: "Cute Puppies", image: "http://images5.fanpop.com/image/photos/31100000/cute-puppies-puppies-and-more-31104113-1024-768.jpg", liked: true },
    { id: 2, title: "Pink Turnip", subtitle: "Pink Turnip", image: "http://www.desicomments.com/wp-content/uploads/2017/01/Beautiful-Tulip-Flower-Image.jpg" },
    { id: 3, title: "Beautiful Sunset", subtitle: "Beautiful Sunset", image: "http://images.boomsbeat.com/data/images/full/17078/sunset_1-jpg.jpg" }
  ]
};


let element = React.createElement(App, options);
render(element, document.querySelector('.container'));