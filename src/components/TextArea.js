import React, { useState } from 'react';

export default function TextArea(props) {

    const upperClickFunc = () => {
        // console.log("Uppercase button was clicked",text); / * debugging purpose
        let newText = text.toUpperCase();
        setText(newText);
    };

    const lowerClickFunc = () => {
        let newText = text.toLowerCase();
        setText(newText);
    };


    const copyText = () => {
        var text = document.getElementById("textarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
        alert("Copied to clipboard");
    };

    const clearFunc = () => {
        setText("");
    };

    const onChangeHandle = (event) => {
        // console.log("Handle onchange"); /* debugging purpose
        setText(event.target.value);
    };

    const [text, setText] = useState("");
    return (
        <>
            <div className="container my-3" >
                <h5 htmlFor="exampleFormControlTextarea1" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}><b> {props.heading} </b></h5>
                <div className="mb-3 my-3">
                    <textarea className={`form-control bg-${props.mode}`} style={{ color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={onChangeHandle} id="textarea1" rows="9"></textarea>

                    <div>
                        <button type="button" className={`btn btn-${props.btnColor} my-3`} onClick={copyText}> <i> Copy text </i> </button>
                    </div>
                    <button className={`btn btn-${props.btnColor} my-3`} onClick={upperClickFunc}> To Uppercase</button>
                    <button className={`btn btn-${props.btnColor} mx-1 my-3`} onClick={lowerClickFunc}> To Lowercase</button>
                    <button className="btn btn-danger mx-1 my-3" onClick={clearFunc}> Clear </button>
                </div>

                <div className="{form-check form-switch}">
                    <input clasNameclassName="form-check-input" onClick={props.darkMode} type="checkbox" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" for="flexSwitchCheckDefault">Change Theme</label>
                </div>
            </div>
            <div className="container1 mx-1" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h5> Text analysis:</h5>
                <p> <b> {text.length > 0 ? text.split(" ").length : "0"} </b> words and characters <b> {text.length} </b> </p>
                <p> <b> {0.008 * text.split(" ").length} </b> Min to read</p>
                <h5> Prev.</h5>
                <p> {text.length > 0 ? text : "Enter something to preview"} </p>
            </div>
        </>
    )
}