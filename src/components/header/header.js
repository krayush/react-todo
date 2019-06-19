import React from 'react';
import './header.css';

class Header extends React.Component {
    constructor(props) {
        // this is the first thing that gets called when class initializes
        // super here refers to constructor of parent class
        // parent class here is React.Component
        // So basically we are calling the constructor of React.Component Class
        super(props);
        // state is an object in React
        this.state = {
            username: "test",
            timer: 0
        };
    }
    render() {
        // render is called everytime there is a change is state or props
        // for now we are only playing around with state
        return (
            <div>
                <div className="nav-item">Welcome {this.state.username}</div>
                {this.state.timer}
            </div>
        );
    }
    componentDidMount() {
        // this function will be called when the component is attached or added or rendered on the UI
        setInterval(() => {
            // this function is used for setting the state
            this.setState({
                timer: this.state.timer + 1
            });
        }, 1000);
    }
}

export default Header;

