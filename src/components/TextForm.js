import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("uppercase was clicked: "+ text);
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case","success");
    }
    const handleLoClick = ()=>{
        // console.log("uppercase was clicked: "+ text);
        let newText= text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lower case","success");
    }
    const handleClearClick = ()=>{
        // console.log("uppercase was clicked: "+ text);
        let newText= '';
        setText(newText)
        props.showAlert("Text Cleared","success");
    }
    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard","success");

    }
    const handleExtraSpaces =() =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces","success");
    }

    const[text,setText] = useState(' ');
    //text="new text";//wrong way
    //setText("new text");//right way
    return (
        <>
        <div className='container' style={{color:props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            {/* <label for="myBox" className='form-label'>Comments</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} id="myBox" ></textarea>
                
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
         <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>1 ? text : 'enter something in the textbox above to preview it here'}</p>
        </div>
        </>
    )
}

