import React, { useState } from 'react'
import PropTypes from 'prop-types';


export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleOnChange = (event) =>{
        console.log(text);
        setText(event.target.value);
    }
    const handleOnClick = (event) =>{
        console.log('Uppercase Was Clicked'+ text);
        let newText = text.toUpperCase();
        setText(newText); 
        props.showAlert('Text is uppercase Succesfully', 'success')
    }
    
    const handleClickLower = (event) =>{
        console.log('Lowercase Was Clicked'+ text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Text is lowerCase Succesfully', 'success')
    }

    const handleClearr = (event) =>{        
        setText("");
        props.showAlert('Text is clear Succesfully', 'success')
    }
    const handleCopy= (event) =>{        
        let text = document.querySelector('#textarea');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Text is copied to clipboard Succesfully', 'success')
    }
    const handleremovespace = (event) =>{      
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))  
        props.showAlert('Remove space in text Succesfully', 'success')
    }
    
    return (
        <>
        <div className='container my-3'>
            
            <h1 className={`text-${props.mode=='light'? 'dark':'light'}`}>{props.title}</h1>
            <div className='mb-3'>
                <label htmlFor='textarea'></label>
                <textarea rows="8" id="textarea" value={text} onChange={handleOnChange}></textarea>              

            </div>
            <button className='btn btn-primary mx-1' onClick={handleOnClick}>Convert to Uppercase</button>
            <button className='btn btn-primary mx-1' onClick={handleClickLower}>Convert to Lowercase</button>
            <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-1' onClick={handleClearr}>Clear</button>
            <button className='btn btn-primary mx-1' onClick={handleremovespace}>Remove Space</button>
            
        </div>
        <div className={`container my-3 text-${props.mode=='light'? 'dark':'light'}`}>
        <h1>Your text Summary</h1>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008*text.split('').length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0? text : 'Enter something above in textarea to preview'}</p>
        </div>
        </>
    )
}

TextForm.propTypes = {
    title: PropTypes.string.isRequired,
  }
