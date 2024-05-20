import React, {useState} from 'react';
import '../App';
export default function Footer(props){
    const [footer, setFooter] = useState('footer');
    return(
    <>
    <div className="container footer"
     style={{color:props.mode==='light'?'black':'white'}}
    //  style={{color:props.mode==='light'?'black':'white'}}
     >
    <div className="section2">
        <h3>{props.section1}</h3>
        <div className="content">
        <p>whatsapp: 984774997</p>
        <p>Viber: 9813895290</p>
        <p>Email: aashisrijal252@gmail.com</p>
        <p>we are in social media also</p>
        </div>
    </div>

    <div className="section1 mx-3">
        <h3>{props.section2}</h3>
        <div className="content">
        <p>I am developing the textutils app which is efective and usefull for the every users</p>
        <p>Thank you for visiting my application</p>
        <p>Welcome</p>
        </div>

    </div>

    
    <div className="section3 mx-3">
        <h3>{props.section3}</h3>
        <div className="content">
        <a href="www.tiktok.com">Tiktok</a>
        <a href="www.facebook.com">Facebook</a>
        <a href="www.instagram.com">Instagram</a>
        <a href="www.github.com">Github</a>
        </div>
    </div>


    </div>
    <p  className='text-center' style={{color:props.mode==='light'?'black':'white'}}>@copyright/aashisrjl </p>
   

    </>
    )

}