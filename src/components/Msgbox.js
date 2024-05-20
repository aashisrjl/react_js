import React ,{useState} from 'react';
import '../App.css';
function Msgbox(props,Mystyle){
    const [msg,setMsg] = useState("this is msg");
    <div className="msg-box" style={Mystyle}>
        This is msg !
        <span className='cross' >x</span>
    </div>
}
export default Msgbox;
