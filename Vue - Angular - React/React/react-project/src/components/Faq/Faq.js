import React, {Component} from 'react';
import './Faq.css';
import axios from 'axios'

class Faq extends Component {

    constructor(props) {
        super(props);

        this.state = {
            faqs: []
        };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                    const faqs = res.data.slice(0, 10);
                    this.setState({faqs});
                })
    }

    render() {
        return (
            <div className="faq">
                <div className="container">
                    <section className="section">
                        <h1 className="title">FAQ</h1>
                        <h2 className="subtitle is-4">
                            Duis feugiat, risus quis rhoncus semper, ligula lorem facilisis risus, non varius nunc enim
                            a dui. Donec elit
                            lacus, hendrerit eget tortor quis, efficitur vestibulum lectus. In posuere
                        </h2>

                        <div className="columns">
                            { this.state.faqs.map(faq =>
                                <div className="column is-one-third" v-for="faq of faqs">
                                    <div className="card">
                                        <div className="card-content">
                                            <p className="title">1{ faq.title }</p>
                                            <p className="answer">2{ faq.body }</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default Faq;