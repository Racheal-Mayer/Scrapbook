import React from 'react';
import { Link } from '@reach/router';
import '../App.css';
import S6 from './SeptImages/SEP6.JPG';
import S9 from './SeptImages/SEP9.JPG';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class extends React.Component {
    render() {
        return (
    <div className="container2"> 
        <CarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={83}
        totalSlides={2}>
        <Slider>
        <Slide index={1}><img src={S6} alt="" className="img"/></Slide>
        <Slide index={2}><img src={S9} alt="" className="img"/></Slide>
        </Slider>
        <ButtonBack id="up" className="but btn btn-outline-dark">Back</ButtonBack>
        <ButtonNext id="up" className="btn btn-outline-dark">Next</ButtonNext>
        </CarouselProvider>
    
    </div>
        );
    }
}
