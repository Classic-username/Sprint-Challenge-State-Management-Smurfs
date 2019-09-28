import React, {useEffect} from 'react';
import Axios from 'axios';

const SmurfTest = () => {
    useEffect(() => {
        Axios
            .get('http://localhost:3333/smurfs')
            .then(res => console.log(res, 'inside SmurfTest'))
            .catch(err => console.log(err))
    }, [])
    
    return (
        <div></div>
    )
}

export default SmurfTest