import React from 'react';
import { Link } from '@reach/router';
import '../App.css';
import M1 from './MayImages/MAY1.JPG';
import M2 from './MayImages/MAY2.JPG';
import M4 from './MayImages/MAY4.JPG';
import M5 from './MayImages/MAY5.JPG';
import M6 from './MayImages/MAY6.JPG';
import M8 from './MayImages/MAY8.JPG';
import M9 from './MayImages/MAY9.JPG';
import M12 from './MayImages/MAY12.JPG';
import M13 from './MayImages/MAY13.JPG';
import M15 from './MayImages/MAY15.JPG';
import M16 from './MayImages/MAY16.JPG';
import M22 from './MayImages/MAY22.JPG';
import M24 from './MayImages/MAY24.JPG';
import M29 from './MayImages/MAY29.JPG';
import M31 from './MayImages/MAY31.JPG';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class extends React.Component {
    render() {
        return (
    <div className="container2"> 
        <CarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={83}
        totalSlides={15}>
        <Slider>
        <Slide index={1}><img src={M1} alt="" className="img"/></Slide>
        <Slide index={2}><img src={M2} alt="" className="img"/></Slide>
        <Slide index={0}> <img src={M4} alt="" className="img"/> </Slide>
        <Slide index={1}><img src={M5} alt="" className="img"/></Slide>
        <Slide index={2}><img src={M6} alt="" className="img"/></Slide>
        <Slide index={2}><img src={M8} alt="" className="img"/></Slide>
        <Slide index={0}> <img src={M9} alt="" className="img"/> </Slide>
        <Slide index={2}><img src={M12} alt="" className="img"/></Slide>
        <Slide index={2}><img src={M13} alt="" className="img"/></Slide>
        <Slide index={2}><img src={M15} alt="" className="img"/></Slide>
        <Slide index={2}><img src={M16} alt="" className="img"/></Slide>
        <Slide index={2}><img src={M22} alt="" className="img"/></Slide>
        <Slide index={2}><img src={M24} alt="" className="img"/></Slide>
        <Slide index={2}><img src={M29} alt="" className="img"/></Slide>
        <Slide index={2}><img src={M31} alt="" className="img"/></Slide>
        </Slider>
        <ButtonBack className="but btn btn-outline-dark">Back</ButtonBack>
        <ButtonNext className="btn btn-outline-dark">Next</ButtonNext>
        </CarouselProvider>
    
    </div>
        );
    }
}
