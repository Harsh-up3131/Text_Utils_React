import React, {useState} from 'react'


export default function Textform(props) {
  const handleUpClick = ()=>{
    console.log("UpperCase was Clicked." + text);
    let newText=text.toUpperCase();
    setText(newText)
  }
  const handleLoClick = ()=>{
    console.log("UpperCase was Clicked." + text);
    let newText=text.toLowerCase();
    setText(newText)
  }
  const handleOnChange = (event)=>{

    console.log("On Change");
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'#221164':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#221164':'white',color: props.mode==='dark'?'white':'black'}} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
    </div>
    <div className="container my-3" style={{backgroundColor:props.mode==='dark'?'#221164':'white'}}>
    <h3>Your Text Summary</h3>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008* text.split(" ").length} Minutes Read.</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter something in the textbox to preview it here."}</p>
    </div>
    </>
  )
}
 