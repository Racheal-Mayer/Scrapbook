import React from 'react';
import { Link } from '@reach/router';
import '../App.css';
import AP from './AprilImages/APRIL.JPG';
import A1 from './AprilImages/APRIL1.JPG';
import A2 from './AprilImages/APRIL2.JPG';
import A3 from './AprilImages/APRIL3.JPG';
import A4 from './AprilImages/APRIL4.JPG';
import A5 from './AprilImages/APRIL5.JPG';
import A6 from './AprilImages/APRIL6.JPG';
import A8 from './AprilImages/APRIL8.JPG';
import A9 from './AprilImages/APRIL9.JPG';
import A10 from './AprilImages/APRIL10.JPG';
import A11 from './AprilImages/APRIL11.JPG';
import A12 from './AprilImages/APRIL12.JPG';
import A13 from './AprilImages/APRIL13.JPG';
import A14 from './AprilImages/APRIL14.JPG';
import A15 from './AprilImages/APRIL15.JPG';
import A17 from './AprilImages/APRIL17.JPG';
import A18 from './AprilImages/APRIL18.JPG';
import A19 from './AprilImages/APRIL19.JPG';
import A20 from './AprilImages/APRIL20.JPG';
import A21 from './AprilImages/APRIL21.JPG';
import A22 from './AprilImages/APRIL22.JPG';
import A24 from './AprilImages/APRIL24.JPG';
import A25 from './AprilImages/APRIL25.JPG';
import A26 from './AprilImages/APRIL26.JPG';
import A27 from './AprilImages/APRIL27.JPG';
import A28 from './AprilImages/APRIL28.JPG';
import A29 from './AprilImages/APRIL29.JPG';
import A30 from './AprilImages/APRIL30.JPG';
import A242 from './AprilImages/APRIL242.JPG';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class extends React.Component {
    render() {
        return (
    <div className="container2"> 
        <CarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={83}
        totalSlides={30}>
        <Slider>
        <Slide index={1}><img src={A1} alt="" className="img"/></Slide>
        <Slide index={2}><img src={A2} alt="" className="img"/></Slide>
        <Slide index={0}> <img src={A3} alt="" className="img"/> </Slide>
        <Slide index={1}><img src={A4} alt="" className="img"/></Slide>
        <Slide index={2}><img src={A5} alt="" className="img"/></Slide>
        <Slide index={2}><img src={A6} alt="" className="img"/></Slide>
        <Slide index={0}> <img src={AP} alt="" className="img"/> </Slide>
        <Slide index={2}><img src={A8} alt="" className="img"/></Slide>
        <Slide index={2}><img src={A9} alt="" className="img"/></Slide>
        <Slide index={2}><img src={A10} alt="" className="img"/></Slide>
        <Slide index={2}><img src={A11} alt="" className="img"/></Slide>
        <Slide index={2}><img src={A12} alt="" className="img"/></Slide>
        <Slide index={2}><img src={A13} alt="" className="img"/></Slide>
        <Slide index={2}><img src={A14} alt="" className="img"/></Slide>
        <Slide index={2}><img src={A15} alt="" className="img"/></Slide>
        <Slide index={2}><img src={A17} alt="" className="img"/></Slide>
        <Slide index={2}><img src={A18} alt="" className="img"/></Slide>
        <Slide index={2}><img src={A19} alt="" className="img"/></Slide>
        <Slide index={2}><img src={A20} alt="" className="img"/></Slide>
        <Slide index={2}><img src={A21} alt="" className="img"/></Slide>
        <Slide index={2}><img src={A22} alt="" className="img"/></Slide>
        <Slide index={2}><img src={A24} alt="" className="img"/></Slide>
        <Slide index={2}><img src={A242} alt="" className="img"/></Slide>
        <Slide index={2}><img src={A25} alt="" className="img"/></Slide>
        <Slide index={2}><img src={A26} alt="" className="img"/></Slide>
        <Slide index={2}><img src={A27} alt="" className="img"/></Slide>
        <Slide index={2}><img src={A28} alt="" className="img"/></Slide>
        <Slide index={2}><img src={A29} alt="" className="img"/></Slide>
        <Slide index={2}><img src={A30} alt="" className="img"/></Slide>
        </Slider>
        <ButtonBack className="but btn btn-outline-dark">Back</ButtonBack>
        <ButtonNext className="btn btn-outline-dark">Next</ButtonNext>
        </CarouselProvider>
    
    </div>
        );
    }
}
