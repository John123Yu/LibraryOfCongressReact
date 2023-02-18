import React from 'react';
// import { Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const style = {
    divStyle: {
        padding: 15,
        border: "2px solid blue",
        marginBottom: 10
    }
}
export default function InfoList() {
    const state = useSelector((state) => state);

    console.log("State", state)
    

    return (
        <>
        {state.titles.map((title, i) => {
            return (
                <div key={i} style={style.divStyle}>
                    <h3>{title.title}</h3>
                    <img src={title.image_url[1] } height="300px"/>
                    <p>{title.description}</p>
                </ div>
            )
        })}
        </>
    );
}
