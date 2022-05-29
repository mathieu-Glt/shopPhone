import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class BootstrapCarousel extends React.Component {
    render() {
        return (
                <div className='container-fluid' >
                    <div className="row">
                        <div className="col-sm-6">
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Carousel>
                            <Carousel.Item>
                                    <img
                                        className="d-block vh-30 w-100 img-fluid "
                                        src={process.env.PUBLIC_URL + `/image/iphone.jpeg`}
                                        alt="First slide Responsive image"
                                        
                                    />
                                    <Carousel.Caption>
                                        <h3 className='iphone11'><span>iP</span>hone 11 Pro Max</h3>
                                    </Carousel.Caption>

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block vh-30 w-100 img-fluid "
                                        src={process.env.PUBLIC_URL + `/images/iphoneseven.jpg`}
                                        alt="Second slide Responsive image"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block  vh-30 w-100 img-fluid "
                                        src={process.env.PUBLIC_URL + `/images/iphone11.jpg`}
                                        alt="Third slide Responsive image"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block vh-30 w-100 img-fluid "
                                        src={process.env.PUBLIC_URL + `/images/iphone12.jpg`}
                                        alt="Third slide Responsive image"
                                    />
                                    <Carousel.Caption>
                                        <h3>iPhone 12</h3>
                                    </Carousel.Caption>

                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 img-fluid "
                                        src={process.env.PUBLIC_URL + `/images/iPhone-XS.jpg`}
                                        alt="Third slide Responsive image"
                                    />
                                </Carousel.Item>



                            </Carousel>
                        </div>
                    </div>
                </div>
        )
    };
}
export default BootstrapCarousel;




