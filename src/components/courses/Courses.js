import React from 'react';


const courses = (props) => {
    const addHandle = props.addHandle;
    const divStyle = {
        border : '2px solid gray',
        marginTop: '20px',
        width: '90%',
        marginLeft: '20px',
        textAlign: 'center',
        height: '250px'
    }
    
    return (
        <div style = {divStyle} className = {'card text-white bg-dark mb-3'}>
            <h3>Course Name : {props.name} </h3>
            <p>Instructor : {props.instructor}</p>
            <p>Duration : 3 month</p>
            <h4>Price : {props.price}tk</h4>
            <button className = {'btn btn-warning'} onClick = {() => addHandle(props.price)}>Enroll now</button>

        </div>
    );
};

export default courses;