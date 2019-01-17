import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props) { //constructor function is always going to be called here in JavaScript
        super(props); //Remember, app is borrowing functionality from base class and it has go through a setup and uses super reference to parents functions
        
        // This is the only time we do direct assignment to this.state
        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // we called setstate!!
                this.setState({lat: position.coords.latitude});

            
            },
            (err) => console.log(err)
        );
    }


    // React says we have to define render!
    render() {
     
        return <div>Lattitude: {this.state.lat} </div>;
    }
}


ReactDOM.render(
    <App/>,
    document.querySelector('#root')
);