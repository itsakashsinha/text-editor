import React, { useState} from 'react';

export default function TextArea(props) {
    
    const upperClickFunc = ()=>{
        // console.log("Uppercase button was clicked",text); / * debugging purpose
        let newText = text.toUpperCase();
        setText(newText);
    };

    const lowerClickFunc = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    };

   
    const copyText = ()=>{
        var text = document.getElementById("textarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
    };

    const clearFunc = ()=>{
        setText("");
    };

    const onChangeHandle = (event)=>{
        // console.log("Handle onchange"); /* debugging purpose
        setText(event.target.value);
    };

    const [text, setText] = useState("");
    return (
         <>
        <div className='container'>
            <label htmlFor="exampleFormControlTextarea1"><b> {props.heading} </b></label>
            <div className="mb-3 my-3">
                <textarea className="form-control" value={text} onChange={onChangeHandle} id="textarea1" rows="9"></textarea>
                <div>
                <button className='btn btn-outline-primary my-3' onClick={copyText}> <i> Copy text </i> </button>
                </div>
                <button className='btn btn-outline-primary my-3' onClick={upperClickFunc}> To Uppercase</button>
                <button className='btn btn-outline-primary mx-1 my-3' onClick={lowerClickFunc}> To Lowercase</button>
                <button className='btn btn-outline-danger mx-1 my-3' onClick={clearFunc}> Clear </button>
            </div>
        </div>
        <div className="container1 mx-1">
            <h5> Text analysis:</h5>
            <p> <b> {text.split(" ").length} </b> words and characters <b> {text.length} </b> </p>
            <p> <b> {0.008 * text.split(" ").length} </b> Min to read</p>
            <h5> Prev.</h5>
            <p> {text} </p>
        </div>
         </>
    )
}