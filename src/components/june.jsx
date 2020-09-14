import React from 'react';
import { Link } from '@reach/router';
import '../App.css';
import J1 from './JuneImages/JUNE1.JPG';
import J5 from './JuneImages/JUNE5.JPG';
import J6 from './JuneImages/JUNE6.JPG';
import J7 from './JuneImages/JUNE7.JPG';
import J8 from './JuneImages/JUNE8.JPG';
import J9 from './JuneImages/JUNE9.JPG';
import J13 from './JuneImages/JUNE13.JPG';
import J16 from './JuneImages/JUNE16.JPG';
import J17 from './JuneImages/JUNE17.JPG';
import J19 from './JuneImages/JUNE19.JPG';
import J20 from './JuneImages/JUNE20.JPG';
import J21 from './JuneImages/JUNE21.JPG';
import J23 from './JuneImages/JUNE23.JPG';
import J24 from './JuneImages/JUNE24.JPG';
import J25 from './JuneImages/JUNE25.JPG';
import J27 from './JuneImages/JUNE27.JPG';
import J30 from './JuneImages/JUNE30.JPG';
import J52 from './JuneImages/JUNE52.JPG';
import J53 from './JuneImages/JUNE53.JPG';
import J192 from './JuneImages/JUNE192.JPG';
import J202 from './JuneImages/JUNE202.JPG';
import J222 from './JuneImages/JUNE222.JPG';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class extends React.Component {
    render() {
        return (
    <div className="container2"> 
        <CarouselProvider
        naturalSlideWidth={200}
        naturalSlideHeight={83}
        totalSlides={21}>
        <Slider>
        <Slide index={1}><img src={J1} alt="" className="img"/></Slide>
        <Slide index={2}><img src={J5} alt="" className="img"/></Slide>
        <Slide index={0}> <img src={J52} alt="" className="img"/> </Slide>
        <Slide index={1}><img src={J53} alt="" className="img"/></Slide>
        <Slide index={2}><img src={J6} alt="" className="img"/></Slide>
        <Slide index={2}><img src={J7} alt="" className="img"/></Slide>
        <Slide index={0}> <img src={J8} alt="" className="img"/> </Slide>
        <Slide index={2}><img src={J9} alt="" className="img"/></Slide>
        <Slide index={2}><img src={J13} alt="" className="img"/></Slide>
        <Slide index={2}><img src={J16} alt="" className="img"/></Slide>
        <Slide index={2}><img src={J17} alt="" className="img"/></Slide>
        <Slide index={2}><img src={J19} alt="" className="img"/></Slide>
        <Slide index={2}><img src={J20} alt="" className="img"/></Slide>
        <Slide index={2}><img src={J202} alt="" className="img"/></Slide>
        <Slide index={2}><img src={J21} alt="" className="img"/></Slide>
        <Slide index={2}><img src={J222} alt="" className="img"/></Slide>
        <Slide index={2}><img src={J23} alt="" className="img"/></Slide>
        <Slide index={2}><img src={J24} alt="" className="img"/></Slide>
        <Slide index={2}><img src={J25} alt="" className="img"/></Slide>
        <Slide index={2}><img src={J27} alt="" className="img"/></Slide>
        <Slide index={2}><img src={J30} alt="" className="img"/></Slide>
        </Slider>
        <ButtonBack className="but btn btn-outline-dark">Back</ButtonBack>
        <ButtonNext className="btn btn-outline-dark">Next</ButtonNext>
        </CarouselProvider>
    </div>
        );
    }
}
