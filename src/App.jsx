import React, { Component } from 'react';
import GenerateEmployee from './GenerateEmployee';
import DisplayEmployee from './DisplayEmployee';

const simpsonCharac = {
        character: 'Nelson Muntz',
        image: 'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185',
        quote: 'Shoplifting is a victimless crime, like punching someone in the dark.'
    };




class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: simpsonCharac
        };
    }

    getEmployee() {
        fetch("https://thesimpsonsquoteapi.glitch.me/quotes")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    employee: data[0],
                });
            });
    }

    render() {
        return (
            <div>
                <DisplayEmployee employee={this.state.employee} />
                <GenerateEmployee selectEmployee={() => this.getEmployee()} />
            </div>

        );
    }
};

export default App;