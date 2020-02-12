import React, {Component} from 'react';
import './Home.css'

class Home extends Component {
    render() {
        let heading = 'Soaring to new Heights';
        let subHeading = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s';

        return (
            <div className="hello">
                <section className="hero">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">{heading}</h1>
                            <div className="is-two-thirds column is-paddingless">
                                <h2 className="subtitle is-4">{subHeading}</h2>
                            </div>
                            <a className="button is-large is-primary" id="learn">Learn More</a>
                        </div>
                    </div>
                </section>
                <section className="section">
                    <div className="container">
                        <div className="columns pd is-desktop">
                            <div className="column is-1 has-text-centered">
                                <i className="fa fa-cog is-primary"/>
                            </div>
                            <div className="column is-one-third-desktop">
                                <p className="title">
                                    <strong>We provide superiod logistics so that your business can succeed in a crazy
                                        world</strong>
                                </p>
                            </div>
                            <div className="column">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate nunc
                                    eget tristique
                                    porttitor. Sed eu faucibus justo, lobortis posuere lacus. Nulla venenatis magna quis
                                    felis lacinia, eu
                                    sagittis sem laoreet.
                                </p>
                            </div>

                        </div>
                    </div>
                    <div className="columns pd">
                        <div className="column">
                            <div className="card">
                                <div className="card-content">
                                    <p className="title">
                                        "Praesent viverra quam nec velit commodo ultrices. Morbi tempor a velit sit amet
                                        porta. Donec non velit vulputate, pellentesque dui sed, cursus elit."
                                    </p>
                                    <p className="subtitle">
                                        - Lorem Ipsum
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <div className="card-content">
                                    <p className="title">
                                        "Praesent viverra quam nec velit commodo ultrices. Morbi tempor a velit sit amet
                                        porta. Donec non velit vulputate, pellentesque dui sed, cursus elit."
                                    </p>
                                    <p className="subtitle">
                                        - Lorem Ipsum
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="card">
                                <div className="card-content">
                                    <p className="title">
                                        "Praesent viverra quam nec velit commodo ultrices. Morbi tempor a velit sit amet
                                        porta. Donec non velit vulputate, pellentesque dui sed, cursus elit."
                                    </p>
                                    <p className="subtitle">
                                        - Lorem Ipsum
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;