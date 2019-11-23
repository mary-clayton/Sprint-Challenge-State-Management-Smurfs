import React, {useEffect} from 'react';
import Smurf from './smurf'
import {connect} from 'react-redux';
import {fetchSmurfs} from '../actions/index'

const SmurfList = props => {
    useEffect(() => {
        props.fetchSmurfs()
        console.log(props.smurfs)
    }, [])
    return (
        <div className ="smurf-list">
            {props.smurfs.map(smurf => {
                return <Smurf smurf={smurf}/>
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {fetchSmurfs}) (SmurfList)