import React, { useState } from 'react';
export default function About() {

    const [newStyle, setnewStyle] = useState({          // color state
        color: 'red',
        backgroundColor: 'white',
        border: '1px solid black'
    });
    const [btnText, setbtnText] = useState('Dark Mode');   // btn text state

    const toggleStyle = () => {
        if (newStyle.backgroundColor === 'white') {     // if bgColor is white -> black
            setnewStyle({
                color: 'white',
                backgroundColor: 'black',
                border: '1px solid white'
            });
            setbtnText('Light Mode');       // Updating text state
        }
        else {                             // black -> white
            setnewStyle({
                color: 'black',
                backgroundColor: 'white',
                border: '1px solid black'
            });
            setbtnText('Dark mode');       // updating text state
        }
    };
    return (
        <div classNameName='container my-3'>
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <h3> About Us</h3>
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" style={newStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={newStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" style={newStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={newStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" style={newStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={newStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                    </div>
                </div>
            </div>
            <div className='my-3'>
                <button type="button" onClick={toggleStyle} class="btn btn-outline-dark">{btnText}</button>
            </div>
        </div>

    )
}
