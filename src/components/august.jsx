import React from 'react';
import { Link } from '@reach/router';
import '../App.css';
import A3 from './AugImages/AUG3.JPG';
import A6 from './AugImages/AUG6.JPG';
import A62 from './AugImages/AUG62.JPG';
import A12 from './AugImages/AUG12.JPG';
import A16 from './AugImages/AUG16.JPG';
import A20 from './AugImages/AUG20.JPG';
import A21 from './AugImages/AUG21.JPG';
import A22 from './AugImages/AUG22.JPG';
import A222 from './AugImages/AUG222.JPG';
import A24 from './AugImages/AUG24.JPG';


import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class extends React.Component {
    render() {
        return (
    <div className="container2"> 
        <CarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={83}
        totalSlides={10}>
        <Slider>
        <Slide index={1}><img src={A3} alt="" className="img"/></Slide>
        <Slide index={1}><img src={A6} alt="" className="img"/></Slide>
        <Slide index={1}><img src={A62} alt="" className="img"/></Slide>
        <Slide index={1}><img src={A12} alt="" className="img"/></Slide>
        <Slide index={1}><img src={A16} alt="" className="img"/></Slide>
        <Slide index={1}><img src={A20} alt="" className="img"/></Slide>
        <Slide index={1}><img src={A21} alt="" className="img"/></Slide>
        <Slide index={1}><img src={A22} alt="" className="img"/></Slide>
        <Slide index={1}><img src={A222} alt="" className="img"/></Slide>
        <Slide index={1}><img src={A24} alt="" className="img"/></Slide>
        </Slider>
        <ButtonBack className="but btn btn-outline-dark">Back</ButtonBack>
        <ButtonNext className="btn btn-outline-dark">Next</ButtonNext>
        </CarouselProvider>
    </div>
        );
    }
}
