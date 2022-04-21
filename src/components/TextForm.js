import React , {useState} from 'react'
import '../App.css';

export default function TextForm(props) {
    const handleUpClick = ()=>{        
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('converted to uppercase successfully','success');
    }
    
    const handleClearClick = ()=>{        
        let newText ="";
        setText(newText);
    }
    
    const handleLoClick = ()=>{        
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('converted to lowercase successfully','success');
    }
    
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    
    const handleCopy = ()=>{
        let text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('copy to clipboard successfully','success');
    }
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('extra spaces removed successfully','success');
    }
    
    const [text,setText]=useState('');
    return (
        <>
        <div className='container' style={{color:props.mode==='light'?'black':'white'}}>           
            <h1>{props.heading} </h1>
            <div className="mb-3">
            <textarea className="form-control" id="mybox" rows="8" style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} value={text} onChange={handleOnChange}></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button type="button" className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>

        <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length >0?text:"Enter something into preview it here"}</p>
        </div>
        </>
    )
}
