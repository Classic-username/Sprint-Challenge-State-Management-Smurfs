import React from 'react';
import {connect} from 'react-redux';

const SmurfList = props => {
    console.log(props,'props inside smrflst')
    return (
        <div>

            {props.smurf.map(smrf => (
                <div>
                    <h3>Name: {smrf.name}</h3>
                    <p>Age: {smrf.age}</p>
                    <p>Height: {smrf.height}</p>
                </div>
            ))}
            
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state,'inside mstp')
    return {
        smurf: state.smurf,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(SmurfList)