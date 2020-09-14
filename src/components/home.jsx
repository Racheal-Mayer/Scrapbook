import React from 'react';
import { Link } from '@reach/router';
import '../App.css';
import M16 from './MarchImages/M16.JPG';
import M18 from './MarchImages/MARCH18.JPG';
import M19 from './MarchImages/MARCH19.JPG';
import M20 from './MarchImages/MARCH20.JPG';
import M21 from './MarchImages/MARCH21.JPG';
import M22 from './MarchImages/MARCH22.JPG';
import M23 from './MarchImages/MARCH23.JPG';
import M24 from './MarchImages/MARCH24.JPG';
import M25 from './MarchImages/MARCH25.JPG';
import M27 from './MarchImages/MARCH27.JPG';
import M28 from './MarchImages/MARCH28.JPG';
import M29 from './MarchImages/MARCH29.JPG';
import M30 from './MarchImages/MARCH30.JPG';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class extends React.Component {
    render() {
        return (
    <div className="container2"> 
        <CarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={83}
        totalSlides={13}>
        <Slider>
        <Slide index={0}> <img src={M16} alt="" className="img"/> </Slide>
        <Slide index={1}><img src={M18} alt="" className="img"/></Slide>
        <Slide index={2}><img src={M19} alt="" className="img"/></Slide>
        <Slide index={0}> <img src={M20} alt="" className="img"/> </Slide>
        <Slide index={1}><img src={M21} alt="" className="img"/></Slide>
        <Slide index={2}><img src={M22} alt="" className="img"/></Slide>
        <Slide index={2}><img src={M23} alt="" className="img"/></Slide>
        <Slide index={2}><img src={M24} alt="" className="img"/></Slide>
        <Slide index={2}><img src={M25} alt="" className="img"/></Slide>
        <Slide index={2}><img src={M27} alt="" className="img"/></Slide>
        <Slide index={2}><img src={M28} alt="" className="img"/></Slide>
        <Slide index={2}><img src={M29} alt="" className="img"/></Slide>
        <Slide index={2}><img src={M30} alt="" className="img"/></Slide>
        </Slider>
        <ButtonBack className="but btn btn-outline-dark">Back</ButtonBack>
        <ButtonNext className="btn btn-outline-dark">Next</ButtonNext>
        </CarouselProvider>
    
    </div>
        );
    }
}
