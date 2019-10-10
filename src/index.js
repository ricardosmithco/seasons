import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component{

    state = { lat: null, errorMessage: ''}

    // this lifecycle method only gets called once, when our content first shows up on the screen.
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=> this.setState({ lat: position.coords.latitude }),
            
            (err)=> this.setState({ errorMessage: err.message })
        );
    }

    // this lifecycle method gets called everytime our component is updated.
    componentDidUpdate(){
        console.log('My component was just updated');
    }

    renderContent(){
        if(this.state.errorMessage && !this.state.latitude){
            return <div>Error: {this.state.errorMessage}</div>
        }

        if(!this.state.errorMessage && this.state.lat){
            return ( <SeasonDisplay lat = {this.state.lat}/>  
            );
        }

        return <Spinner message='Please accept location request'/>

    }

    
    render(){
        return(
            // there is actually no className called 'border red', no border 
            // is meant to appear, we just do this so that we only have ONE return 
            // line in the render method! Our helper method: 'renderContent'       
            // Allowing us to better modify our code at the last name
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
};   
    


ReactDOM.render(<App />, document.querySelector('#root'));
