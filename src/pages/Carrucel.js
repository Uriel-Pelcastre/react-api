import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

export const Carrucel = () => {

    const style = {
        height: '500px'
    };
    return (
        <div>

            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="w-100"
                        style={style}
                        src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="w-100"
                        style={style}
                        src="https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="w-100"
                        style={style}
                        src="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
};
