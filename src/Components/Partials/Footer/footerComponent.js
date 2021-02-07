import React,{memo,useEffect} from 'react';
import './footer.scss'
import {Link} from "react-router-dom";
import {iframeObserver} from '../../CustomHooks/useLazyloading'
function Footer(){

    useEffect(() => {
      const arr = document.querySelectorAll('.lzy_ifrm')
      arr.forEach((v) => {
          iframeObserver.observe(v);
      })
      return () => {
        iframeObserver.disconnect();
      }
    })

        return(
            <div className='bg-dark header-footer four-box-shadow-real footer' style={{marginBottom:8,opacity:0.8}}>
                <div className="d-flex justify-content-between foot">

                    <div className="d-flex justify-content-center align-items-center frame f-contact">
                        <div>
                        <p style={{color:'white',fontWeight:'bold',textAlign:'center'}}>
                            CONTACT US</p>
                        <p style={{color:'white',fontWeight:'bold',textAlign:'left'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            +917358961528 ( India )</p>
                        <p style={{color:'white',fontWeight:'bold',textAlign:'left'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                            </svg>
                            PepLaw Technology</p>
                        <p style={{color:'white',fontWeight:'bold',textAlign:'left'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-mailbox" viewBox="0 0 16 16">
                            <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z"/>
                            <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z"/>
                            </svg>
                            dhanuram99@gmail.com</p>
                        </div>                        
                    </div>

                    <div className="d-flex justify-content-center align-items-center frame footer-pages">
                        <div>
                            <Link to="/lawyer/login">
                            <p style={{color:'white',fontWeight:'bold',textAlign:'left'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-person-check" viewBox="0 0 16 16">
                            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                            <path fillRule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                            </svg>
                            Lawyer Login</p>                            
                            </Link>
                            <Link to="/lawyer/signup">
                            <p style={{color:'white',fontWeight:'bold',textAlign:'left'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </svg>
                            Lawyer Signup</p>
                            </Link>
                            <Link to="/user/login">
                            <p style={{color:'white',fontWeight:'bold',textAlign:'left'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-person-check-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                            <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                            User Login
                            </p>
                            </Link>
                            <Link to="/user/signup">
                            <p style={{color:'white',fontWeight:'bold',textAlign:'left'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            <path fillRule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                            <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                            </svg>
                            User Signup</p>
                            </Link>
                        </div>                        
                    </div>

                    <div className="d-flex justify-content-center align-items-center frame f-map map">
                        <iframe className="map-embed lzy_ifrm" title="location" data-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.0330513836493!2d77.29640273776388!3d8.950733632835957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0429edf3449fcd%3A0x99c7a4fdf1762a61!2sMelagaram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1610875789595!5m2!1sen!2sin"
                         frameBorder="0"  allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>                        
                    </div>
                </div>
                <div className="nf-map">
                    <div className="d-flex justify-content-center align-items-center frame">
                        <div className="nf-contact">
                        <p style={{color:'white',fontWeight:'bold',textAlign:'center'}}>
                            CONTACT US</p>
                        <p style={{color:'white',fontWeight:'bold',textAlign:'left'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                            </svg>
                            +917358961528 ( India )</p>
                        <p style={{color:'white',fontWeight:'bold',textAlign:'left'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                            </svg>
                            PepLaw Technology</p>
                        <p style={{color:'white',fontWeight:'bold',textAlign:'left'}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="currentColor" className="bi bi-mailbox" viewBox="0 0 16 16">
                            <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z"/>
                            <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z"/>
                            </svg>
                            dhanuram99@gmail.com</p>
                        </div>                        
                    </div>

                     <div className="d-flex justify-content-center align-items-center frame map">
                        <iframe className="map-embed lzy_ifrm" title="location" data-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.0330513836493!2d77.29640273776388!3d8.950733632835957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0429edf3449fcd%3A0x99c7a4fdf1762a61!2sMelagaram%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1610875789595!5m2!1sen!2sin"
                         frameBorder="0"  allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>                        
                    </div>                   
                </div>
                <hr style={{backgroundColor:'white',margin:'4px 0px'}}/>
                <div style={{textAlign:'center',color:'white',padding:'10px',fontWeight:'bold'}}>
                    Peplaw @ 2021 - All rights Reserved
                </div>
            </div>


        );
}

export default memo(Footer);