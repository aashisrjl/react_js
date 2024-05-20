import React, {useState} from 'react';

export default function Textform(props) {
    const [text,setText] = useState('');
    const handleUpClick =()=>{
        console.log("uppercase was clicked");
        setText(text.toUpperCase());
        props.showalert("Converted to Uppercase","success");
    }
    const handleLoClick =()=>{
        console.log("Lowercase was clicked");
        setText(text.toLowerCase());
        props.showalert("Converted to Lowercase","success");
    }
    const Delete =()=>{
        console.log("delete btn clicked");
        setText(" ");
        props.showalert("Text deleted","danger");

    }
    const handleOnchange=(e)=>{
        console.log("On chnage");
        setText(e.target.value);
    
    }
    const Copy=(e)=>{
        navigator.clipboard.writeText(text).then(()=>{
            console.log("copied");
            props.showalert("text copied","success");
        }).catch((err)=>{
            console.log("failed to copy");
        });
    }
    const Download=(e)=>{
        if(text=== ""){
            props.showalert("Enter a text first to download","danger");
        }else{
       let filename = prompt("Enter your file name:")+'.txt';
       let blob = new Blob([text], {type:'text/plain'});
       //create a link
       let a = document.createElement("a");
       a.style.display= 'none';
       document.body.appendChild(a);

       let url = window.URL.createObjectURL(blob);
       a.href = url;
       a.download = filename;
       a.click();

       window.URL.revokeObjectURL(url);
       props.showalert("Downloaded succesfully","success");
        }
    }
    const Inverse= (e)=>{
        let newtext =" ";
        for(let i=text.length-1;i>0;i--){
            newtext+=text[i];
        }
        setText(newtext);
        props.showalert("Text invewrsed","success");
    }
    const RemoveSpaces =(e)=>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showalert("Inversed","success");
    }
  return (
    <>
    <div className='container' style={{color:props.mode === 'light' ? 'black' : 'white'}}>  
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea 
                className="form-control"
                id="myBox"
                rows={8}
                value={text}
                onChange={handleOnchange}
                defaultValue={""}
                style ={{backgroundColor: props.mode === 'light' ? 'white' : 'gray'}}
            />
            </div>
            <hr />
        <button className="btn btn-primary m-1" onClick={handleUpClick}>ToUpperCase</button>
        <button className="btn btn-primary m-1" onClick={handleLoClick}>ToLowerCase</button>
        <button className="btn btn-secondary m-1" onClick={Copy}>Copy</button>
        <button className="btn btn-secondary m-1" onClick={Download}>Download</button>
        <button className="btn btn-secondary m-1" onClick={Inverse}>Inverse</button>
        <button className="btn btn-secondary m-1" onClick={RemoveSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-danger m-1" onClick={Delete}>Clear</button>
    </div>
    <hr />

    <div className="my-2 mx-2" style={{color:props.mode === 'light' ? 'black' : 'white'}}>
        <h3>Your text Summary</h3>
        <p><b>{text.split(" ").length}</b> words || <b>{text.length}</b> character || <b>{0.08* text.split(" ").length }</b> min for read</p>
        <hr />
        <h3>Preview</h3>
        <p>{text}</p>
        
    </div>
    </>
)
}
