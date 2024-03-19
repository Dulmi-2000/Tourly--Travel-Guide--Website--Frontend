import React from 'react'
import './Footer.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import fb from '../../Assets/fb.png'
import insta from '../../Assets/insta.png'
import x from '../../Assets/twitter.png'
import linkedin from '../../Assets/linkd.png'


const Footer = () => {
  return (
    
        <div className='footer-section'>
            <div className="container col-12">
                <div className='left-half col-12 col-lg-4 col-md-12 col-sm-12'>
                    <h3 className='hs'>Tourly</h3>
                    <br></br>
                    <p className='brif'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s,
                    </p>
                    <div className='icons'>
                        <img src={fb} className='each-icon' />
                        <img src={insta} className='each-icon'/>
                        <img src={x} className='each-icon'/>
                        <img src={linkedin} className='each-icon'/>
                    </div>
                </div>



                <div className='right-half row col-12 col-lg-8 col-md-12 col-sm-12'>

                <div className='links1 col-12 col-lg-4 col-md-3 col-sm-12 '>
                <h3 className='hs'>Quick Links</h3>
                    <br></br>
                    <div className='quick-link'>
                        {/* <Link to='Home'>Home</Link> */}
                        <p>Home</p>
                        <p>About</p>
                        <p>Places</p>
                        <p>Home</p>
                    </div>
                </div>

                <div className='links1 col-12 col-lg-4 col-md-3 col-sm-12 '>
                <h3 className='hs'>Tourly</h3>
                    <br></br>
                    <div className='quick-link'>
                        {/* <Link to='Home'>Home</Link> */}
                        <p>Home</p>
                        <p>About</p>
                        <p>Places</p>
                        <p>Home</p>
                    </div>
                </div>

                <div className='links1 col-12 col-lg-3 col-md-2 col-sm-12 '>
                <h3 className='hs'>Contacts</h3>
                    <br></br>
                    <div>
                       
                        <div className='contact'>
                        <img src='./phn.jpg' className='each-icon'/>
                        <p>+94 767 863 542 </p>
                        </div>
                           
                        <div className='contact'>
                        <img src='./phn.jpg' className='each-icon'/>
                        <p>+94 767 863 542 </p>
                        </div>

                        <div className='contact'>
                        <img src='./phn.jpg' className='each-icon'/>
                        <p>+94 767 863 542 </p>
                        </div>
                    </div>
                </div>
                </div>

                
            </div>
        </div>
   
  )
}

export default Footer