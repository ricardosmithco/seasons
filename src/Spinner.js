import React from 'react';


const Spinner = (props) =>{
    return(
        <React.Fragment>
        <div className="ui active dimmer">
            <div className="ui text loader">{props.message}</div>
        </div>
        </React.Fragment>
    );
};

Spinner.defaultProps ={
    message: 'Loading..'
};

export default Spinner;