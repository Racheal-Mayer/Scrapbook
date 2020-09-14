import React from 'react';
import { Link } from '@reach/router';
import '../App.css';
import J1 from './JulyImages/JULY1.JPG';
import J4 from './JulyImages/JULY4.JPG';
import J7 from './JulyImages/JULY7.JPG';
import J8 from './JulyImages/JULY8.JPG';
import J10 from './JulyImages/JULY10.JPG';
import J11 from './JulyImages/JULY11.JPG';
import J17 from './JulyImages/JULY17.JPG';
import J24 from './JulyImages/JULY24.JPG';
import J25 from './JulyImages/JULY25.JPG';
import J27 from './JulyImages/JULY27.JPG';
import J31 from './JulyImages/JULY31.JPG';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class extends React.Component {
    render() {
        return (
    <div className="container2"> 
        <CarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={83}
        totalSlides={11}>
        <Slider>
        <Slide index={1}><img src={J1} alt="" className="img"/></Slide>
        <Slide index={2}><img src={J4} alt="" className="img"/></Slide>
        <Slide index={0}> <img src={J7} alt="" className="img"/> </Slide>
        <Slide index={1}><img src={J8} alt="" className="img"/></Slide>
        <Slide index={2}><img src={J10} alt="" className="img"/></Slide>
        <Slide index={2}><img src={J11} alt="" className="img"/></Slide>
        <Slide index={0}> <img src={J17} alt="" className="img"/> </Slide>
        <Slide index={2}><img src={J24} alt="" className="img"/></Slide>
        <Slide index={2}><img src={J25} alt="" className="img"/></Slide>
        <Slide index={2}><img src={J27} alt="" className="img"/></Slide>
        <Slide index={2}><img src={J31} alt="" className="img"/></Slide>
        </Slider>
        <ButtonBack className="but btn btn-outline-dark">Back</ButtonBack>
        <ButtonNext className="btn btn-outline-dark">Next</ButtonNext>
        </CarouselProvider>
    </div>
        );
    }
}
