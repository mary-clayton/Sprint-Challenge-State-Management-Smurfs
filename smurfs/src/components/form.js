//Design the functionality to add a smurf to the Smurf DB you'll need all three fields. `name`, `age`, and `height`.

import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addSmurf} from '../actions/index'

const Form = props => {
    const [newSmurf, setNewSmurf] = useState ({
        name: '',
        age: '',
        height: ''

    })
    const handleSubmit = event => {
        event.preventDefault();
        console.log(newSmurf)
        props.addSmurf(newSmurf)
    }
    const handleChanges = event => {
        let smurfName = event.target.name;
        setNewSmurf({...newSmurf, [smurfName]: event.target.value})
    }
    return (
        <div className= "smurf-form">
            <form>
                <input name="name" type="text" placeholder="name" onChange={handleChanges}></input>
                <input name="age" type="number" placeholder="age" onChange={handleChanges}></input>
                <input name="height" type="text" placeholder="height" onChange={handleChanges}></input>
                <button type="submit" onClick={handleSubmit}>Add Your Smurf</button>
            </form>
        </div>
    )
}
export default connect(null, {addSmurf})(Form)
